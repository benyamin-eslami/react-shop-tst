import { Box, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../redux/features/shopSlice";

const CartMenuWrapper = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.shop.cart);
  const isCartOpen = useSelector((state) => state.shop.isCartOpen);
  const FlexBoxComponent = styled("div")({
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
  });

  const totalPrice = cart.reduce((total, item) => {
    return total * item.count * item.attributes.price;
  }, 0);
  return (
    <Box
      position="fixed"
      left="0"
      top="0"
      backgroundColor="rgba(0,0,0,0.3)"
      width="100%"
      height="100%"
      zIndex="200"
      display={`${isCartOpen ? "block" : "none"}`}
    >
      <Box
        backgroundColor="white"
        position="fixed"
        right="0"
        top="0"
        height="100%"
        width="max(400px,30%)"
      >
        <FlexBoxComponent>
          <Typography variant="p" component="p">
            SHOPPING BAG ({cart.length})
          </Typography>
          <IconButton onClick={() => dispatch(setIsCartOpen())}>
            <CloseOutlinedIcon />
          </IconButton>
        </FlexBoxComponent>
        <Box>
          {cart.map((item) => (
            <Box key={`${item.attributes.name}-${item.id}`}>
              <FlexBoxComponent mb="5px">
                <Box flex="1 1 40%">
                  <img
                    src={`http://localhost:1337/${item?.attributes?.images?.data?.attributes?.formats?.medium?.url}`}
                    alt={`${item.name}`}
                  />
                </Box>
                <Box flex="1 1 60%">
                  <FlexBoxComponent>
                    <Typography>{item.attributes.name}</Typography>
                    <IconButton>
                      <CloseOutlinedIcon />
                    </IconButton>
                  </FlexBoxComponent>
                </Box>
              </FlexBoxComponent>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CartMenuWrapper;
