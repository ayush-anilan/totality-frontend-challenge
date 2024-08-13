import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface Property {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
}

const mockProperties: Property[] = [
  {
    id: "1",
    title: "Cozy Apartment in the City",
    description: "A beautiful apartment located in the heart of the city.",
    image: "https://via.placeholder.com/600x400?text=Cozy+Apartment",
    price: 1200,
  },
  {
    id: "2",
    title: "Modern House with Garden",
    description: "Spacious house with a lovely garden and modern amenities.",
    image: "https://via.placeholder.com/600x400?text=Modern+House",
    price: 2500,
  },
  {
    id: "3",
    title: "Luxury Condo Near the Beach",
    description:
      "Enjoy the ocean breeze from this luxury condo near the beach.",
    image: "https://via.placeholder.com/600x400?text=Luxury+Condo",
    price: 3500,
  },
  {
    id: "4",
    title: "Charming Studio with Balcony",
    description: "A bright and cozy studio apartment with a private balcony.",
    image: "https://via.placeholder.com/600x400?text=Charming+Studio",
    price: 800,
  },
  {
    id: "5",
    title: "Historic Townhouse Downtown",
    description:
      "Unique opportunity to live in a historic townhouse in the heart of downtown.",
    image: "https://via.placeholder.com/600x400?text=Historic+Townhouse",
    price: 1800,
  },
  {
    id: "6",
    title: "Spacious Family Home in Suburbs",
    description:
      "A large and comfortable home with a backyard perfect for families.",
    image: "https://via.placeholder.com/600x400?text=Family+Home",
    price: 3000,
  },
];

const PropertyList = () => {
  return (
    <Box py={16} bg={useColorModeValue("gray.50", "gray.800")}>
      <Container maxW={"6xl"}>
        <Heading as="h2" size="xl" mb={10} textAlign="center">
          Available Properties
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {mockProperties.map((property) => (
            <Box
              key={property.id}
              p={5}
              shadow="md"
              borderWidth="1px"
              rounded="lg"
              bg={useColorModeValue("white", "gray.700")}
              display="grid"
              gridTemplateRows="auto 1fr auto auto auto"
            >
              <Image
                src={property.image}
                alt={property.title}
                mb={4}
                rounded="lg"
              />
              <Heading
                size="md"
                mb={2}
                as={RouterLink}
                to={`/properties/${property.id}`}
              >
                {property.title}
              </Heading>
              <Text mb={2} color="gray.500">
                {property.description}
              </Text>
              <Text fontWeight="bold" color="teal.500" mb={4}>
                ${property.price.toLocaleString()}
              </Text>
              <Button
                as={RouterLink}
                to={`/properties/${property.id}`}
                colorScheme="teal"
                variant="solid"
              >
                Book Now
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default PropertyList;
