/**
 * GET /api/oauth/ebay/authorize-url
 * Returns eBay consent URL for Flutter/web to open. Optional query: state
 */

import type { LoaderFunctionArgs } from "react-router";
import { getAuthorizationUrl } from "@/lib/server/ebay-listing/ebayAuthService";
import { validateEbayListingOAuthConfig } from "@/lib/server/ebay-listing/config";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  if (request.method !== "GET") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }
  try {
    validateEbayListingOAuthConfig();
  } catch (e) {
    const message = e instanceof Error ? e.message : "OAuth not configured";
    return Response.json(
      { error: "Configuration", message },
      { status: 500 }
    );
  }
  const url = new URL(request.url);
  const state = url.searchParams.get("state") ?? undefined;
  const { authorizeUrl, state: resolvedState } = getAuthorizationUrl(state);
  return Response.json({ authorizeUrl, state: resolvedState });
};
