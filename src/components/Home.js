import {
    Heading,
    useColorModeValue,
    Text,
    Box,
    Image,
    Container,
    SimpleGrid,
    Badge,
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
            <Container align="left" pt={4}>
                I have passion for create and learn new things constantly.
                <br />
                Also Open Source lover and i try to contribute with the
                community.
                <br />I have a minimalist mindset, i love team work too.
            </Container>
            <Text
                as="i"
                color={useColorModeValue('lPrimary', 'primary')}
                fontSize={'lg'}
                pt="6"
            >
                You can contact me at:
            </Text>
            <SimpleGrid columns={[1, 2, 4]} spacing="4px">
                <Box>
                    <a
                        href="https://github.com/EliasLeguizamon123"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <Badge colorScheme="green">Github</Badge>
                    </a>
                </Box>
                <Box>
                    <a
                        href="https://www.linkedin.com/in/eliasleguizamon/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <Badge colorScheme="green">Linkedin</Badge>
                    </a>
                </Box>
                <Box>
                    <a
                        href="https://www.hackerrank.com/elias_leguizamo1?hr_r=1"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <Badge colorScheme="green">Hackerrank</Badge>
                    </a>
                </Box>
                <Box>
                    <a
                        href="mailto:elias.leguizamon1997@gmail.com"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <Badge colorScheme="green">Email</Badge>
                    </a>
                </Box>
            </SimpleGrid>
            <Technologies />
            <Timeline />
            <Gallery />
        </Box>
    );
}
