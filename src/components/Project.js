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
} from '@chakra-ui/react';
import { BsCodeSlash, BsWindowDock } from 'react-icons/bs';

export default function Project() {
    const [project, setProject] = useState([]);
    let { id } = useParams();

    const getProject = async () => {
        const response = await axios.get(
            `https://portfolio-backend-el.herokuapp.com/projects/${id}`
        );
        const data = await response.data.data;

        setProject(() => data);
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
                <Box>
                    <Heading pb="4">{project.title}</Heading>
                    <Container
                        centerContent
                        maxW={['xs', 'xs', 'sm', 'lg']}
                        pt="4"
                    >
                        {project.description}
                    </Container>
                    <SimpleGrid columns="2" pt="4" spacingX="2">
                        <a
                            href="https://www.google.com"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <Button variant="ghost" w="full">
                                <BsCodeSlash />
                            </Button>
                        </a>
                        <a
                            href="https://www.google.com"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <Button variant="ghost" w="full">
                                <BsWindowDock />
                            </Button>
                        </a>
                        <Box align="center" justify="center">
                            <Text>Code</Text>
                        </Box>
                        <Box align="center" justify="center">
                            <Text>Demo</Text>
                        </Box>
                    </SimpleGrid>
                </Box>
                <Box align={'center'} justify="center">
                    <Image
                        bgPosition="center"
                        borderRadius={'10px'}
                        boxSize={['200px', '300px', '400px', '400px']}
                        fallbackSrc="https://via.placeholder.com/150"
                        objectFit="cover"
                        src={project.images}
                    />
                </Box>
            </SimpleGrid>
        </Flex>
    );
}
