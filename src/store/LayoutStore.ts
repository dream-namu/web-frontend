import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LayoutStoreType {
  isSidebarOpen: boolean;
  toggleSidebar: (state: boolean) => void;
}

const LayoutStore = create(
  persist<LayoutStoreType>(
    set => ({
      isSidebarOpen: false,
      toggleSidebar: (state: boolean) => {
        set(() => ({ isSidebarOpen: state }));
      },
    }),
    {
      name: "layout",
    }
  )
);

export default LayoutStore;
