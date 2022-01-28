import './App.css';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
    return (
        <Flex
            align="center"
            bgColor={useColorModeValue('lBackground', 'background')}
            direction="column"
            justify="center"
            w={'full'}
        >
            <Navbar />
            <Home />
            <Gallery />
            <Footer />
        </Flex>
    );
}
export default App;
