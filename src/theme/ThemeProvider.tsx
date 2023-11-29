// src/ThemeProvider.tsx
import React, { ReactNode } from 'react';
import { MantineProvider, DEFAULT_THEME } from '@mantine/core';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return <MantineProvider theme={DEFAULT_THEME}>{children}</MantineProvider>;
};

export default ThemeProvider;
