import HorizontalScroll from 'react-scroll-horizontal';
import { Box, Stack, Flex } from '@chakra-ui/react';
import React from 'react';

const dummys = [
    { id: 1, name: 'Hello 1' },
    { id: 2, name: 'Hello 2' },
    { id: 3, name: 'Hello 3' },
    { id: 4, name: 'Hello 4' },
];

const seccions = dummys.map((dummy) => (
    <Stack key={dummy.id} bgGradient="linear(to-br, red.500, yellow.500)">
        <Flex
            key={dummy.id}
            w={'100vw'}
            h={'100vh'}
            align="center"
            justify="center"
        >
            <h1>{dummy.name}</h1>
        </Flex>
    </Stack>
));
export default function Main({ name }) {
    console.log(name);
    return (
        <Box w="100%" h="89.8vh">
            <HorizontalScroll>{seccions}</HorizontalScroll>
        </Box>
    );
}
