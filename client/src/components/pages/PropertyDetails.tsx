import { useParams } from "react-router-dom";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
// import { useCart } from "../context/CartContext";

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
    image: "https://via.placeholder.com/600x400?text=Cozy+Apartment",
    price: 1200,
    location: "Downtown",
    amenities: ["Wi-Fi", "Air Conditioning", "Washer"],
  },
  {
    id: "2",
    title: "Modern House with Garden",
    description: "Spacious house with a lovely garden and modern amenities.",
    image: "https://via.placeholder.com/600x400?text=Modern+House",
    price: 2500,
    location: "Suburbs",
    amenities: ["Garage", "Pool", "Garden"],
  },
  {
    id: "3",
    title: "Luxury Condo Near the Beach",
    description:
      "Enjoy the ocean breeze from this luxury condo near the beach.",
    image: "https://via.placeholder.com/600x400?text=Luxury+Condo",
    price: 3500,
    location: "Beachfront",
    amenities: ["Ocean View", "Gym", "Concierge"],
  },
  {
    id: "4",
    title: "Charming Studio with Balcony",
    description: "A bright and cozy studio apartment with a private balcony.",
    image: "https://via.placeholder.com/600x400?text=Charming+Studio",
    price: 800,
    location: "Uptown",
    amenities: ["Balcony", "Compact Kitchen", "Pet Friendly"],
  },
  {
    id: "5",
    title: "Historic Townhouse Downtown",
    description:
      "Unique opportunity to live in a historic townhouse in the heart of downtown.",
    image: "https://via.placeholder.com/600x400?text=Historic+Townhouse",
    price: 1800,
    location: "Downtown Historic District",
    amenities: ["Fireplace", "Library", "Original Woodwork"],
  },
  {
    id: "6",
    title: "Spacious Family Home in Suburbs",
    description:
      "A large and comfortable home with a backyard perfect for families.",
    image: "https://via.placeholder.com/600x400?text=Family+Home",
    price: 3000,
    location: "Suburban Area",
    amenities: ["Large Backyard", "Playroom", "Home Office"],
  },
];

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const property = mockProperties.find((p) => p.id === id);
  // const { addToCart } = useCart();

  if (!property) {
    return (
      <Box textAlign="center" py={20}>
        <Heading size="lg">Property Not Found</Heading>
      </Box>
    );
  }

  // const handleAddToCart = () => {
  //   addToCart({
  //     id: property.id,
  //     title: property.title,
  //     image: property.image,
  //     price: property.price,
  //     quantity: 1,
  //   });
  // };

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
          <Button colorScheme="teal">Add to Cart</Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default PropertyDetails;
