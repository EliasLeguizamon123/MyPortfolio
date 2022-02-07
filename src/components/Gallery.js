import {
    SimpleGrid,
    Image,
    Box,
    Text,
    useColorModeValue,
    Flex,
    Spinner,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Gallery() {
    const [gallery, setGallery] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const fetchGallery = async () => {
        const response = await axios.get(
            'https://portfolio-backend-el.herokuapp.com/projects'
        );
        const data = await response.data.data;

        setGallery(() => data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchGallery();
    }, []);

    return (
        <Box align="center" pt={32}>
            <Text
                as="i"
                color={useColorModeValue('lPrimary', 'primary')}
                fontSize={'lg'}
            >
                My proyects
            </Text>
            <SimpleGrid
                columns={[1, 1, 2, 2]}
                pt={4}
                spacingX="10"
                spacingY="10"
                w={'max-content'}
            >
                {isLoading ? (
                    <Box
                        alignItems={'center'}
                        display={'flex'}
                        h={'80vh'}
                        justifyContent={'center'}
                    >
                        <Spinner
                            color="primary"
                            emptyColor="gray.200"
                            size="xl"
                            speed="0.8s"
                        />
                    </Box>
                ) : (
                    gallery.map((project) => (
                        <Link key={project.id} to={`/projects/${project.id}`}>
                            <Box
                                key={project.id}
                                _hover={{
                                    transform: 'translate(0px, -10px)',
                                    transitionDuration: '1s',
                                }}
                                as="button"
                                role="group"
                            >
                                <Image
                                    bgPosition="center"
                                    borderRadius={'10px'}
                                    boxSize={'400px'}
                                    fallbackSrc="https://via.placeholder.com/150"
                                    objectFit="cover"
                                    src={project.images[0]}
                                />
                                <Flex justify={'space-between'}>
                                    <Text as="i" color="gray.300" fontSize="xs">
                                        {project.title}
                                    </Text>
                                    <ArrowForwardIcon
                                        _groupHover={{
                                            color: 'rgba(180, 180, 180, 1)',
                                            transform: 'translatex(-12px)',
                                            transitionDuration: '1s',
                                        }}
                                        className="text"
                                        color="rgba(180, 180, 180, 0)"
                                    />
                                </Flex>
                            </Box>
                        </Link>
                    ))
                )}
            </SimpleGrid>
        </Box>
    );
}
