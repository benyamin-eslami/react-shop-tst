import { Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
const Navbar = () => {
  return (
    <Box
      sx={{
        width: "80%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0 auto",
      }}
    >
      <h1>Ecommerce</h1>
      <Box>
        <IconButton color="primary">
          <SearchIcon />
        </IconButton>
        <IconButton color="primary">
          <PersonOutlineIcon />
        </IconButton>
        <IconButton color="primary">
          <ShoppingBasketOutlinedIcon />
        </IconButton>
        <IconButton color="primary">
          <ShoppingBasketOutlinedIcon />
        </IconButton>
        <IconButton color="primary">
          <MenuOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;
