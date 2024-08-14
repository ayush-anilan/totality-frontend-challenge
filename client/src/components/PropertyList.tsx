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
  Checkbox,
  HStack,
  Flex,
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
  bedrooms: number;
}

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
    bedrooms: 2,
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
    bedrooms: 3,
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
    bedrooms: 4,
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
    bedrooms: 2,
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
    bedrooms: 3,
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
    bedrooms: 4,
  },
];

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
  const [bedroomFilter, setBedroomFilter] = useState<number | "">(""); // Updated default state to ""

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
    const bedroomsMatch =
      bedroomFilter === "" || property.bedrooms === Number(bedroomFilter);

    return locationMatch && priceMatch && amenitiesMatch && bedroomsMatch;
  });

  const handleAmenitiesChange = (amenity: string) => {
    setAmenitiesFilter((prevFilters) =>
      prevFilters.includes(amenity)
        ? prevFilters.filter((filter) => filter !== amenity)
        : [...prevFilters, amenity]
    );
  };

  const handleBedroomFilterChange = (value: string) => {
    // Cast the string to number if not empty
    setBedroomFilter(value === "" ? "" : Number(value));
  };

  return (
    <Box py={16} bg={useColorModeValue("gray.50", "gray.800")}>
      <Container maxW={"6xl"}>
        <Heading as="h2" size="xl" mb={10} textAlign="center">
          Available Properties
        </Heading>

        <Box mb={8}>
          <FormControl>
            <FormLabel>Location:</FormLabel>
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
          </FormControl>

          <Box mb={4}>
            <FormControl>
              <FormLabel>Price Range:</FormLabel>
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
            </FormControl>
          </Box>

          <FormControl mb={4}>
            <FormLabel>Amenities</FormLabel>
            <HStack spacing={4} wrap="wrap">
              {amenitiesList.map((amenity) => (
                <Checkbox
                  key={amenity}
                  isChecked={amenitiesFilter.includes(amenity)}
                  onChange={() => handleAmenitiesChange(amenity)}
                >
                  {amenity}
                </Checkbox>
              ))}
            </HStack>
          </FormControl>

          <Box mb={4}>
            <FormControl>
              <FormLabel>Number of Bedrooms:</FormLabel>
              <Select
                placeholder="Select Number of Bedrooms"
                onChange={(e) => handleBedroomFilterChange(e.target.value)}
                mb={4}
              >
                <option value="">Any</option>
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {filteredProperties.map((property) => (
            <Box
              key={property.id}
              bg={useColorModeValue("white", "gray.700")}
              borderRadius="lg"
              shadow="lg"
              p={6}
              display="flex"
              flexDirection="column"
              justifyContent="space-between" // Ensures the button is at the bottom
              minHeight="400px" // Adjust the minimum height as needed
            >
              <Image
                src={property.image}
                alt={property.title}
                w="100%"
                h="200px" // Set a fixed height for all images
                objectFit="cover" // Ensure images cover the area
                mb={4}
              />
              <Flex direction="column" flexGrow={1}>
                <Heading
                  as={RouterLink}
                  to={`/properties/${property.id}`}
                  size="md"
                  mb={2}
                >
                  {property.title}
                </Heading>
                <Text mb={2}>{property.description}</Text>
                <Text fontWeight="bold" mb={4}>
                  ${property.price}
                </Text>
              </Flex>
              <Button
                colorScheme="teal"
                onClick={() => handleBookNow(property)}
                alignSelf="flex-start" // Align the button to the start of the flex container
              >
                Book Now
              </Button>
            </Box>
          ))}
        </SimpleGrid>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Booking Details</ModalHeader>
            <ModalBody>
              <FormControl id="check-in-date">
                <FormLabel>Check-In Date</FormLabel>
                <Input
                  type="date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                />
              </FormControl>
              <FormControl id="check-out-date" mt={4}>
                <FormLabel>Check-Out Date</FormLabel>
                <Input
                  type="date"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleAddToCart}>
                Add to Cart
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  );
};

export default PropertyList;
