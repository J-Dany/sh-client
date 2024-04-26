'use client';

import { createContext } from 'react';

export interface SidebarContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const SidebarContext = createContext<SidebarContextValue>({
  open: false,
  setOpen: () => {
    throw new Error('SidebarContext is not implemented.');
  },
});

export interface SidebarProviderProps {
  children: React.ReactNode;
}

export default function SidebarProvider({
  children,
  ...props
}: SidebarProviderProps & SidebarContextValue) {
  return (
    <SidebarContext.Provider value={props}>{children}</SidebarContext.Provider>
  );
}
