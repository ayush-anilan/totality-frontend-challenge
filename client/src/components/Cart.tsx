import {
  Box,
  Text,
  Button,
  Stack,
  Image,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { useCart } from "./context/CartContext";

const Cart = () => {
  const { cartItems, dispatch } = useCart();

  const handleRemove = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  const handleIncrement = (id: string) => {
    dispatch({ type: "INCREMENT_QUANTITY", id });
  };

  const handleDecrement = (id: string) => {
    dispatch({ type: "DECREMENT_QUANTITY", id });
  };

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Box p={4}>
      <Heading mb={4}>Your Cart</Heading>
      {cartItems.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <Stack spacing={4}>
          {cartItems.map((item) => (
            <Flex
              key={item.id}
              alignItems="center"
              justifyContent="space-between"
            >
              <Image
                src={item.image}
                alt={item.title}
                boxSize="100px"
                objectFit="cover"
              />
              <Box>
                <Text fontWeight="bold">{item.title}</Text>
                <Text>{item.description}</Text>
                <Text>Price: ${item.price.toLocaleString()}</Text>
                <Text>Quantity: {item.quantity}</Text>
              </Box>
              <Stack direction="row" spacing={2}>
                <Button size="sm" onClick={() => handleDecrement(item.id)}>
                  -
                </Button>
                <Button size="sm" onClick={() => handleIncrement(item.id)}>
                  +
                </Button>
                <Button
                  size="sm"
                  colorScheme="red"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </Button>
              </Stack>
            </Flex>
          ))}
          <Text fontWeight="bold">Total: ${totalCost.toLocaleString()}</Text>
        </Stack>
      )}
    </Box>
  );
};

export default Cart;
