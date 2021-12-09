import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Skills from '../components/Skills'
import { Box, Container } from '@chakra-ui/react'

export default function Routers() {
    return (
        <Router>
            <Box className="App">
                <Header 
                nav={[
                    { path: '/skills', label: 'Skills' },
                    { path: '/formation', label: 'Formation' },
                    { path: '/about', label: 'About' },
                    ]}/>
            </Box>
            
            <Container maxW="100%" >
                <Routes>
                    <Route exact path="/" element={<Main />} />
                    <Route exact path="/skills" element={<Skills />} />
                </Routes>
            </Container>
        </Router>
    )
}