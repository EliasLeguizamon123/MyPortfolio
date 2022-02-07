import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Box, Heading, SimpleGrid, Image } from '@chakra-ui/react';

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
        <Box pt="12">
            <SimpleGrid columns={[1, 1, 2, 2]} w={'max-content'}>
                <Box>
                    <Heading>{project.title}</Heading>
                    <Container pt="4">{project.description}</Container>
                </Box>
                <Box>
                    <Image
                        bgPosition="center"
                        borderRadius={'10px'}
                        boxSize={'400px'}
                        objectFit="cover"
                        src="https://via.placeholder.com/150"
                    />
                </Box>
            </SimpleGrid>
        </Box>
    );
}
