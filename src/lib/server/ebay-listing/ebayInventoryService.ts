/**
 * eBay Inventory API (create listing). Uses fetch.
 */

import { ebayListingConfig, ebayListingUrls } from "./config";
import { getAppAccessToken } from "./ebayAuthService";
import type {
  CreateInventoryItemPayload,
  CreateOfferPayload,
  PublishOfferResponse,
} from "./types";

const inventoryBase = ebayListingUrls.inventoryBase;
const contentLanguage = ebayListingConfig.contentLanguage;

async function authHeaders(userAccessToken?: string): Promise<Record<string, string>> {
  const token = userAccessToken ?? (await getAppAccessToken());
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    "Content-Language": contentLanguage,
  };
}

export async function createOrReplaceInventoryItem(
  sku: string,
  payload: CreateInventoryItemPayload,
  userAccessToken?: string
): Promise<void> {
  const url = `${inventoryBase}/inventory_item/${encodeURIComponent(sku)}`;
  const headers = await authHeaders(userAccessToken);
  const res = await fetch(url, {
    method: "PUT",
    headers,
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Inventory item failed: ${res.status} ${await res.text()}`);
}

export async function createOffer(
  payload: CreateOfferPayload,
  userAccessToken?: string
): Promise<{ offerId: string }> {
  const url = `${inventoryBase}/offer`;
  const headers = await authHeaders(userAccessToken);
  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Create offer failed: ${res.status} ${await res.text()}`);
  return (await res.json()) as { offerId: string };
}

export async function publishOffer(
  offerId: string,
  userAccessToken?: string
): Promise<PublishOfferResponse> {
  const url = `${inventoryBase}/offer/${encodeURIComponent(offerId)}/publish`;
  const headers = await authHeaders(userAccessToken);
  const res = await fetch(url, {
    method: "POST",
    headers,
    body: "{}",
  });
  if (!res.ok) throw new Error(`Publish failed: ${res.status} ${await res.text()}`);
  return (await res.json()) as PublishOfferResponse;
}

export interface CreateListingInput {
  sku: string;
  inventoryItem: CreateInventoryItemPayload;
  offer: Omit<CreateOfferPayload, "sku">;
}

export interface CreateListingResult {
  offerId: string;
  listingId?: string;
  publishResponse: PublishOfferResponse;
}

export async function createListing(
  input: CreateListingInput,
  userAccessToken?: string
): Promise<CreateListingResult> {
  await createOrReplaceInventoryItem(
    input.sku,
    input.inventoryItem,
    userAccessToken
  );
  const { offerId } = await createOffer(
    { ...input.offer, sku: input.sku },
    userAccessToken
  );
  const publishResponse = await publishOffer(offerId, userAccessToken);
  return {
    offerId,
    listingId: publishResponse.listingId as string | undefined,
    publishResponse,
  };
}
