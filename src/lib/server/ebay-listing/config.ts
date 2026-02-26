/**
 * eBay Listing API config (OAuth + Inventory). Uses same env as existing EbayAPIService where applicable.
 */

const env = process.env;

export const ebayListingConfig = {
  clientId: env.EBAY_CLIENT_ID ?? "",
  clientSecret: env.EBAY_CLIENT_SECRET ?? "",
  environment: (env.EBAY_ENVIRONMENT ?? "sandbox") as "sandbox" | "production",
  contentLanguage: env.EBAY_CONTENT_LANGUAGE ?? "en-US",
  /** RuName or full callback URL - must match Auth Accepted URL in eBay Developer Portal */
  redirectUri: env.EBAY_REDIRECT_URI ?? env.EBAY_RUNAME ?? "",
  /** Where to send the user after OAuth (e.g. snaptosell://oauth) */
  appOAuthRedirect: env.APP_OAUTH_REDIRECT ?? "snaptosell://oauth",
} as const;

const ebayBaseUrl =
  ebayListingConfig.environment === "production"
    ? "https://api.ebay.com"
    : "https://api.sandbox.ebay.com";

const ebayAuthHost =
  ebayListingConfig.environment === "production"
    ? "https://auth.ebay.com"
    : "https://auth.sandbox.ebay.com";

export const ebayListingUrls = {
  oauthToken: `${ebayBaseUrl}/identity/v1/oauth2/token`,
  authorize: `${ebayAuthHost}/oauth2/authorize`,
  inventoryBase: `${ebayBaseUrl}/sell/inventory/v1`,
} as const;

export function validateEbayListingOAuthConfig(): void {
  if (!ebayListingConfig.clientId || !ebayListingConfig.clientSecret) {
    throw new Error(
      "EBAY_CLIENT_ID and EBAY_CLIENT_SECRET are required for eBay user login."
    );
  }
  if (!ebayListingConfig.redirectUri.trim()) {
    throw new Error(
      "EBAY_REDIRECT_URI or EBAY_RUNAME is required. Set it to your RuName or full callback URL from eBay Developer Portal."
    );
  }
}
