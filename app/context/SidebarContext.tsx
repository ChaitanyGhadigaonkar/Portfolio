"use client";
import { ReactNode, createContext, useContext, useState } from "react";

interface SidebarContextProps {
  sidebarState: boolean;
  closeSidebar: () => void;
  openSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};

export const SidebarContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [sidebarState, setSidebarState] = useState<boolean>(false);

  const openSidebar = () => {
    setSidebarState(true);
  };
  const closeSidebar = () => {
    setSidebarState(false);
  };

  const contextValue: SidebarContextProps = {
    sidebarState,
    closeSidebar,
    openSidebar,
  };

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  );
};
