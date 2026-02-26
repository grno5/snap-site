/**
 * POST /api/oauth/ebay/refresh
 * Body: { refreshToken: string }. Returns new access token.
 */

import type { ActionFunctionArgs } from "react-router";
import { refreshUserAccessToken } from "@/lib/server/ebay-listing/ebayAuthService";

export const action = async ({ request }: ActionFunctionArgs) => {
  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }
  let body: { refreshToken?: string };
  try {
    body = (await request.json()) as { refreshToken?: string };
  } catch {
    return Response.json(
      { error: "Invalid JSON or missing body" },
      { status: 400 }
    );
  }
  const refreshToken = body.refreshToken;
  if (!refreshToken) {
    return Response.json(
      { error: "Missing refreshToken in body" },
      { status: 400 }
    );
  }
  try {
    const result = await refreshUserAccessToken(refreshToken);
    return Response.json({
      accessToken: result.accessToken,
      expiresIn: result.expiresIn,
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Refresh failed";
    return Response.json(
      { error: "Refresh failed", message },
      { status: 500 }
    );
  }
};
