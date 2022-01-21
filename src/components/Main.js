import HorizontalScroll from 'react-scroll-horizontal';
import { Box, useColorModeValue, SimpleGrid, Text } from '@chakra-ui/react';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

import { FaGithubAlt, FaLinkedinIn, FaHackerrank } from 'react-icons/fa';

export default function Main() {
    return (
        <Box
            alignItems={'center'}
            bg={useColorModeValue('lBackground', 'background')}
            display={['flow-root', 'flow-root', 'block', 'block']}
            h="92vh"
            ml={'12'}
            sx={{
                '@media only screen and (max-width: 768px)': {
                    ml: 0,
                },
            }}
        >
            <HorizontalScroll
                config={{ stiffness: 100, damping: 26 }}
                reverseScroll={'true'}
            >
                <Home />
                <Skills />
                <Projects />
                <About />
                <Contact />
            </HorizontalScroll>
            <SimpleGrid
                align="center"
                bgColor={useColorModeValue('lBackground', 'background')}
                columns={3}
                h="4vh"
                spacing={4}
            >
                <a
                    href="https://github.com/EliasLeguizamon123"
                    rel="my-github noreferrer"
                    target="_blank"
                >
                    <FaGithubAlt />
                </a>
                <a
                    href="https://www.linkedin.com/in/eliasleguizamon/"
                    rel="my-github noreferrer"
                    target="_blank"
                >
                    <FaLinkedinIn />
                </a>
                <a
                    href="https://www.hackerrank.com/elias_leguizamo1"
                    rel="my-github noreferrer"
                    target="_blank"
                >
                    <FaHackerrank />
                </a>
            </SimpleGrid>
            <SimpleGrid
                align="center"
                bgColor={useColorModeValue('lBackground', 'background')}
                columns={1}
                h="4vh"
            >
                <Text>Copyright © 2022 Elías Leguizamón</Text>
            </SimpleGrid>
        </Box>
    );
}
