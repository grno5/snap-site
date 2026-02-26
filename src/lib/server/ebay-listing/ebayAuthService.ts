/**
 * eBay OAuth (user login + app token) for Listing API. Uses fetch.
 */

import { randomBytes } from "node:crypto";
import { ebayListingConfig, ebayListingUrls } from "./config";
import type { EbayOAuthTokenResponse, EbayUserTokenResponse } from "./types";

const INVENTORY_SCOPE = "https://api.ebay.com/oauth/api_scope/sell.inventory";
const ACCOUNT_SCOPE = "https://api.ebay.com/oauth/api_scope/sell.account";
const DEFAULT_SCOPES = [INVENTORY_SCOPE, ACCOUNT_SCOPE].join(" ");

const pendingUserTokens = new Map<
  string,
  { accessToken: string; refreshToken: string; expiresIn: number }
>();

let cachedAppToken: { accessToken: string; expiresAt: number } | null = null;

function getBasicAuthHeader(): string {
  const credentials = Buffer.from(
    `${ebayListingConfig.clientId}:${ebayListingConfig.clientSecret}`,
    "utf-8"
  ).toString("base64");
  return `Basic ${credentials}`;
}

function prunePending(): void {
  if (pendingUserTokens.size > 100) pendingUserTokens.clear();
}

/** Application access token (client credentials). */
export async function getAppAccessToken(): Promise<string> {
  const now = Date.now();
  const bufferMs = 60_000;
  if (cachedAppToken && cachedAppToken.expiresAt > now + bufferMs) {
    return cachedAppToken.accessToken;
  }
  const body = new URLSearchParams({
    grant_type: "client_credentials",
    scope: DEFAULT_SCOPES,
  }).toString();

  const res = await fetch(ebayListingUrls.oauthToken, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: getBasicAuthHeader(),
    },
    body,
  });
  if (!res.ok) throw new Error(`eBay token failed: ${res.status} ${await res.text()}`);
  const data = (await res.json()) as EbayOAuthTokenResponse;
  cachedAppToken = {
    accessToken: data.access_token,
    expiresAt: now + data.expires_in * 1000,
  };
  return data.access_token;
}

/** Build authorize URL for user login. redirectUriOverride can be full callback URL from request. */
export function getAuthorizationUrl(
  state?: string,
  redirectUriOverride?: string
): { authorizeUrl: string; state: string } {
  const actualState = state ?? randomBytes(16).toString("hex");
  const redirectUri =
    redirectUriOverride?.trim() || ebayListingConfig.redirectUri.trim();
  const params = new URLSearchParams({
    client_id: ebayListingConfig.clientId,
    response_type: "code",
    redirect_uri: redirectUri,
    scope: DEFAULT_SCOPES,
    state: actualState,
  });
  const authorizeUrl = `${ebayListingUrls.authorize}?${params.toString()}`;
  return { authorizeUrl, state: actualState };
}

/** Exchange code for user tokens; store by state for later retrieval. */
export async function exchangeCodeForUserToken(
  code: string,
  state: string,
  redirectUriOverride?: string
): Promise<void> {
  const redirectUri =
    redirectUriOverride?.trim() || ebayListingConfig.redirectUri.trim();
  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code: code.trim(),
    redirect_uri: redirectUri,
  }).toString();

  const res = await fetch(ebayListingUrls.oauthToken, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: getBasicAuthHeader(),
    },
    body,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Token exchange failed: ${res.status} ${text}`);
  }
  const data = (await res.json()) as EbayUserTokenResponse;
  prunePending();
  pendingUserTokens.set(state, {
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    expiresIn: data.expires_in,
  });
}

/** Get tokens by state (one-time; state is removed). */
export function getTokensForState(state: string): {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
} | null {
  const entry = pendingUserTokens.get(state);
  if (!entry) return null;
  pendingUserTokens.delete(state);
  return entry;
}

/** Refresh user access token. */
export async function refreshUserAccessToken(refreshToken: string): Promise<{
  accessToken: string;
  expiresIn: number;
}> {
  const body = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
    scope: DEFAULT_SCOPES,
  }).toString();

  const res = await fetch(ebayListingUrls.oauthToken, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: getBasicAuthHeader(),
    },
    body,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Refresh failed: ${res.status} ${text}`);
  }
  const data = (await res.json()) as EbayOAuthTokenResponse;
  return {
    accessToken: data.access_token,
    expiresIn: data.expires_in,
  };
}
