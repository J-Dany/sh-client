import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import theme from '@/theme';
import AppContainer from '@/src/components/client/AppContainer';
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
        <AppRouterCacheProvider options={{
          nonce: 'nonce',
        }}>
          <CssBaseline />
          <AppContainer theme={theme} title={'Shell'} menu={menu}>
            {children}
          </AppContainer>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
