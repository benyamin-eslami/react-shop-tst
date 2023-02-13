import { Badge, Box, IconButton, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../redux/features/shopSlice";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.shop.cart);
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
      <Typography onClick={() => navigate("/")} variant="h4" component="h1">
        Ecommerce
      </Typography>

      <Box>
        <IconButton color="primary">
          <SearchIcon />
        </IconButton>
        <IconButton color="primary">
          <PersonOutlineIcon />
        </IconButton>
        <Badge
          color="secondary"
          badgeContent={5}
          // invisible={cart.length === 0}
          sx={{
            "& .MuiBadge-badge": {
              right: 5,
              top: 5,
            },
          }}
        >
          <IconButton onClick={() => dispatch(setIsCartOpen())} color="primary">
            <ShoppingBasketOutlinedIcon />
          </IconButton>
        </Badge>
        <IconButton color="primary">
          <MenuOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;
