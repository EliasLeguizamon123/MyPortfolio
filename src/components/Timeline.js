import { Chrono } from 'react-chrono';
import { Box, Text, useColorModeValue, Spinner } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Timeline() {
    const [timeline, setTimeline] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchTimeline = async () => {
        const response = await axios.get(
            'https://eliasleguizamon.deno.dev/timeline'
        );
        const data = await response.data;

        console.log(data);
        setTimeline(() => data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchTimeline();
    }, []);

    return (
        <Box align="center" pt={32}>
            <Text
                as="i"
                color={useColorModeValue('lPrimary', 'primary')}
                fontSize={'lg'}
            >
                My Timeline
            </Text>
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
                <Chrono
                    hideControls="true"
                    items={timeline}
                    mode="VERTICAL_ALTERNATING"
                    theme={{
                        primary: '#75AD63',
                        secondary: '#EAF5E9',
                        cardBgColor: '#DCDBDB',
                        cardForeColor: 'black',
                        titleColor: '#75AD63',
                    }}
                />
            )}
        </Box>
    );
}
