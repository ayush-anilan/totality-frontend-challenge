// src/pages/Checkout.tsx
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useCart } from "../context/CartContext";
import { useState } from "react";

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = () => {
    // Simulate a checkout process
    alert(`Booking completed for ${bookingDetails.name}`);
    clearCart();
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px" rounded="lg">
      <Text fontSize="2xl" mb={5}>
        Checkout
      </Text>
      <VStack spacing={4} mb={5}>
        {cartItems.map((item: any) => (
          <Box key={item.id}>
            <Text fontWeight="bold">{item.title}</Text>
            <Text>Quantity: {item.quantity}</Text>
            <Text>Price: ${item.price.toLocaleString()}</Text>
          </Box>
        ))}
        <Text fontSize="xl">Total: ${cartTotal.toLocaleString()}</Text>
      </VStack>
      <form>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={bookingDetails.name}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={bookingDetails.email}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl id="phone" isRequired>
          <FormLabel>Phone Number</FormLabel>
          <Input
            type="text"
            name="phone"
            value={bookingDetails.phone}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl id="address" isRequired>
          <FormLabel>Address</FormLabel>
          <Input
            type="text"
            name="address"
            value={bookingDetails.address}
            onChange={handleInputChange}
          />
        </FormControl>
        {/* Payment details section can be added here */}
        <Button mt={4} colorScheme="teal" onClick={handleSubmit}>
          Complete Booking
        </Button>
      </form>
    </Box>
  );
};

export default Checkout;
