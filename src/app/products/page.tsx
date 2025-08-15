import { getProducts } from "@/models/products";
import ProductList from "@/components/productList";

export default async function ProductsPage() {
  const { error, data } = await getProducts();
  // The rest of the filter/search logic can still happen in a client subcomponent
  return <ProductList products={data} error={error} />;
}
