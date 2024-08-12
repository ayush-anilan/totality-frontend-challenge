import React from "react";
import { Box, Image, Text, Button } from "@chakra-ui/react";

interface PropertyCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  onBook: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  title,
  description,
  price,
  onBook,
}) => {
  return (
    <Box className="p-4 shadow-lg rounded-lg" maxW="sm" borderWidth="1px">
      <Image
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <Box p="6">
        <Text fontWeight="bold" className="text-xl mb-2">
          {title}
        </Text>
        <Text className="text-gray-700 text-base">{description}</Text>
        <Text className="text-xl font-semibold mt-4">${price}</Text>
        <Button
          colorScheme="teal"
          size="md"
          onClick={onBook}
          className="mt-4 w-full"
        >
          Book Now
        </Button>
      </Box>
    </Box>
  );
};

export default PropertyCard;
