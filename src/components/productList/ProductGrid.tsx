import { Product } from '@/models/types';
import ProductCard from './ProductCard';

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((p) => (
        <ProductCard key={`${p.type}-${p.index}`} product={p} />
      ))}
    </div>
  );
}
