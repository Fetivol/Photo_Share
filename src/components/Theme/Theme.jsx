import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

export const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
