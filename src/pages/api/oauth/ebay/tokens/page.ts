/**
 * GET /api/oauth/ebay/tokens?state=xxx
 * Returns access + refresh tokens for the given state (one-time). Flutter calls this after receiving redirect.
 */

import type { LoaderFunctionArgs } from "react-router";
import { getTokensForState } from "@/lib/server/ebay-listing/ebayAuthService";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  if (request.method !== "GET") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }
  const url = new URL(request.url);
  const state = url.searchParams.get("state");
  if (!state) {
    return Response.json({ error: "Missing state parameter" }, { status: 400 });
  }
  const tokens = getTokensForState(state);
  if (!tokens) {
    return Response.json(
      {
        error: "Tokens not found or already retrieved",
        message: "State may have expired or already been used.",
      },
      { status: 404 }
    );
  }
  return Response.json({
    accessToken: tokens.accessToken,
    refreshToken: tokens.refreshToken,
    expiresIn: tokens.expiresIn,
  });
};
