import { Flex, Text, Box } from '@chakra-ui/react';

export default function Section(dummy) {
    // const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex align="center" h={'100vh'} justify="center" w={'100vw'}>
            <Box
                align="center"
                bg={'secondary'}
                borderRadius={'lg'}
                boxShadow={'dark-lg'}
                h={'70%'}
                pt={'6'}
                w={'70%'}
            >
                <Text as="i" fontSize="xl">
                    {dummy.dummy.name}
                </Text>
            </Box>
        </Flex>
    );
}
