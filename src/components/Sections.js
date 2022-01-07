import { Flex, Text, useColorModeValue, Box } from '@chakra-ui/react';
import Fade from 'react-reveal/Fade';

export default function Sections(dummy) {
    return (
        <Flex
            align="center"
            bg={useColorModeValue('gray.50', 'gray.900')}
            h={'100vh'}
            justify="center"
            w={'100vw'}
        >
            <Box
                align="center"
                bg={useColorModeValue('gray.200', 'gray.700')}
                borderRadius={'lg'}
                h={'70%'}
                pt={'6'}
                shadow={'md'}
                w={'70%'}
            >
                <Fade bottom>
                    <Text as="i" fontSize="xl">
                        {dummy.dummy.name}
                    </Text>
                </Fade>
            </Box>
        </Flex>
    );
}
