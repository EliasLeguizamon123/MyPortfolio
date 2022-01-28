import { SimpleGrid, Image, Box, Flex } from '@chakra-ui/react';

export default function Gallery() {
    return (
        <Flex justify="center">
            <SimpleGrid
                columns={[1, 2, 4]}
                pt={12}
                spacingX="10"
                spacingY="10"
                w="80%"
            >
                <Box>
                    <Image src="https://via.placeholder.com/150" />
                </Box>
                <Box>
                    <Image src="https://via.placeholder.com/150" />
                </Box>
                <Box>
                    <Image src="https://via.placeholder.com/150" />
                </Box>
                <Box>
                    <Image src="https://via.placeholder.com/150" />
                </Box>
                <Box>
                    <Image src="https://via.placeholder.com/150" />
                </Box>
                <Box>
                    <Image src="https://via.placeholder.com/150" />
                </Box>
            </SimpleGrid>
        </Flex>
    );
}
