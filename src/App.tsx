import Box from "@mui/material/Box";
import Container from "@mui/material/Container/Container";
import Stack from "@mui/material/Stack/Stack";
import React from "react";
import { Feed } from "./components/layout/Feed";
import { Navbar } from "./components/layout/Navbar";
import { Rightbar } from "./components/layout/Rightbar";
import { Sidebar } from "./components/layout/Sidebar";

export const App: React.FC = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
};
