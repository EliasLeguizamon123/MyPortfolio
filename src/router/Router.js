import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Main from '../components/Main';
import Skills from '../components/Skills';
import { Box } from '@chakra-ui/react';

export default function Routers() {
    return (
        <Router>
            <Box>
                <Header />
            </Box>

            <Box maxH="95%" maxW="100%">
                <Routes>
                    <Route exact element={<Main />} path="/" />
                    <Route exact element={<Skills />} path="/skills" />
                    <Route exact element={<Skills />} path="/about" />
                    <Route exact element={<Navbar />} path="/test" />
                </Routes>
            </Box>
        </Router>
    );
}
