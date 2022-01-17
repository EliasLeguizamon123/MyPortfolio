import { Flex, Heading, Box, Text } from '@chakra-ui/react';

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
                <Heading>{dummy.dummy.name}</Heading>
                <Text p={3}>
                    Aw, why cant couples that start out cheating ever end up
                    happy? God-damn! I mean, why would a poptart want to live
                    inside a toaster, Rick? I mean, that would be like the
                    scariest place for them to live. You know what I mean? I
                    dont get it, and I dont need to. I couldnt hear you over my
                    own screaming. Weve talked about this! Well, if its God
                    power that gets you going, light some candles and put on the
                    Billy Ocean, cause Moses is home, and hes ready to burn some
                    bush! Rick, I dont like glowing rocks in the kitchen trash!
                    Your failures are your own, old man! I say, follow
                    throooough! We dont whitewash it either, Morty. I mean, the
                    pirates are really rapey. Ohh yea, you gotta get schwifty.
                    Ooohhh can do. Wow I really crononbergd up the whole place
                    huh Morty, just a bunch a cronenbergs walkin around.
                </Text>
            </Box>
        </Flex>
    );
}
