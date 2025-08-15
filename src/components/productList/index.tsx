"use client";

import { useState, useMemo } from "react";
import ProductGrid from "./ProductGrid";
import ProductFilters from "./ProductFilters";
import type { Product } from "@/models/types";

export default function ProductList({
  products,
  error,
}: {
  products: Product[] | null;
  error?: boolean;
}) {
  const [selectedType, setSelectedType] = useState("");
  const [search, setSearch] = useState("");

  const productTypes = useMemo(
    () => Array.from(new Set(products?.map((p) => p.type))),
    [products],
  );

  // Filtered data based on set search and filter type
  const filtered = useMemo(() => {
    return (
      products?.filter((p) => {
        const matchesType = selectedType ? p.type === selectedType : true;
        const matchesSearch = p.productName
          .toLowerCase()
          .includes(search.toLowerCase());
        return matchesType && matchesSearch;
      }) || []
    );
  }, [products, selectedType, search]);

  return (
    <main className="p-6">
      <ProductFilters
        types={productTypes}
        selectedType={selectedType}
        search={search}
        onTypeChange={setSelectedType}
        onSearchChange={setSearch}
      />

      {/* Error state */}
      {error && (
        <div className="flex justify-center rounded bg-red-100 p-4 align-middle text-red-700">
          <p>Something went wrong, please try after sometime</p>
        </div>
      )}

      {/* Empty state (no results) */}
      {!error && filtered.length === 0 && (
        <div className="flex justify-center rounded bg-gray-100 p-4 align-middle text-gray-600">
          <p>No products found for your search or filter.</p>
        </div>
      )}

      {/* Product grid */}
      {!error && filtered.length > 0 && <ProductGrid products={filtered} />}
    </main>
  );
}
