import { Container, Grid, Box, Image, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Smartphone",
    image: "path/to/smartphone.jpg",
    price: "$499",
  },
  {
    id: 2,
    name: "Laptop",
    image: "path/to/laptop.jpg",
    price: "$999",
  },
  {
    id: 3,
    name: "Headphones",
    image: "path/to/headphones.jpg",
    price: "$149",
  },
];

const Home = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
        {products.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <Box p="6">
              <Text fontWeight="bold" fontSize="xl" mb={2}>
                {product.name}
              </Text>
              <Text>${product.price}</Text>
              <Link to={`/product/${product.id}`}>
                <Button mt={4} colorScheme="blue">
                  View Details
                </Button>
              </Link>
            </Box>
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;