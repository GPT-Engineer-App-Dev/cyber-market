import { Flex, Box, Heading, Spacer, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex p={4} bg="blue.500" color="white">
      <Box p="2">
        <Heading size="md">E-Commerce Site</Heading>
      </Box>
      <Spacer />
      <Box>
        <Link as={RouterLink} to="/" p={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/products" p={2}>
          Products
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;