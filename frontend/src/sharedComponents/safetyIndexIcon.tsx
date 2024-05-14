import { getSafetyIcon } from "src/utils/safetyIndexUtils";

type Props = {
  safetyIndex: number;
};

export const SafetyIndexIcon = ({ safetyIndex }: Props) => {
  const icon = getSafetyIcon(safetyIndex);
  return <img className="ml-1" src={icon} alt={`${icon}`} />;
};
