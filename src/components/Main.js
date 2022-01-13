import HorizontalScroll from 'react-scroll-horizontal';
import { Box, Stack } from '@chakra-ui/react';
import Section from './Section';

const dummies = [
    { id: 1, name: 'Hello 1' },
    { id: 2, name: 'Hello 2' },
    { id: 3, name: 'Hello 3' },
    { id: 4, name: 'Hello 4' },
];

const sections = dummies.map((dummy) => (
    <Stack key={dummy.id} bg="red">
        <Section dummy={dummy} />
    </Stack>
));

export default function Main() {
    return (
        <Box h="89.8vh" ml="10">
            <HorizontalScroll reverseScroll={'true'}>
                {sections}
            </HorizontalScroll>
        </Box>
    );
}
