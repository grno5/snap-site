/**
 * eBay Inventory API types (subset used for creating listings)
 */

export interface CreateInventoryItemPayload {
  availability: {
    shipToLocationAvailability: {
      quantity: number;
      merchantLocationKey?: string;
      fulfillmentTime?: { value: number; unit: string };
    };
    pickupAtLocationAvailability?: Array<{
      quantity: number;
      merchantLocationKey: string;
      availabilityType?: string;
      fulfillmentTime?: { value: number; unit: string };
    }>;
  };
  condition?: string;
  conditionDescription?: string;
  product: {
    title: string;
    description?: string;
    aspects?: Record<string, string[]>;
    imageUrls?: string[];
    upc?: string;
    ean?: string[];
    isbn?: string[];
    brand?: string;
    mpn?: string;
  };
  packageWeightAndSize?: {
    weight?: { value: number; unit: string };
    dimensions?: { length: number; width: number; height: number; unit: string };
    packageType?: string;
  };
}

export interface CreateOfferPayload {
  sku: string;
  marketplaceId: string;
  format?: string;
  listingDescription?: string;
  listingPolicies: {
    paymentPolicyId: string;
    returnPolicyId: string;
    fulfillmentPolicyId: string;
  };
  quantityLimitPerBuyer?: number;
  categoryId?: string;
  merchantLocationKey?: string;
  pricingSummary?: {
    price: { value: string; currency: string };
  };
}

export interface PublishOfferResponse {
  listingId?: string;
  statusCode?: number;
  [key: string]: unknown;
}

export interface EbayOAuthTokenResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export interface EbayUserTokenResponse extends EbayOAuthTokenResponse {
  refresh_token: string;
  refresh_token_expires_in: number;
}
