import { ThemeProvider } from 'styled-components';
import React from 'react';
import { node } from 'prop-types';
import { darkTheme, lightTheme } from './Themes';
import { GlobalStyles } from './globalStyles';
import { useDarkMode } from '../../hooks/useDarkMode';

export default function Theme({ children }) {
  const [theme, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      {mountedComponent && children}
    </ThemeProvider>
  );
}

Theme.propTypes = {
  children: node.isRequired,
};
