'use client';

import { Box, Link, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export interface DrawerFooterProps {
  children?: React.ReactNode;
}

export default function DrawerFooter({ children }: DrawerFooterProps) {
  return (
    <Box
      sx={({ spacing }) => ({
        marginTop: 'auto',
        marginBottom: spacing(1),
        paddingX: spacing(2),
      })}
    >
      {children}
      <Box
        display={'flex'}
        alignItems={'center'}
        sx={({ spacing }) => ({
          marginY: spacing(1),
          gap: spacing(2),
        })}
      >
        <Link href='#'>
          <InstagramIcon color='action' sx={{ opacity: 0.7 }} />
        </Link>
        <Link href='#'>
          <LinkedInIcon color='action' sx={{ opacity: 0.7 }} />
        </Link>
      </Box>
      <Typography variant='caption' sx={{ opacity: 0.5 }}>
        Copyright&copy; by{' '}
        <Link href='https://ilcastiglia.com' target='_blank'>
          <strong>Daniele Castiglia</strong>
        </Link>
      </Typography>
    </Box>
  );
}
