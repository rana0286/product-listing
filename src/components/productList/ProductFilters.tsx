type Props = {
  types: string[];
  selectedType: string;
  search: string;
  onTypeChange: (type: string) => void;
  onSearchChange: (value: string) => void;
};

export default function ProductFilters({
  types,
  selectedType,
  search,
  onTypeChange,
  onSearchChange,
}: Props) {
  return (
    <form
      className="mb-6 flex flex-col gap-4 align-middle md:flex-row lg:flex-row"
      role="search"
      aria-label="Product filters"
      onSubmit={(e) => e.preventDefault()}
    >
      {/* Search products */}
      <div className="flex min-w-[200px] flex-1 items-center gap-2">
        <label
          htmlFor="product-search"
          className="text-lg font-medium whitespace-nowrap text-gray-700"
        >
          Search Product
        </label>
        <input
          type="search"
          id="product-search"
          data-testid="search-input"
          name="search"
          placeholder="Search products..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-md rounded border p-2 sm:w-sm"
        />
      </div>

      {/* Filter by product type */}
      <div className="flex min-w-[180px] flex-1 items-center justify-between gap-2 sm:flex-none md:justify-normal lg:justify-normal">
        <label
          htmlFor="product-type-filter"
          className="text-lg font-medium whitespace-nowrap text-gray-700"
        >
          Filter By
        </label>
        <select
          id="product-type-filter"
          name="productType"
          data-testid="filter-by"
          value={selectedType}
          onChange={(e) => onTypeChange(e.target.value)}
          className="w-[64%] rounded border p-2 md:w-auto lg:w-auto"
        >
          <option value="">All</option>
          {types.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}
