type Props = {
  label: string;
  sizeButton?: string;
};

export function Filter({ label, sizeButton }: Props) {
  return (
    <input
      type="checkbox"
      name="weather"
      aria-label={label}
      className={`btn ${sizeButton} border border-gray-200`}
    />
  );
}
