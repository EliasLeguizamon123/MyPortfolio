import HorizontalScroll from 'react-scroll-horizontal';
import { Box, Stack, useColorModeValue } from '@chakra-ui/react';
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
            h="100vh"
            ml="10"
        >
            <HorizontalScroll reverseScroll={'true'}>
                {sections}
            </HorizontalScroll>
        </Box>
    );
}
