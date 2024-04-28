import LoginButton from '@/src/components/client/LoginButton';
import constructOidcLoginUrl from '@/src/hooks/server/constructOidcLoginUrl';
import { Box, Container, Paper, Typography } from '@mui/material';

export default function Page() {
  return (
    <Paper
      square
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Container>
        <Typography variant={'h4'} textAlign={'center'} marginBottom={1}>
          Effettua il login
        </Typography>
        <Typography
          variant={'subtitle2'}
          textAlign={'center'}
          marginBottom={5}
          sx={{ opacity: 0.7 }}
        >
          Devi essere loggato per poter usare la Shell
        </Typography>
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <LoginButton loginUrl={constructOidcLoginUrl()} />
        </Box>
      </Container>
    </Paper>
  );
}
