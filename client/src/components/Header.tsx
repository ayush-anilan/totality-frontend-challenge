import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { FiHome, FiMapPin, FiShoppingCart } from "react-icons/fi"; // Import icons

// Updated Links array with objects for paths and labels
const Links = [
  { label: "Home", path: "/", icon: FiHome },
  { label: "Properties", path: "/properties", icon: FiMapPin },
];

const NavLink = ({
  path,
  icon: Icon,
  label,
}: {
  path: string;
  icon: any;
  label: string;
}) => (
  <Link
    as={RouterLink}
    to={path}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "gray.200",
    }}
    className="text-lg font-medium flex items-center"
  >
    <Icon className="mr-2" />
    {label}
  </Link>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <NavLink
              key={link.label}
              path={link.path}
              icon={link.icon}
              label={link.label}
            />
          ))}
          {/* Cart Link with Icon */}
          <Link
            as={RouterLink}
            to="/cart"
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
              bg: "gray.200",
            }}
            className="text-lg font-medium flex items-center"
          >
            <FiShoppingCart className="mr-2" />
            Cart
          </Link>
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
              <NavLink
                key={link.label}
                path={link.path}
                icon={link.icon}
                label={link.label}
              />
            ))}
            {/* Cart Link with Icon for Mobile */}
            <Link
              as={RouterLink}
              to="/cart"
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: "gray.200",
              }}
              className="text-lg font-medium flex items-center"
            >
              <FiShoppingCart className="mr-2" />
              Cart
            </Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Header;
