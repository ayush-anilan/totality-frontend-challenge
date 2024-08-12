import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      className="py-8 mt-12 shadow-inner"
    >
      <Container as={Stack} maxW={"6xl"}>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={"space-between"}
          align={"center"}
        >
          {/* Branding */}
          <Text fontSize="lg" fontWeight="bold" className="text-teal-500">
            Rentify
          </Text>

          {/* Navigation Links */}
          <HStack spacing={6}>
            <Link as={RouterLink} to="/" className="text-lg font-medium">
              Home
            </Link>
            <Link
              as={RouterLink}
              to="/properties"
              className="text-lg font-medium"
            >
              Properties
            </Link>
            <Link as={RouterLink} to="/cart" className="text-lg font-medium">
              Cart
            </Link>
          </HStack>

          {/* Social Media Links */}
          <HStack spacing={6}>
            <IconButton
              as="a"
              href="https://facebook.com"
              aria-label="Facebook"
              icon={<FiFacebook />}
              variant="ghost"
              className="text-teal-500"
            />
            <IconButton
              as="a"
              href="https://twitter.com"
              aria-label="Twitter"
              icon={<FiTwitter />}
              variant="ghost"
              className="text-teal-500"
            />
            <IconButton
              as="a"
              href="https://instagram.com"
              aria-label="Instagram"
              icon={<FiInstagram />}
              variant="ghost"
              className="text-teal-500"
            />
          </HStack>
        </Stack>

        {/* Footer Bottom Text */}
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2024 Rentify. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
