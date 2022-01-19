import HorizontalScroll from 'react-scroll-horizontal';
import {
    Box,
    Stack,
    useColorModeValue,
    SimpleGrid,
    Text,
} from '@chakra-ui/react';
import Section from './Section';

import { FaGithubAlt, FaLinkedinIn, FaHackerrank } from 'react-icons/fa';

const dummies = [
    { id: 1, name: 'Hi !' },
    { id: 2, name: 'My skills' },
    { id: 3, name: 'About me' },
    { id: 4, name: 'Contact with me' },
];

const sections = dummies.map((dummy) => (
    <Stack key={dummy.id}>
        <Section dummy={dummy} />
    </Stack>
));

export default function Main() {
    return (
        <Box
            bg={useColorModeValue('lBackground', 'background')}
            h="90vh"
            ml="10"
        >
            <HorizontalScroll
                config={{ stiffness: 100, damping: 26 }}
                reverseScroll={'true'}
            >
                {sections}
            </HorizontalScroll>
            <SimpleGrid
                align="center"
                bgColor={useColorModeValue('lBackground', 'background')}
                columns={3}
                h="5vh"
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
                h="5vh"
            >
                <Text>Copyright © 2022 Elías Leguizamón</Text>
            </SimpleGrid>
        </Box>
    );
}
