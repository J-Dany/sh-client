'use client';

import {
  Icon,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Theme,
  useMediaQuery,
} from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { usePathname, useRouter } from 'next/navigation';
import { SidebarContext } from '@/src/components/client/context/SidebarContext';
import { yellow } from '@mui/material/colors';

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
  const [open, setOpen] = useState(false);
  const [pushed, setPushed] = useState(false);
  const router = useRouter();
  const hasSubItems = !!item.subItems && item.subItems.length > 0;
  const sidebarContext = useContext(SidebarContext);
  const pathname = usePathname();
  const isNotLg = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  useEffect(() => {
    if (isNotLg && pushed) {
      sidebarContext.setOpen(false);
    }

    return () => {
      setPushed(false);
    };
  }, [pushed, pathname, isNotLg, item, sidebarContext]);

  return (
    <ListItem disablePadding sx={{ display: 'block' }}>
      <ListItemButton
        onClick={() => {
          if (hasSubItems) {
            setOpen(!open);
          } else {
            router.push(item.path);
            setTimeout(() => {
              setPushed(true);
            }, 0);
          }
        }}
        sx={{
          justifyContent: 'initial',
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            ml: recursion * 2,
            mr: 2,
            justifyContent: 'center',
          }}
        >
          <Icon>{item.icon}</Icon>
        </ListItemIcon>
        <ListItemText
          primary={item.label}
          sx={{ opacity: drawerOpen ? 1 : 0 }}
        />
        {item.isPremium ? (
          <Icon sx={{ fill: yellow[800], color: yellow[800], fontSize: '14px' }}>star</Icon>
        ) : null}
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
