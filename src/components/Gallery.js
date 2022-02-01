import {
    SimpleGrid,
    Image,
    Box,
    Text,
    useColorModeValue,
    Flex,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export default function Gallery() {
    return (
        <Box align="center" pt={32}>
            <Text
                as="i"
                color={useColorModeValue('lPrimary', 'primary')}
                fontSize={'lg'}
            >
                My proyects
            </Text>
            <SimpleGrid
                columns={[1, 1, 2, 2]}
                pt={4}
                spacingX="10"
                spacingY="10"
                w={'max-content'}
            >
                <Box
                    _hover={{
                        transform: 'translate(0px, -10px)',
                        transitionDuration: '1s',
                    }}
                    as="button"
                    role="group"
                >
                    <Image
                        borderRadius={'10px'}
                        boxSize={'300px'}
                        src="https://via.placeholder.com/150"
                    />
                    <Flex justify={'space-between'}>
                        <Text as="i" color="gray.300" fontSize="xs">
                            Example 1
                        </Text>
                        <ArrowForwardIcon
                            _groupHover={{
                                color: 'rgba(180, 180, 180, 1)',
                                transform: 'translatex(-12px)',
                                transitionDuration: '1s',
                            }}
                            className="text"
                            color="rgba(180, 180, 180, 0)"
                        />
                    </Flex>
                </Box>
                <Box
                    _hover={{
                        transform: 'translate(0px, -10px)',
                        transitionDuration: '1s',
                    }}
                    as="button"
                    role="group"
                >
                    <Image
                        borderRadius={'10px'}
                        boxSize={'300px'}
                        src="https://via.placeholder.com/150"
                    />
                    <Flex justify={'space-between'}>
                        <Text as="i" color="gray.300" fontSize="xs">
                            Example 2
                        </Text>
                        <ArrowForwardIcon
                            _groupHover={{
                                color: 'rgba(180, 180, 180, 1)',
                                transform: 'translatex(-12px)',
                                transitionDuration: '1s',
                            }}
                            className="text"
                            color="rgba(180, 180, 180, 0)"
                        />
                    </Flex>
                </Box>
            </SimpleGrid>
        </Box>
    );
}
