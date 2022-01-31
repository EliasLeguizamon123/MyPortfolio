import {
    SimpleGrid,
    Image,
    Box,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

export default function Gallery() {
    return (
        <Box align="center" pt={32}>
            <Text
                color={useColorModeValue('lPrimary', 'primary')}
                fontSize={'lg'}
                pb="6"
            >
                My proyects
            </Text>
            <SimpleGrid
                columns={[1, 2, 4]}
                spacingX="10"
                spacingY="10"
                w={'max-content'}
            >
                <Box>
                    <Image
                        borderRadius={'10px'}
                        src="https://via.placeholder.com/150"
                    />
                    <Text as="i" color="gray.300" fontSize="xs">
                        Example 1
                    </Text>
                </Box>
                <Box>
                    <Image
                        borderRadius={'10px'}
                        src="https://via.placeholder.com/150"
                    />
                    <Text as="i" color="gray.300" fontSize="xs">
                        Example 2
                    </Text>
                </Box>
                <Box>
                    <Image
                        borderRadius={'10px'}
                        src="https://via.placeholder.com/150"
                    />
                    <Text as="i" color="gray.300" fontSize="xs">
                        Example 3
                    </Text>
                </Box>
                <Box>
                    <Image
                        borderRadius={'10px'}
                        src="https://via.placeholder.com/150"
                    />
                    <Text as="i" color="gray.300" fontSize="xs">
                        Example 4
                    </Text>
                </Box>
                <Box>
                    <Image
                        borderRadius={'10px'}
                        src="https://via.placeholder.com/150"
                    />
                    <Text as="i" color="gray.300" fontSize="xs">
                        Example 5
                    </Text>
                </Box>
                <Box>
                    <Image
                        borderRadius={'10px'}
                        src="https://via.placeholder.com/150"
                    />
                    <Text as="i" color="gray.300" fontSize="xs">
                        Example 6
                    </Text>
                </Box>
            </SimpleGrid>
        </Box>
    );
}
