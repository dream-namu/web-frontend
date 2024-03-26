import { Box } from "@radix-ui/themes";
import React from "react";
import useLayoutStore from "../../store/LayoutStore";
import "../../style/Layout.scss";
import CommonHeader from "../Layout/Header/CommonHeader";
import CommonSidebar from "../Layout/Sidebar/CommonSidebar.tsx";

interface CommonTemplateProps {
  children: React.ReactNode;
}

const CommonTeamplate: React.FC<CommonTemplateProps> = ({ children }) => {
  const { isSidebarOpen } = useLayoutStore();
  console.log("isSidebarOpen >>", isSidebarOpen);
  return (
    <Box className="layout">
      <CommonSidebar />
      <CommonHeader />
      {children}
    </Box>
  );
};

export default CommonTeamplate;
