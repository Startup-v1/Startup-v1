interface FilterToolbarProps {
  onHideAsideFilter?: () => void;
}

export function FilterToolbar({ onHideAsideFilter }: FilterToolbarProps) {
  return (
    <div className="p-4 flex items-center justify-between border-b border-gray-200 sticky top-0 bg-white">
      {/* close button - Visible en pantallas no XL */}
      <button
        className="btn btn-square btn-sm border border-gray-200 xl:hidden" // Oculta el botón en tamaños de pantalla XL
        onClick={onHideAsideFilter}
      >
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

      {/* Nuevo botón - Visible solo en tamaños de pantalla XL */}
      <div className="hidden xl:flex justify-center items-center">
        <a
          href="#"
          className="btn btn-sm btn-ghost text-xl" // Muestra el botón solo en tamaños de pantalla XL
        >
          DaisyUI
        </a>
      </div>

      {/* clear button */}
      <button className="btn btn-sm border border-gray-200">
        Clean filters
      </button>
    </div>
  );
}
