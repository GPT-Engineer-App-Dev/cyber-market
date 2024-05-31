import { Container, Box, Image, Text, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  // Mock product data based on ID
  const product = {
    id: 1,
    name: "Smartphone",
    image: "path/to/smartphone.jpg",
    price: "$499",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };

  return (
    <Container maxW="container.md" p={4}>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={product.image} alt={product.name} />
        <Box p="6">
          <Text fontWeight="bold" fontSize="xl" mb={2}>
            {product.name}
          </Text>
          <Text>${product.price}</Text>
          <Text mt={4}>{product.description}</Text>
          <Button mt={4} colorScheme="blue">
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductDetail;