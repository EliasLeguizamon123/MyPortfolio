import {
    Heading,
    useColorModeValue,
    Text,
    Box,
    Image,
    Container,
} from '@chakra-ui/react';

export default function Home() {
    return (
        <Box align="center" pt="12">
            <Image
                borderRadius="full"
                boxSize="150px"
                pb="10px"
                src="https://via.placeholder.com/150"
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
            <Container pt={4}>
                lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quidem. lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quidem. lorem ipsum dolor sit
            </Container>
        </Box>
    );
}
