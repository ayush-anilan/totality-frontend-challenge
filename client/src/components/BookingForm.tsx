import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";

interface BookingFormProps {
  totalCost: number;
}

const BookingForm = ({ totalCost }: BookingFormProps) => {
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    startDate: "",
    endDate: "",
  });

  const toast = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Confirmed",
      description: `Your booking has been confirmed. Total cost is $${totalCost.toLocaleString()}.`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box mt={8}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={bookingDetails.name}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={bookingDetails.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Start Date</FormLabel>
            <Input
              type="date"
              name="startDate"
              value={bookingDetails.startDate}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>End Date</FormLabel>
            <Input
              type="date"
              name="endDate"
              value={bookingDetails.endDate}
              onChange={handleChange}
            />
          </FormControl>
          <Button type="submit" colorScheme="teal">
            Book Now
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default BookingForm;
