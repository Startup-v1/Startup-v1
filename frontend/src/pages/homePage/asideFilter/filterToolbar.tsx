export function FilterToolbar() {
  return (
    <div className="p-4 flex flex-items-center justify-between border-b border-gray-200 sticky top-0 bg-white">
      {/* close button */}
      <button className="btn btn-square btn-sm border border-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* clear button */}
      <button className="btn btn-sm border border-gray-200 md:btn-md lg:btn-lg">
        Clean filters
      </button>
    </div>
  );
}
