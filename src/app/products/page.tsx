import { getProducts } from "@/models/products";
import ProductList from "@/components/productList";

export default async function ProductsPage() {
  const products = await getProducts();
  // The rest of the filter/search logic can still happen in a client subcomponent
  return <ProductList products={products} />;
}
