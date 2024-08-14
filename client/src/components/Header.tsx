import React from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Badge,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { useCart } from "./context/CartContext"; // Import the useCart hook
import { FaShoppingCart } from "react-icons/fa";

const Links = ["Home", "Properties"];

const NavLink = ({ children }: { children: React.ReactNode }) => (
  <Link
    as={RouterLink}
    to={`/${children?.toString().toLowerCase()}`}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "gray.200",
    }}
    className="text-lg font-medium"
  >
    {children}
  </Link>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cartItems } = useCart(); // Use the cart context
  const cartCount = cartItems.length; // Get the number of items in the cart

  return (
    <Box bg="teal.500" px={4} className="shadow-md">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Brand */}
        <Box>
          <Link
            as={RouterLink}
            to="/"
            fontSize="2xl"
            fontWeight="bold"
            className="text-white"
          >
            Rentify
          </Link>
        </Box>

        {/* Desktop Navigation */}
        <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
          {Links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
          {/* Cart Icon with Badge */}
          <Box position="relative">
            <IconButton
              as={RouterLink}
              to="/cart"
              icon={<FaShoppingCart />}
              aria-label="Cart"
              variant="ghost"
              size="md"
              color="GrayText"
            />
            {cartCount > 0 && (
              <Badge
                position="absolute"
                top="-1"
                right="-1"
                borderRadius="full"
                bg="red.500"
                color="white"
                fontSize="0.8em"
                p="2px 4px"
              >
                {cartCount}
              </Badge>
            )}
          </Box>
        </HStack>

        {/* Mobile Navigation Button */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          className="text-white"
        />
      </Flex>

      {/* Mobile Navigation */}
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
            {/* Cart Link for Mobile */}
            <NavLink>Cart</NavLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Header;
