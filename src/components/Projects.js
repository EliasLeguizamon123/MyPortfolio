import { Flex, Heading, Box, Text, useColorModeValue } from '@chakra-ui/react';

export default function Projects() {
    return (
        <Flex h={'100vh'} justify="center" w={'100vw'}>
            <Box
                align="center"
                bg={useColorModeValue('lSecondary', 'background')}
                borderRadius={'lg'}
                boxShadow={'dark-lg'}
                h={'70%'}
                mt={'6'}
                pt={'6'}
                w={'60%'}
            >
                <Heading color={useColorModeValue('lPrimary', 'primary')}>
                    All my projects are here
                </Heading>
                {/* content */}
                <Text p={3}>
                    Aw, why cant couples that start out cheating ever end up
                    happy? God-damn! I mean, why would a poptart want to live
                    inside a toaster, Rick? I mean, that would be like the
                    scariest place for them to live. You know what I mean? I
                    dont get it, and I dont need to. I couldnt hear you over my
                    own screaming. Weve talked about this! Well, if its God
                    power that gets you going.
                </Text>
            </Box>
        </Flex>
    );
}
