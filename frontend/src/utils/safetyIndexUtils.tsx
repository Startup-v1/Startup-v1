import greenDot from "@Assets/safetyIndexIcons/green.png";
import yellowDot from "@Assets/safetyIndexIcons/yellow.png";
import redDot from "@Assets/safetyIndexIcons/red.png";

export const safetyThreshold = {
  dangerous: 13,
  moderate: 10.2,
  safe: 0,
};

export const getSafetyString = (safetyIndex: number) => {
  if (safetyIndex > safetyThreshold.dangerous) {
    return "Dangerous";
  }
  if (safetyIndex > safetyThreshold.moderate) {
    return "Moderate";
  }
  return "Safe";
};

export const getSafetyIcon = (safetyIndex: number) => {
  if (safetyIndex > safetyThreshold.dangerous) {
    return redDot;
  }
  if (safetyIndex > safetyThreshold.moderate) {
    return yellowDot;
  }
  return greenDot;
};
