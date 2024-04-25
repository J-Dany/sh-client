'use client';

import {
  Icon,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/navigation';

export interface SidebarMenuItemProps {
  children: (open: boolean) => React.ReactNode;
  recursion: number;
  item: Shell.Menu.Item;
  drawerOpen?: boolean;
}

export function SidebarMenuItem({
  children,
  item,
  recursion,
  drawerOpen,
}: SidebarMenuItemProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const hasSubItems = !!item.subItems && item.subItems.length > 0;

  return (
    <ListItem disablePadding sx={{ display: 'block' }}>
      <ListItemButton
        onClick={() => {
          if (hasSubItems) {
            setOpen(!open);
          } else {
            router.push(item.path);
          }
        }}
        sx={{
          minHeight: 48,
          justifyContent: 'initial',
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            ml: recursion * 2,
            mr: 2 + recursion * 2,
            justifyContent: 'center',
          }}
        >
          <Icon>{item.icon}</Icon>
        </ListItemIcon>
        <ListItemText
          primary={item.label}
          sx={{ opacity: drawerOpen ? 1 : 0 }}
        />
        {hasSubItems ? (
          open ? (
            <ExpandLessIcon sx={{ opacity: 0.6 }} />
          ) : (
            <ExpandMoreIcon sx={{ opacity: 0.6 }} />
          )
        ) : null}
      </ListItemButton>
      {children(open)}
    </ListItem>
  );
}
