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
        className="flex flex-col md:flex-row lg:flex-row gap-4 mb-6 align-middle"
        role="search"
        aria-label="Product filters"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Search products */}
        <div className="flex items-center gap-2 flex-1 min-w-[200px]">
          <label
            htmlFor="product-search"
            className="text-lg font-medium text-gray-700 whitespace-nowrap"
          >
            Search Product
          </label>
          <input
            type="search"
            id="product-search"
            name="search"
            placeholder="Search products..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="border p-2 rounded w-md sm:w-sm"
          />
        </div>
  
        {/* Filter by product type */}
        <div className="flex items-center flex-1 sm:flex-none gap-2 min-w-[180px] justify-between md:justify-normal lg:justify-normal">
          <label
            htmlFor="product-type-filter"
            className="text-lg font-medium text-gray-700 whitespace-nowrap"
          >
            Filter By
          </label>
          <select
            id="product-type-filter"
            name="productType"
            value={selectedType}
            onChange={(e) => onTypeChange(e.target.value)}
            className="border p-2 rounded w-[64%] md:w-auto lg:w-auto"
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
  