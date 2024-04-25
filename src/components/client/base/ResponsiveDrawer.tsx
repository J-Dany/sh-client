'use client';

import { Drawer, DrawerProps, Hidden, HiddenProps } from '@mui/material';

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
        {children}
      </Drawer>
    </Hidden>
  );
}
