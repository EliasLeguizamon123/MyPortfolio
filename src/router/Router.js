import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Skills from '../components/Skills';
import { Box } from '@chakra-ui/react';

export default function Routers() {
    return (
        <Router>
            <Box>
                <Navbar />
                <Routes>
                    <Route exact element={<Main />} path="/" />
                    <Route exact element={<Skills />} path="/skills" />
                    <Route exact element={<Skills />} path="/about" />
                </Routes>
            </Box>
        </Router>
    );
}
