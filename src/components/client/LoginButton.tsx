'use client';

import { Button, ButtonProps } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export interface LoginButtonProps {
  loginUrl: string;
}

export default function LoginButton({
  loginUrl,
  onClick,
  ...props
}: LoginButtonProps & Omit<ButtonProps, 'variant'>) {
  const router = useRouter();

  const goToOidcLogin = useCallback(() => {
    router.replace(loginUrl);
  }, [loginUrl, router]);

  return (
    <Button
      variant='contained'
      onClick={(e) => {
        onClick?.(e);
        goToOidcLogin();
      }}
      {...props}
    >
      Login
    </Button>
  );
}
