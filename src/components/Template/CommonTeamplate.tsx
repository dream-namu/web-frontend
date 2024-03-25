import { Box } from "@radix-ui/themes";
import React from "react";
import "../../style/Layout.scss";
import CommonHeader from "../Layout/Header/CommonHeader";
import CommonSidebar from "../Layout/Sidebar/CommonSidebar.tsx";

interface CommonTemplateProps {
  children: React.ReactNode;
}

const CommonTeamplate: React.FC<CommonTemplateProps> = ({ children }) => {
  return (
    <Box className="layout">
      <Box className="layout__sidebar">
        <CommonSidebar />
      </Box>
      <Box className="layout__header">
        <CommonHeader />
        {children}
      </Box>
    </Box>
  );
};

export default CommonTeamplate;
