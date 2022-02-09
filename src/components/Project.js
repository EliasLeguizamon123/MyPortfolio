import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
    Container,
    Box,
    Heading,
    SimpleGrid,
    Image,
    Flex,
    Button,
    Text,
    useColorModeValue,
    Spinner,
} from '@chakra-ui/react';
import { BsCodeSlash, BsWindowDock, BsArrowBarLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Project() {
    const [project, setProject] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let { id } = useParams();

    const getProject = async () => {
        const response = await axios.get(
            `https://portfolio-backend-el.herokuapp.com/projects/${id}`
        );
        const data = await response.data.data;

        setProject(() => data);
        setIsLoading(false);
    };

    useEffect(() => {
        getProject();
    }, []);

    return (
        <Flex pt="12">
            <SimpleGrid
                columns={[1, 1, 2, 2]}
                spacingX="7"
                spacingY="7"
                w={'max-content'}
            >
                <Flex
                    align="center"
                    direction="row"
                    display={['Flex', 'Flex', 'none']}
                    ml="60"
                >
                    <Text fontFamily={'JetBrains Mono'} fontSize="1xl">
                        Back
                    </Text>
                    <Link to="/">
                        <Button size="lg" variant="ghost">
                            <BsArrowBarLeft size="md" />
                        </Button>
                    </Link>
                </Flex>
                <Box>
                    <Heading fontSize="3xl" pb="4">
                        {project.title}
                    </Heading>
                    <Container
                        centerContent
                        maxW={['xs', 'xs', 'sm', 'lg']}
                        pt="4"
                    >
                        {isLoading ? (
                            <Spinner
                                color="primary"
                                emptyColor="gray.200"
                                size="xl"
                                speed="0.8s"
                            />
                        ) : (
                            project.description
                        )}
                    </Container>
                    <SimpleGrid columns="2" pt="4" spacingX="2">
                        {project.repo != '' ? (
                            <Box>
                                <a
                                    href={project.repo}
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <Button variant="ghost" w="full">
                                        <BsCodeSlash />
                                    </Button>
                                </a>
                                <Box align="center" justify="center">
                                    <Text>Code</Text>
                                </Box>
                            </Box>
                        ) : null}
                        {project.demo != '' ? (
                            <Box>
                                <a
                                    href={project.demo}
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <Button variant="ghost" w="full">
                                        <BsWindowDock />
                                    </Button>
                                </a>
                                <Box align="center" justify="center">
                                    <Text>Demo</Text>
                                </Box>
                            </Box>
                        ) : null}
                    </SimpleGrid>
                    <Box align="center" justify="center" pt="4">
                        <Text
                            as="i"
                            color={useColorModeValue('lPrimary', 'primary')}
                            fontSize={'lg'}
                        >
                            Tools i use
                        </Text>
                        <Container
                            centerContent
                            maxW={['xs', 'xs', 'sm', 'lg']}
                        >
                            {project.tools}
                        </Container>
                    </Box>
                    <Flex
                        align="center"
                        direction="row"
                        display={['none', 'none', 'flex']}
                        mr="4"
                        pb="3"
                        pt="12"
                    >
                        <Link to="/">
                            <Button size="lg" variant="ghost">
                                <BsArrowBarLeft size="md" />
                            </Button>
                        </Link>
                        <Text fontFamily={'JetBrains Mono'} fontSize="1xl">
                            Back
                        </Text>
                    </Flex>
                </Box>
                <Box align={'center'} justify="center">
                    {isLoading ? null : (
                        <Image
                            bgPosition="center"
                            borderRadius={'10px'}
                            boxSize={['200px', '300px', '400px', '400px']}
                            fallbackSrc="https://via.placeholder.com/150"
                            objectFit="cover"
                            src={project.images}
                        />
                    )}
                </Box>
            </SimpleGrid>
        </Flex>
    );
}
