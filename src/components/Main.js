import HorizontalScroll from 'react-scroll-horizontal';
import { Box, Stack } from '@chakra-ui/react';
import Section from './Section';
// import anime from 'animejs/lib/anime.es.js';

const dummies = [
    { id: 1, name: 'Hello 1' },
    { id: 2, name: 'Hello 2' },
    { id: 3, name: 'Hello 3' },
    { id: 4, name: 'Hello 4' },
];

// const animation = anime({
//     targets: '.section',
//     easing: 'easeOutElastic',
//     bg: 'red',
// });

const sections = dummies.map((dummy) => (
    <Stack key={dummy.id}>
        <Section className="section" dummy={dummy} />
    </Stack>
));

export default function Main() {
    return (
        <Box h="100vh" ml="10">
            <HorizontalScroll reverseScroll={'true'}>
                {sections}
            </HorizontalScroll>
        </Box>
    );
}
