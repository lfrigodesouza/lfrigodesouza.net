import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const [mountedComponent, setMountedComponent] = useState(false);
  const setMode = (mode) => {
    // window.localStorage.setItem('theme', mode)
    setTheme(mode);
  };
  // const themeToggler = () => {
  //     theme === 'light' ? setMode('dark') : setMode('light')
  // };
  useEffect(() => {
    // const localTheme = window.localStorage.getItem('theme');
    // localTheme ? setTheme(localTheme) :
    //  setMode(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
    setMode(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    setMountedComponent(true);
  }, []);
  return [theme, mountedComponent];
};

export default useDarkMode;
