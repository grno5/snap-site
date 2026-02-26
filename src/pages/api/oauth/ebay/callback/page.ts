/**
 * GET /api/oauth/ebay/callback
 * eBay redirects here after user grants consent. Exchanges code for tokens, then serves HTML with "Open app" link.
 */

import type { LoaderFunctionArgs } from "react-router";
import { exchangeCodeForUserToken } from "@/lib/server/ebay-listing/ebayAuthService";
import { validateEbayListingOAuthConfig } from "@/lib/server/ebay-listing/config";
import { ebayListingConfig } from "@/lib/server/ebay-listing/config";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function errorPage(title: string, message: string): Response {
  const html =
    `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title>` +
    `<style>body{font-family:system-ui,sans-serif;padding:2rem;max-width:400px;margin:0 auto;} .err{color:#b91c1c;background:#fef2f2;padding:1rem;border-radius:8px;margin:1rem 0;font-size:14px;} h1{font-size:1.25rem;}</style></head><body>` +
    `<h1>${title}</h1><div class="err">${escapeHtml(message)}</div><p>Close this and try again in the app.</p></body></html>`;
  return new Response(html, {
    status: 500,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  if (request.method !== "GET") {
    return new Response("Method not allowed", { status: 405 });
  }
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");

  if (!code || !state) {
    return new Response(
      errorPage(
        "Missing code or state",
        "eBay did not send code or state. Check your Auth Accepted URL in eBay Developer Portal."
      ),
      { status: 400, headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }

  try {
    validateEbayListingOAuthConfig();
    const redirectUri = ebayListingConfig.redirectUri.trim();
    if (!redirectUri) throw new Error("EBAY_REDIRECT_URI is required");
    await exchangeCodeForUserToken(code, state, redirectUri);
  } catch (e) {
    const message = e instanceof Error ? e.message : "Token exchange failed";
    return errorPage("Login failed", message);
  }

  const appRedirect =
    ebayListingConfig.appOAuthRedirect || "snaptosell://oauth";
  const separator = appRedirect.includes("?") ? "&" : "?";
  const deepLink = `${appRedirect}${separator}state=${encodeURIComponent(state)}`;
  const html =
    `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>eBay connected</title>` +
    `<style>body{font-family:system-ui,sans-serif;padding:2rem;text-align:center;max-width:360px;margin:0 auto;} a{display:inline-block;margin-top:1rem;padding:14px 28px;background:#0052FF;color:#fff;text-decoration:none;border-radius:8px;font-weight:600;} p{color:#333;line-height:1.5;}</style></head><body>` +
    `<p>eBay account connected.</p><p>Tap the button below to return to SnapToSell.</p>` +
    `<a href="${deepLink}">Open SnapToSell</a></body></html>`;

  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
};
