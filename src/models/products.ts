import type { Product } from "./types";
import products from "@/data/products.json";

// Simulate async fetch (can be replaced with fetch/axios call later)
export async function getProducts(): Promise<Product[]> {
  // Simulating network delay (optional)
  await new Promise((resolve) => setTimeout(resolve, 500));
  return products;
}
