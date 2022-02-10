import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Project from '../components/Project';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Router() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact element={<Home />} path="/" />
                <Route exact element={<Project />} path="/projects/:id" />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
