'use client';

import { Montserrat } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { lightGreen, lightBlue, red, yellow } from '@mui/material/colors';

const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const theme = createTheme({
  typography: {
    fontFamily: montserrat.style.fontFamily,
  },
  palette: {
    mode: 'dark',
    info: lightBlue,
    success: lightGreen,
    error: red,
    warning: yellow,
    primary: {
      main: '#ed1c24',
      light: '#f0494f',
      dark: '#a51319',
      '100': '#ffcacf',
      '200': '#f69493',
      '300': '#ed6969',
      '400': '#f74342',
      '500': '#fc2b22',
      '600': '#ed1c24',
      '700': '#db071e',
      '800': '#ce0015',
      '900': '#c10004',
    },
    secondary: {
      main: '#009426',
      light: '#33a951',
      dark: '#00671a',
      '100': '#c4e8c5',
      '200': '#9ddaa0',
      '300': '#73cc78',
      '400': '#50c15a',
      '500': '#26b53a',
      '600': '#19a631',
      '700': '#009426',
      '800': '#008319',
      '900': '#006400',
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        root: ({ theme }) => ({
          [theme.breakpoints.up('lg')]: {
            '& > .MuiBackdrop-root': {
              display: 'none !important',
            },
          },
        }),
        paper: ({ theme }) => ({
          width: '280px',
          [theme.breakpoints.up('lg')]: {
            background: theme.palette.background.paper,
          },
        }),
      },
    },
  },
});

export default theme;
