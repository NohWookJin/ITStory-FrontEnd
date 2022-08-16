import { useEffect, useState } from 'react';

export const useDarkMode = (): [string, () => void] => {
  const localTheme = window.localStorage.getItem('theme');
  const initialState = localTheme ? localTheme : 'lightTheme';
  const [theme, setTheme] = useState(initialState);
  const toggleTheme = () => {
    if (theme === 'lightTheme') {
      window.localStorage.setItem('theme', 'darkTheme');
      setTheme('darkTheme');
    } else {
      window.localStorage.setItem('theme', 'lightTheme');
      setTheme('lightTheme');
    }
  };

  return [theme, toggleTheme];
};
