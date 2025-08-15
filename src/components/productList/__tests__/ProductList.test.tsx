// __tests__/ProductList.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import ProductList from "../index";
import { Product } from "@/models/types";

const products: Product[] = [
  {
    index: 0,
    isSale: false,
    price: "$49.99",
    productImage: "Product_1.jpeg",
    productName: "Pure Blonde Crate",
    type: "Beer",
  },
  {
    index: 1,
    isSale: true,
    price: "$14.99",
    productImage: "Product_2.jpeg",
    productName: "Victoria Bitter 4x6x375ml",
    type: "Beer",
  },
  {
    index: 2,
    isSale: false,
    price: "$24.99",
    productImage: "Product_3.jpeg",
    productName: "Kirin Megumi 4x6x330ml",
    type: "Beer",
  },
  {
    index: 3,
    isSale: true,
    price: "$4.99",
    productImage: "Product_4.jpeg",
    productName: "Panhead CH Johnny Octane Can",
    type: "Beer",
  },
  {
    index: 4,
    isSale: false,
    price: "$25.99",
    productImage: "Product_5.jpeg",
    productName: "Aquila Spark SauvB Bottle",
    type: "Wine",
  },
];

describe("ProductList", () => {
  it("renders ProductGrid when products are present", () => {
    render(<ProductList products={products} />);
    expect(screen.getByTestId("product-grid")).toBeInTheDocument();
  });

  it("shows error state when error prop is true", () => {
    render(<ProductList products={products} error />);
    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
  });

  it("shows empty state when no products match filter/search", () => {
    render(<ProductList products={products} />);

    const input = screen.getByTestId("search-input");
    fireEvent.change(input, { target: { value: "NonExistingProduct" } });

    expect(screen.getByText(/No products found/i)).toBeInTheDocument();
  });
});
