// src/theme.ts
import { MantineThemeOverride } from '@mantine/core';

const theme: MantineThemeOverride = {
  primaryColor: 'blue',
  colors: {
    blue: [
      '#E6F7FF',
      '#BAE7FF',
      '#91D5FF',
      '#69C0FF',
      '#40A9FF',
      '#1890FF',
      '#096DD9',
      '#0050B3',
      '#003A8C',
      '#002766',
    ],
    dark: [
      '#C1C2C5',
      '#A6A7AB',
      '#909296',
      '#5C5F66',
      '#2C2E33',
      '#25262B',
      '#1A1B1E',
      '#141517',
      '#101113',
      '#0A0A0A',
    ],
  },
  
  components: {
    Button: {
      styles: {
        root: {
          background: 'blue.6',
          '&:hover': {
            background: 'blue.7',
          },
          transition: 'all 0.3s ease',
        },
      },
    },
    Modal: {
      styles: {
        root: {
          backdropFilter: 'blur(4px)',
        },
        modal: {
          backgroundColor: 'dark.7',
          borderRadius: 'lg',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        },
      },
    },
    Card: {
      styles: {
        root: {
          backgroundColor: 'dark.6',
          borderRadius: 'md',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)',
        },
      },
    },
    TextInput: {
      styles: {
        input: {
          backgroundColor: 'dark.6',
          borderColor: 'dark.4',
          '&:focus': {
            borderColor: 'blue.6',
          },
        },
      },
    },
  },
  fontFamily: 'Inter, system-ui, sans-serif',
  radius: {
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '32px',
  },
  spacing: {
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
  },
};

export default theme;