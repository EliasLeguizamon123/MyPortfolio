import { Box } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

export default function Routers() {
    return (
        <Box w="100vw">
            <Navbar />
            <Home />
            <Gallery />
            <Footer />
        </Box>
    );
}
