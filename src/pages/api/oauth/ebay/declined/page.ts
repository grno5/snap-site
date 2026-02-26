/**
 * GET /api/oauth/ebay/declined
 * Use this URL as "Auth declined URL" in eBay Developer Portal.
 */

import type { LoaderFunctionArgs } from "react-router";

const html =
  `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Authorization cancelled</title>` +
  `<style>body{font-family:system-ui,sans-serif;padding:2rem;text-align:center;max-width:360px;margin:0 auto;} p{color:#333;line-height:1.5;}</style></head><body>` +
  `<p>You declined authorization. You can close this window and return to the app.</p></body></html>`;

export const loader = async ({ request }: LoaderFunctionArgs) => {
  if (request.method !== "GET") {
    return new Response("Method not allowed", { status: 405 });
  }
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
};
