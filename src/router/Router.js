import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Spinner from '../utils/Spinner';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Skills from '../components/Skills';
import { Box } from '@chakra-ui/react';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';

export default function Routers() {
    return (
        <Router>
            <Box>
                <Navbar
                    weblinks={[
                        { name: 'Skills', path: '/skills' },
                        { name: 'About', path: '/about' },
                        { name: 'Projects', path: '/projects' },
                        { name: 'Contact', path: '/contact' },
                    ]}
                />
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route exact element={<Main />} path="/" />
                        <Route exact element={<Skills />} path="/skills" />
                        <Route exact element={<Projects />} path="/projects" />
                        <Route exact element={<About />} path="/about" />
                        <Route exact element={<Contact />} path="/contact" />
                        <Route exact element={<Spinner />} path="/test" />
                    </Routes>
                </Suspense>
            </Box>
        </Router>
    );
}
