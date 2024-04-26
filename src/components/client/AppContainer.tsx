'use client';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { Paper, Theme, useMediaQuery } from '@mui/material';
import DrawerFooter from '@/src/components/client/base/DrawerFooter';
import ResponsiveDrawer from '@/src/components/client/base/ResponsiveDrawer';
import { SidebarMenu } from '@/src/components/client/base/SidebarMenu';
import SidebarProvider from './context/SidebarContext';

export interface SidebarProps {
  children: React.ReactNode;
  title: string;
  menu?: Shell.Menu.Item[];
}

export default function AppContainer({ children, title, menu = [] }: SidebarProps) {
  const [open, setOpen] = useState(false);

  return (
    <SidebarProvider open={open} setOpen={setOpen}>
      <Box sx={{ display: 'flex' }}>
        <AppBar
          position='fixed'
          sx={({ zIndex, breakpoints }) => ({
            zIndex: zIndex.appBar,
            [breakpoints.up('lg')]: {
              zIndex: zIndex.drawer - 1,
              paddingLeft: '280px',
            },
          })}
        >
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={() => setOpen((prev) => !prev)}
              edge='start'
              sx={({ spacing }) => ({
                marginRight: spacing(2),
                display: { lg: 'none' },
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography noWrap variant='h6' component='div'>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        {/* MOBILE */}
        <ResponsiveDrawer
          open={open}
          onClose={() => setOpen(false)}
          HiddenProps={{ lgUp: true }}
        >
          <List>
            <SidebarMenu drawerOpen={open} menu={menu} recursion={0} />
          </List>
          <DrawerFooter />
        </ResponsiveDrawer>
        {/* DESKTOP */}
        <ResponsiveDrawer variant='permanent' HiddenProps={{ lgDown: true }}>
          <List>
            <SidebarMenu drawerOpen={true} menu={menu} recursion={0} />
          </List>
          <DrawerFooter />
        </ResponsiveDrawer>
        <Paper
          square
          component='main'
          sx={({ breakpoints, spacing }) => ({
            minHeight: '100vh',
            flexGrow: 1,
            paddingX: spacing(2),
            paddingTop: '64px',
            [breakpoints.up('lg')]: {
              marginLeft: '280px',
              paddingTop: '64px',
            },
          })}
        >
          {children}
        </Paper>
      </Box>
    </SidebarProvider>
  );
}
