/**
 * POST /api/listings
 * Create eBay listing (Inventory API). Send Authorization: Bearer <user_access_token> to post to user's account.
 */

import type { ActionFunctionArgs } from "react-router";
import { createListing } from "@/lib/server/ebay-listing/ebayInventoryService";
import type { CreateListingInput } from "@/lib/server/ebay-listing/ebayInventoryService";

export const action = async ({ request }: ActionFunctionArgs) => {
  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }
  let body: CreateListingInput;
  try {
    body = (await request.json()) as CreateListingInput;
  } catch {
    return Response.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }
  const { sku, inventoryItem, offer } = body;
  if (!sku || !inventoryItem || !offer) {
    return Response.json(
      {
        error: "Bad Request",
        message: "Request body must include sku, inventoryItem, and offer",
      },
      { status: 400 }
    );
  }
  const authHeader = request.headers.get("authorization");
  const userAccessToken = authHeader?.startsWith("Bearer ")
    ? authHeader.slice(7)
    : undefined;

  try {
    const result = await createListing(
      { sku, inventoryItem, offer },
      userAccessToken
    );
    return Response.json(
      {
        success: true,
        offerId: result.offerId,
        listingId: result.listingId,
        publishResponse: result.publishResponse,
      },
      { status: 201 }
    );
  } catch (e) {
    const message = e instanceof Error ? e.message : "eBay API error";
    return Response.json(
      { error: "eBay API error", message },
      { status: 500 }
    );
  }
};
