'use client';

import { Drawer, DrawerProps, Hidden, HiddenProps, Box } from '@mui/material';
import Image from 'next/image';
import logo from '@/app/icon.png';

export interface ResponsiveDrawerProps {
  children: React.ReactNode;
  HiddenProps: Omit<HiddenProps, 'implementation'>;
  ModalProps?: Omit<DrawerProps['ModalProps'], 'keepMounted'>;
}

export type OmittedResponsiveDrawerProps = Omit<
  DrawerProps,
  'role' | 'ModalProps'
>;

export default function ResponsiveDrawer({
  children,
  HiddenProps,
  ModalProps,
  ...props
}: ResponsiveDrawerProps & OmittedResponsiveDrawerProps) {
  return (
    <Hidden {...HiddenProps} implementation='css'>
      <Drawer
        role='presentation'
        ModalProps={{
          keepMounted: true,
          ...ModalProps,
        }}
        {...props}
      >
        <Box
          position={'relative'}
          height={{
            lg: 128,
            xs: 90,
          }}
          marginX={1}
          marginY={2}
          sx={{
            filter: 'grayscale(1)',
            '&:hover': {
              filter: 'grayscale(0)',
            },
          }}
        >
          <Image
            fill
            objectFit='contain'
            objectPosition='left'
            alt='Shell | Daniele Castiglia'
            src={logo}
          />
        </Box>
        {children}
      </Drawer>
    </Hidden>
  );
}
