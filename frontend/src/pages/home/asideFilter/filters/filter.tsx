import { useState } from "react";

type Props = {
  label: string;
  sizeButton?: string;
};

export function Filter({ label, sizeButton }: Props) {
  // Estado para controlar si el botón está presionado o no
  const [presionado, setPresionado] = useState(false);

  // Función para manejar el evento de clic en el botón
  const handleClick = () => {
    setPresionado(!presionado); // Cambiar el estado de presionado al contrario de su estado actual
  };

  return (
    <button
      type="submit"
      className={`rounded-lg inline-block px-1 py-1 ${sizeButton} border border-gray-200 ${
        presionado ? "bg-blue-500 text-white" : ""
      }`}
      onClick={handleClick} // Asignar la función handleClick al evento onClick del botón
    >
      {label}
    </button>
  );
}
