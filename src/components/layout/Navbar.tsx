import Toolbar from "@mui/material/Toolbar/Toolbar";
import AppBar from "@mui/material/AppBar";
import React from "react";
import { styled } from "@mui/material/styles";
import { Box, InputBase, Typography } from "@mui/material";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
}));

export const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          WEB MENU
        </Typography>
        <RestaurantMenuIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search" type="text" />
        </Search>
        <Icons>Icons</Icons>
      </StyledToolbar>
    </AppBar>
  );
};
