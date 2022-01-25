import { Flex, Heading, useColorModeValue, Text, Box } from '@chakra-ui/react';

export default function Home() {
    return (
        <Flex h={'90vh'} justify="center" pt={12} w={'100vw'}>
            <Box align="center" h="90%" w="80%">
                <Heading
                    color={useColorModeValue('lPrimary', 'primary')}
                    fontSize="2xl"
                >
                    Hello there!, Im Elias Leguizamon
                </Heading>
                <Text
                    as="i"
                    color={useColorModeValue('lPrimary', 'primary')}
                    fontSize={'lg'}
                >
                    Fullstack Developer
                </Text>
                <Box pt="4">
                    <Text>
                        Sunt ad esse in voluptate non. Deserunt sit commodo nisi
                        id. Eiusmod consequat id exercitation cupidatat magna
                        deserunt officia non sint officia nostrud id deserunt.
                        Velit sit nostrud non proident ullamco mollit officia
                        voluptate. Exercitation adipisicing fugiat voluptate
                        enim in consectetur excepteur quis minim ea eu voluptate
                        deserunt. Irure labore ullamco ex quis ea. Quis mollit
                        non non dolor. Id nisi voluptate aliqua aliqua aliquip
                        quis magna. Esse quis in sit dolore commodo elit
                        voluptate veniam enim enim ad anim in aliqua. Labore
                        sunt do ex proident nostrud quis irure elit. Pariatur
                        laborum tempor anim pariatur est laborum qui nostrud
                        amet tempor sunt velit laborum. Cillum in veniam velit
                        magna laboris. Adipisicing sint magna elit incididunt
                        aliqua aliquip ullamco adipisicing incididunt in
                        deserunt. Nulla eu nisi adipisicing laboris cillum aute
                        sint ea enim ut.
                    </Text>
                </Box>
            </Box>
        </Flex>
    );
}
