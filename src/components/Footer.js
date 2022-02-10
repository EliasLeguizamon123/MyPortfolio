import { SimpleGrid, Box, Text, useColorModeValue } from '@chakra-ui/react';
import { FaGithubAlt, FaLinkedinIn, FaHackerrank } from 'react-icons/fa';

export default function Footer() {
    return (
        <Box align="center" pt="12" w="full">
            <SimpleGrid
                align="center"
                bgColor={useColorModeValue('lSecondary', 'primary')}
                columns={3}
                p={2}
                spacing="2"
            >
                <a
                    href="https://github.com/EliasLeguizamon123"
                    rel="my-github noreferrer"
                    target="_blank"
                >
                    <FaGithubAlt
                        color={useColorModeValue('primary', 'lPrimary')}
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/eliasleguizamon/"
                    rel="my-github noreferrer"
                    target="_blank"
                >
                    <FaLinkedinIn
                        color={useColorModeValue('primary', 'lPrimary')}
                    />
                </a>
                <a
                    href="https://www.hackerrank.com/elias_leguizamo1"
                    rel="my-github noreferrer"
                    target="_blank"
                >
                    <FaHackerrank
                        color={useColorModeValue('primary', 'lPrimary')}
                    />
                </a>
            </SimpleGrid>
            <SimpleGrid
                align="center"
                bgColor={useColorModeValue('lSecondary', 'primary')}
                columns={1}
                spacing="2"
            >
                <Text color={useColorModeValue('primary', 'lPrimary')}>
                    Copyright © 2022 Elías Leguizamón
                </Text>
            </SimpleGrid>
        </Box>
    );
}
