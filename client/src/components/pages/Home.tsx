import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Stack,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import HeroImage from "../../assets/Home property.jpg";

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        pt={20}
        pb={16}
        className="shadow-lg"
      >
        <Container maxW={"6xl"}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing={6}>
              <Heading
                as="h1"
                size="2xl"
                className="text-teal-500"
                lineHeight="shorter"
                fontWeight="extrabold"
              >
                Welcome to Rentify
              </Heading>
              <Text fontSize="lg" color="gray.600">
                Discover your next home with our easy-to-use platform. Find the
                perfect property that suits your needs and budget.
              </Text>
              <Button
                as={RouterLink}
                to="/properties"
                size="lg"
                colorScheme="teal"
                className="mt-4"
              >
                Explore Properties
              </Button>
            </Stack>
            <Image
              src={HeroImage}
              alt="Hero Image"
              className="rounded-lg shadow-lg"
            />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={16} bg={useColorModeValue("white", "gray.800")}>
        <Container maxW={"6xl"}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box className="text-center feature-box">
              <Image
                src="https://wp-assets.stessa.com/wp-content/uploads/2022/05/05084855/suburb-street-e1651765745609.jpg"
                alt="Wide Range of Properties"
                width={300}
                height={200}
                className="mx-auto rounded-lg shadow-lg"
                mb={2}
              />
              <Heading size="md" mb={2}>
                Wide Range of Properties
              </Heading>
              <Text color="gray.500">
                Choose from a wide variety of homes and apartments available in
                different locations.
              </Text>
            </Box>

            <Box className="text-center feature-box">
              <Image
                src="https://img.freepik.com/premium-vector/secure-payment-credit-card-icon-with-shield-secure-transaction-vector-stock-illustration_100456-11325.jpg"
                alt="Easy and Secure Payment"
                width={300}
                height={200}
                className="mx-auto rounded-lg shadow-lg"
                mb={2}
              />
              <Heading size="md" mb={2}>
                Easy and Secure Payment
              </Heading>
              <Text color="gray.500">
                Make transactions seamlessly with our secure payment gateway.
              </Text>
            </Box>

            <Box className="text-center feature-box">
              <Image
                src="https://betinasia.zendesk.com/hc/article_attachments/17026876774418"
                alt="24/7 Customer Support"
                width={300}
                height={200}
                className="mx-auto rounded-lg shadow-lg"
                mb={2}
              />
              <Heading size="md" mb={2}>
                24/7 Customer Support
              </Heading>
              <Text color="gray.500">
                Our dedicated team is always ready to assist you with any
                inquiries or issues.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        bg={useColorModeValue("teal.500", "teal.700")}
        py={16}
        color="white"
        textAlign="center"
      >
        <Container maxW={"6xl"}>
          <Heading as="h2" size="xl" mb={6}>
            Ready to find your next home?
          </Heading>
          <Button
            as={RouterLink}
            to="/properties"
            size="lg"
            colorScheme="teal"
            variant="outline"
          >
            Get Started
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
