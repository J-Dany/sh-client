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
        sx={{ marginTop: i > 0 ? ({ spacing }) => spacing(2) : 0 }}
      >
        <Typography
          variant='overline'
          sx={{
            paddingLeft: 2,
            opacity: 0.7,
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
