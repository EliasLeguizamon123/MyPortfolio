import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Main from '../components/Main';
import Skills from '../components/Skills';
import { Box } from '@chakra-ui/react';

export default function Routers() {
    return (
        <Router>
            <Box className="App">
                <Header />
            </Box>

            <Box maxW="100%" maxH="95%">
                <Routes>
                    <Route exact path="/" element={<Main />} />
                    <Route exact path="/skills" element={<Skills />} />
                    <Route exact path="/about" element={<Skills />} />
                </Routes>
            </Box>
        </Router>
    );
}
