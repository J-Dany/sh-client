import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import theme from '@/theme';
import AppContainer from '@/src/components/client/AppContainer';
import menu from '@/app/menu';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { getIronSessionFromCookiesStore } from '@/src/hooks/server/getIronServerSession';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: 'Shell',
  description: 'Shell | Daniele Castiglia',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getIronSessionFromCookiesStore(cookies());

  return (
    <html lang='en'>
      <head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />
      </head>
      <body>
        <AppRouterCacheProvider
          options={{
            nonce: 'nonce',
          }}
        >
          <CssBaseline />
          <ThemeProvider theme={theme}>
            {session.accessToken ? (
              <AppContainer theme={theme} title={'Shell'} menu={menu}>
                {children}
              </AppContainer>
            ) : (
              children
            )}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
