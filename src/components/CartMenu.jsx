import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";

const CartMenu = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.shop.cart);
  const FlexBox = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  });

  return (
    <Box>
      <FlexBox>
        <Typography variant="p" component="p">
          Shopping Bag ({cart.length + 5})
        </Typography>
      </FlexBox>
    </Box>
  );
};

export default CartMenu;
