import {
    Heading,
    useColorModeValue,
    Text,
    Box,
    Image,
    Container,
} from '@chakra-ui/react';

import Technologies from './Technologies';
import Timeline from './Timeline';
import Gallery from './Gallery';
export default function Home() {
    return (
        <Box align="center" pt="12">
            <Image
                borderRadius="full"
                boxSize="150px"
                fallback="https://via.placeholder.com/150"
                pb="10px"
                src={
                    'https://avatars.githubusercontent.com/u/25516473?s=400&u=58049da37eaf5d050270ef502caacfb79c9f8dda&v=4'
                }
            />
            <Heading
                color={useColorModeValue('lPrimary', 'primary')}
                fontSize="2xl"
            >
                {`Hi!, I'm Elías`}
            </Heading>
            <Text
                as="i"
                className="typingTitle"
                color={useColorModeValue('lPrimary', 'primary')}
                fontSize={'lg'}
            >
                {`<Fullstack Developer />`}
            </Text>
            <Container centerContent pt={4}>
                I have passion for create and learn new things constantly.
                <br />
                Also Open Source lover and i try to contribute with the
                community.
                <br />I have a minimalist mindset, i love team work too.
            </Container>
            <Technologies />
            <Timeline />
            <Gallery />
        </Box>
    );
}
