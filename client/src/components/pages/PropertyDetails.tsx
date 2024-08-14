import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Stack,
  Button,
  Input,
  FormControl,
  FormLabel,
  useColorModeValue,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

interface Property {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  location: string;
  amenities: string[];
}

// Mock data
const mockProperties: Property[] = [
  {
    id: "1",
    title: "Cozy Apartment in the City",
    description: "A beautiful apartment located in the heart of the city.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/493238261.jpg?k=bc7bf0b89eb4f745c15b43d57d7a05759a8c1eb8580208ecf05df046b87a09f4&o=&hp=1",
    price: 1200,
    location: "Downtown",
    amenities: ["Wi-Fi", "Air Conditioning", "Washer"],
  },
  {
    id: "2",
    title: "Modern House with Garden",
    description: "Spacious house with a lovely garden and modern amenities.",
    image:
      "https://media.istockphoto.com/id/1263902259/photo/beautiful-modern-home-with-various-materials-used-on-the-facade.jpg?s=612x612&w=0&k=20&c=6Ljh4zY-7z_m4o-sr4Zf9su0OuNkJDEXdu-Ckw-ZgEY=",
    price: 2500,
    location: "Suburbs",
    amenities: ["Garage", "Pool", "Garden"],
  },
  {
    id: "3",
    title: "Luxury Condo Near the Beach",
    description:
      "Enjoy the ocean breeze from this luxury condo near the beach.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/261517548.jpg?k=1d954938c4d92dcf98dde43aecb56f3b6d60270dfef74e4c16aa38115729fb7e&o=&hp=1",
    price: 3500,
    location: "Beachfront",
    amenities: ["Ocean View", "Gym", "Concierge"],
  },
  {
    id: "4",
    title: "Charming Studio with Balcony",
    description: "A bright and cozy studio apartment with a private balcony.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/438714935.jpg?k=6a4d8f096fee6cc8d039c3bb5a5da60f766417032e514909a1b7931170c48319&o=&hp=1",
    price: 800,
    location: "Uptown",
    amenities: ["Balcony", "Compact Kitchen", "Pet Friendly"],
  },
  {
    id: "5",
    title: "Historic Townhouse Downtown",
    description:
      "Unique opportunity to live in a historic townhouse in the heart of downtown.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQfHDm9EBmXTqm85NUuIhsW-n3jTSSqfd2g&s",
    price: 1800,
    location: "Downtown Historic District",
    amenities: ["Fireplace", "Library", "Original Woodwork"],
  },
  {
    id: "6",
    title: "Spacious Family Home in Suburbs",
    description:
      "A large and comfortable home with a backyard perfect for families.",
    image:
      "https://media.istockphoto.com/id/1436217023/photo/exterior-of-a-blue-suburban-home.jpg?s=612x612&w=0&k=20&c=6n08rcEdza9Vehf5cHzk1uS0UKAN0qr3o884mbDvD5o=",
    price: 3000,
    location: "Suburban Area",
    amenities: ["Large Backyard", "Playroom", "Home Office"],
  },
];

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const property = mockProperties.find((p) => p.id === id);
  const { addToCart } = useCart();

  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  if (!property) {
    return (
      <Box textAlign="center" py={20}>
        <Heading size="lg">Property Not Found</Heading>
      </Box>
    );
  }

  const handleAddToCart = (property: Property) => {
    addToCart({
      id: property.id,
      title: property.title,
      description: property.description,
      image: property.image,
      price: property.price,
      quantity: 1,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
    });
  };

  return (
    <Box py={16} bg={useColorModeValue("gray.50", "gray.800")}>
      <Container maxW={"6xl"}>
        <Stack spacing={6}>
          <Image
            src={property.image}
            alt={property.title}
            rounded="lg"
            boxSize="600px"
            objectFit="cover"
          />
          <Heading as="h2" size="xl">
            {property.title}
          </Heading>
          <Text fontSize="lg">{property.description}</Text>
          <Text fontSize="lg" fontWeight="bold">
            Price: ${property.price.toLocaleString()}
          </Text>
          <FormControl>
            <FormLabel>Check-In Date</FormLabel>
            <Input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Check-Out Date</FormLabel>
            <Input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </FormControl>
          <Button
            colorScheme="teal"
            onClick={() => handleAddToCart(property)}
            isDisabled={!checkInDate || !checkOutDate}
          >
            Add to Cart
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default PropertyDetails;
