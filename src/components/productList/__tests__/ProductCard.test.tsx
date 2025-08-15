// __tests__/ProductCard.test.tsx
import { render, screen } from "@testing-library/react";
import ProductCard from "../ProductCard";
import { Product } from "@/models/types";

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

describe("ProductCard", () => {
  const baseProduct: Product = {
    index: 1,
    productName: "Test Product",
    productImage: "test-product.jpg",
    price: "$99.99",
    isSale: false,
    type: "Beer",
  };

  it("renders product name and price", () => {
    render(<ProductCard product={baseProduct} />);

    expect(screen.getByText(baseProduct.productName)).toBeInTheDocument();
    expect(screen.getByText(baseProduct.price)).toBeInTheDocument();
  });

  it("renders product image with correct src and alt", () => {
    render(<ProductCard product={baseProduct} />);

    const img = screen.getByRole("img", { name: baseProduct.productName });
    expect(img).toHaveAttribute("src", `/img/${baseProduct.productImage}`);
    expect(img).toHaveAttribute("alt", baseProduct.productName);
  });

  it('does not show "On Sale" badge if product.isSale is false', () => {
    render(<ProductCard product={baseProduct} />);

    const badge = screen.queryByText(/On Sale/i);
    expect(badge).not.toBeInTheDocument();
  });

  it('shows "On Sale" badge if product.isSale is true', () => {
    render(<ProductCard product={{ ...baseProduct, isSale: true }} />);

    const badge = screen.getByText(/On Sale/i);
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveAttribute("aria-label", "This product is on sale");
  });

  it("sets priority=false for products with index >= 4", () => {
    render(<ProductCard product={{ ...baseProduct, index: 5 }} />);

    const img = screen.getByRole("img", { name: baseProduct.productName });
    expect(img).not.toHaveAttribute("priority");
  });
});
