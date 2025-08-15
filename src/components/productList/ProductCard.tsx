import { Product } from "@/models/types";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article
      className="relative flex h-full flex-col rounded-lg border p-4 shadow-sm focus-within:ring-2 focus-within:ring-blue-500"
      role="group"
      aria-labelledby={`product-title-${product.index}`}
      tabIndex={0} // Focusable for keyboard users
    >
      {/* Product Image */}
      <div className="relative aspect-[4/3] w-full bg-white">
        <Image
          src={`/img/${product.productImage}`}
          alt={product.productName}
          fill
          sizes="(max-width: 640px) 100vw, 
                 (max-width: 1024px) 50vw, 
                 25vw"
          className="rounded-md object-contain p-2"
          priority={product.index < 4}
        />

        {/* On Sale Badge in top-right corner */}
        {product.isSale && (
          <span
            className="absolute top-2 left-2 rounded bg-red-600 px-2 py-1 text-xs font-bold text-white shadow"
            aria-label="This product is on sale"
          >
            On Sale
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="mt-3 flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <h2
          id={`product-title-${product.index}`}
          className="text-lg leading-snug font-semibold text-gray-900"
        >
          {product.productName}
        </h2>

        <p
          className="mt-1 font-medium text-gray-700 lg:mt-0"
          aria-label={`Price ${product.price}`}
        >
          {product.price}
        </p>
      </div>
    </article>
  );
}
