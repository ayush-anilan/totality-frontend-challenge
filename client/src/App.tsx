import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, Flex, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import PropertyDetails from "./components/pages/PropertyDetails";
import Checkout from "./components/pages/Checkout";
import Footer from "./components/Footer";
import PropertyList from "./components/PropertyList";
import Cart from "./components/Cart";

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Flex direction="column" minHeight="100vh">
          <Header />
          <Box flex="1" p={4}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/properties" element={<PropertyList />} />
              <Route path="/properties/:id" element={<PropertyDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
              {/* Add more routes as needed */}
            </Routes>
          </Box>
          <Footer />
        </Flex>
      </Router>
    </ChakraProvider>
  );
};

export default App;
