import { Product } from '@/models/types';
import Image from 'next/image';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article
      className="border p-4 rounded-lg shadow-sm flex flex-col h-full relative focus-within:ring-2 focus-within:ring-blue-500"
      role="group"
      aria-labelledby={`product-title-${product.index}`}
      tabIndex={0} // Focusable for keyboard users
    >
      {/* Product Image */}
      <div className="relative w-full aspect-[4/3] bg-white">
        <Image
          src={`/img/${product.productImage}`}
          alt={product.productName}
          fill
          sizes="(max-width: 640px) 100vw, 
                 (max-width: 1024px) 50vw, 
                 25vw"
          className="object-contain p-2 rounded-md"
          priority={product.index < 4}
        />

        {/* On Sale Badge in top-right corner */}
        {product.isSale && (
          <span
            className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow"
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
          className="text-lg font-semibold text-gray-900 leading-snug"
        >
          {product.productName}
        </h2>

        <p
          className="text-gray-700 mt-1 lg:mt-0 font-medium"
          aria-label={`Price ${product.price}`}
        >
          {product.price}
        </p>
      </div>
    </article>
  );
}
