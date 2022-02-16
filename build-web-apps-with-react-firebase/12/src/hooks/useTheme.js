import { getTheme } from "../store/selectors/themes";
import { useSelector } from "react-redux";

export const useTheme = () => {
  const { color } = useSelector(getTheme);

  
  if (color === undefined) {
    throw new Error('useTheme() must be used within a ThemeProvider');
  }

  return color;
};
