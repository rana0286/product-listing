import type { Product } from "./types";
import products from "@/data/products.json";

// Simulate async fetch (can be replaced with fetch/axios call later)
export async function getProducts(): Promise<{
  error: boolean;
  data: Product[] | null;
}> {
  try {
    // Simulating network delay (optional)
    await new Promise((resolve) => setTimeout(resolve, 500));

    // To simulate the error uncomment next line
    //throw new Error("Unable to fetch product list");
    return { error: false, data: products };
  } catch (err) {
    return { error: true, data: null };
  }
}
