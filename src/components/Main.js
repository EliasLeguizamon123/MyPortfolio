import HorizontalScroll from 'react-scroll-horizontal';
import { Box, Stack } from '@chakra-ui/react';
import Sections from './Sections';

const dummies = [
    { id: 1, name: 'Hello 1' },
    { id: 2, name: 'Hello 2' },
    { id: 3, name: 'Hello 3' },
    { id: 4, name: 'Hello 4' },
];

const sections = dummies.map((dummy) => (
    <Stack key={dummy.id}>
        <Sections dummy={dummy} />
    </Stack>
));

export default function Main() {
    return (
        <Box h="89.8vh" w="100%">
            <HorizontalScroll animValues={2} reverseScroll={'true'}>
                {sections}
            </HorizontalScroll>
        </Box>
    );
}
