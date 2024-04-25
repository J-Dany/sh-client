'use client';

import { Collapse, List } from '@mui/material';
import { SidebarMenuItem } from '@/src/components/client/base/SidebarMenuItem';

export interface SidebarMenuProps {
  menu: Shell.Menu.Item[];
  recursion: number;
  drawerOpen?: boolean;
}

export function SidebarMenu({ menu, recursion, drawerOpen }: SidebarMenuProps) {
  return (
    <>
      {menu.map((item) => {
        return (
          <SidebarMenuItem
            drawerOpen={drawerOpen}
            key={item.path}
            item={item}
            recursion={recursion}
          >
            {(open) => {
              return (
                item.subItems && (
                  <Collapse in={open} timeout={'auto'}>
                    <List sx={{ paddingY: 0 }}>
                      <SidebarMenu
                        key={item.path}
                        drawerOpen={drawerOpen}
                        menu={item.subItems}
                        recursion={recursion + 1}
                      />
                    </List>
                  </Collapse>
                )
              );
            }}
          </SidebarMenuItem>
        );
      })}
    </>
  );
}
