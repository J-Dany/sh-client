import { Container, Link, Typography } from '@mui/material';

export default function Page() {
  return (
    <Container>
      <Typography variant='caption' sx={{ opacity: 0.7 }}>
        <Link
          href='https://www.flaticon.com/free-icons/sea'
          title='sea icons'
          target='_blank'
        >
          Sea icons created by juicy_fish - Flaticon
        </Link>
      </Typography>
    </Container>
  );
}
