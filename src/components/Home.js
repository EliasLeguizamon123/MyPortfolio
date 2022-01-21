import { Flex, Heading, Box, Text, useColorModeValue } from '@chakra-ui/react';

export default function Home() {
    return (
        <Flex align="center" h={'90vh'} justify="center" w={'100vw'}>
            <Box
                align="center"
                bg={useColorModeValue('lSecondary', 'background')}
                borderRadius={'lg'}
                boxShadow={'dark-lg'}
                h={'70%'}
                pt={'6'}
                w={'70%'}
            >
                <Heading color={useColorModeValue('lPrimary', 'primary')}>
                    Hi, Im Elías Leguizamón
                </Heading>
                <Text
                    as="i"
                    color={useColorModeValue('lPrimary', 'primary')}
                    fontSize="lg"
                >
                    FullStack Developer
                </Text>
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
