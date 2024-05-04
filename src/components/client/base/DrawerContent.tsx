'use client';

import { Box, Typography, List } from '@mui/material';
import { SidebarMenu } from '@/src/components/client/base/SidebarMenu';

interface DrawerContentProps {
  menu: Shell.Menu.Group[];
  drawerOpen?: boolean;
}

export default function DrawerContent({
  menu,
  drawerOpen,
}: DrawerContentProps) {
  return menu.map((group, i) => {
    const label = group.label;

    if (!!!label) {
      return (
        <SidebarMenu
          key={label}
          drawerOpen={drawerOpen ?? true}
          menu={group.items}
          recursion={0}
        />
      );
    }

    return (
      <Box
        key={label}
        sx={{ marginTop: ({ spacing }) => spacing(1) }}
      >
        <Typography
          variant='overline'
          sx={{
            paddingLeft: 2,
            opacity: 0.5,
            display: 'inline-block',
          }}
        >
          {label}
        </Typography>
        <List sx={{ paddingTop: 0 }}>
          <SidebarMenu
            key={label}
            drawerOpen={drawerOpen ?? true}
            menu={group.items}
            recursion={0}
          />
        </List>
      </Box>
    );
  });
}
