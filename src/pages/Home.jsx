import { Container, Grid, Box, Image, Text, Button, Select } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Smartphone",
    image: "path/to/smartphone.jpg",
    price: "$499",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Laptop",
    image: "path/to/laptop.jpg",
    price: "$999",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Headphones",
    image: "path/to/headphones.jpg",
    price: "$149",
    category: "Electronics",
  },
  {
    id: 4,
    name: "T-shirt",
    image: "path/to/tshirt.jpg",
    price: "$29",
    category: "Clothing",
  },
  {
    id: 5,
    name: "Sneakers",
    image: "path/to/sneakers.jpg",
    price: "$79",
    category: "Clothing",
  },
];

const Home = () => {
  const [category, setCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('All');

  const filteredProducts = products.filter(product => 
    (category === 'All' || product.category === category) && 
    (priceRange === 'All' || 
      (parseInt(product.price.slice(1)) >= parseInt(priceRange.split('-')[0]) && 
       parseInt(product.price.slice(1)) <= parseInt(priceRange.split('-')[1]))
    )
  );

  return (
    <Container maxW="container.xl" p={4}>
      <Select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
      </Select>
      <Select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
        <option value="All">All Prices</option>
        <option value="0-50">$0 - $50</option>
        <option value="51-100">$51 - $100</option>
        <option value="101-200">$101 - $200</option>
        <option value="201-500">$201 - $500</option>
      </Select>
      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
        {filteredProducts.map((product) => (
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