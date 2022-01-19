import HorizontalScroll from 'react-scroll-horizontal';
import { Box, Stack, useColorModeValue, Text, Flex } from '@chakra-ui/react';
import Section from './Section';
// import anime from 'animejs/lib/anime.es.js';

const dummies = [
    { id: 1, name: 'Hi !' },
    { id: 2, name: 'My skills' },
    { id: 3, name: 'About me' },
    { id: 4, name: 'Contact with me' },
];

// const animation = anime({
//     targets: '.section',
//     easing: 'easeOutElastic',
//     bg: 'red',
// });

const sections = dummies.map((dummy) => (
    <Stack key={dummy.id}>
        <Section dummy={dummy} />
    </Stack>
));

export default function Main() {
    return (
        <Box
            bg={useColorModeValue('lBackground', 'background')}
            h="95vh"
            ml="10"
        >
            <HorizontalScroll
                config={{ stiffness: 100, damping: 26 }}
                reverseScroll={'true'}
            >
                {sections}
            </HorizontalScroll>
            <Flex
                align="center"
                bgColor={useColorModeValue('lBackground', 'background')}
                direction={'row'}
                h="5vh"
                justify={'center'}
            >
                <Text>Imagen 1</Text>
                <Text>Imagen 2</Text>
                <Text>Imagen 3</Text>
                <Text>Imagen 4</Text>
            </Flex>
        </Box>
    );
}
