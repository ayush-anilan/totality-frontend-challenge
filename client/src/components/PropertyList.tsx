import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Image,
  useColorModeValue,
  Select,
  Input,
  FormControl,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { useCart } from "./context/CartContext";
import { Link as RouterLink } from "react-router-dom";

interface Property {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  location: string;
  amenities: string[];
}

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

// Sample data for locations and amenities
const locations = [
  "Downtown",
  "Suburbs",
  "Beachfront",
  "Uptown",
  "Historic District",
];
const amenitiesList = [
  "Wi-Fi",
  "Air Conditioning",
  "Washer",
  "Garage",
  "Pool",
  "Garden",
  "Ocean View",
  "Gym",
  "Concierge",
  "Balcony",
  "Compact Kitchen",
  "Pet Friendly",
  "Fireplace",
  "Library",
  "Original Woodwork",
  "Large Backyard",
  "Playroom",
  "Home Office",
];

const PropertyList = () => {
  const { addToCart } = useCart(); // Access addToCart
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [priceRange, setPriceRange] = useState([0, 5000]); // Example range
  const [amenitiesFilter, setAmenitiesFilter] = useState<string[]>([]);

  const handleBookNow = (property: Property) => {
    setSelectedProperty(property);
    onOpen();
  };

  const handleAddToCart = () => {
    if (selectedProperty) {
      addToCart({
        id: selectedProperty.id,
        title: selectedProperty.title,
        description: selectedProperty.description,
        image: selectedProperty.image,
        price: selectedProperty.price,
        quantity: 1,
        checkInDate,
        checkOutDate,
      });
      onClose();
    }
  };

  const filteredProperties = mockProperties.filter((property) => {
    const locationMatch = locationFilter
      ? property.location === locationFilter
      : true;
    const priceMatch =
      property.price >= priceRange[0] && property.price <= priceRange[1];
    const amenitiesMatch =
      amenitiesFilter.length === 0 ||
      amenitiesFilter.every((amenity) => property.amenities.includes(amenity));

    return locationMatch && priceMatch && amenitiesMatch;
  });

  return (
    <Box py={16} bg={useColorModeValue("gray.50", "gray.800")}>
      <Container maxW={"6xl"}>
        <Heading as="h2" size="xl" mb={10} textAlign="center">
          Available Properties
        </Heading>

        <Box mb={8}>
          <Select
            placeholder="Select Location"
            onChange={(e) => setLocationFilter(e.target.value)}
            mb={4}
          >
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </Select>

          <Box mb={4}>
            <Text mb={2}>Price Range:</Text>
            <Input
              type="number"
              placeholder="Min Price"
              onChange={(e) =>
                setPriceRange([Number(e.target.value), priceRange[1]])
              }
              mb={2}
              width="calc(50% - 10px)"
              mr={2}
            />
            <Input
              type="number"
              placeholder="Max Price"
              onChange={(e) =>
                setPriceRange([priceRange[0], Number(e.target.value)])
              }
              width="calc(50% - 10px)"
            />
          </Box>

          <Select
            placeholder="Select Amenities"
            onChange={(e) =>
              setAmenitiesFilter(
                [...e.target.selectedOptions].map((option) => option.value)
              )
            }
            multiple
            mb={4}
          >
            {amenitiesList.map((amenity) => (
              <option key={amenity} value={amenity}>
                {amenity}
              </option>
            ))}
          </Select>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {filteredProperties.map((property: any) => (
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
                onClick={() => handleBookNow(property)}
                colorScheme="teal"
                variant="solid"
              >
                Book Now
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* Modal for selecting check-in and check-out dates */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Dates</ModalHeader>
          <ModalBody>
            <FormControl id="checkInDate" isRequired mb={4}>
              <FormLabel>Check-in Date</FormLabel>
              <Input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
              />
            </FormControl>
            <FormControl id="checkOutDate" isRequired>
              <FormLabel>Check-out Date</FormLabel>
              <Input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={handleAddToCart}>
              Add to Cart
            </Button>
            <Button variant="ghost" onClick={onClose} ml={3}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default PropertyList;
