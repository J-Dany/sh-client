import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';
import Sidebar from '@/src/components/client/Sidebar';
import menu from '@/app/menu';
import { CssBaseline } from '@mui/material';

export const metadata: Metadata = {
  title: 'Sh',
  description: 'Sh | Daniele Castiglia',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />
      </head>
      <body>
        <AppRouterCacheProvider>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <Sidebar title={'Shell'} menu={menu}>
              {children}
            </Sidebar>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
