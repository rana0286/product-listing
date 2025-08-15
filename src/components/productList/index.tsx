"use client";

import { useState, useMemo } from "react";
import ProductGrid from "./ProductGrid";
import ProductFilters from "./ProductFilters";
import type { Product } from "@/models/types";

export default function ProductList({ products }: { products: Product[] }) {
  const [selectedType, setSelectedType] = useState("");
  const [search, setSearch] = useState("");

  const productTypes = useMemo(
    () => Array.from(new Set(products.map((p) => p.type))),
    [products],
  );

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesType = selectedType ? p.type === selectedType : true;
      const matchesSearch = p.productName
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesType && matchesSearch;
    });
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
      <ProductGrid products={filtered} />
    </main>
  );
}
