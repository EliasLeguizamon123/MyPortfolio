import { SimpleGrid, Box, Text, useColorModeValue } from '@chakra-ui/react';
import { FaGithubAlt, FaLinkedinIn, FaHackerrank } from 'react-icons/fa';

export default function Footer() {
    return (
        <Box align="center" h="5.3rem" p="4">
            <SimpleGrid
                align="center"
                bgColor={useColorModeValue('lBackground', 'background')}
                columns={3}
                spacing="2"
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
                spacing="2"
            >
                <Text>Copyright © 2022 Elías Leguizamón</Text>
            </SimpleGrid>
        </Box>
    );
}
