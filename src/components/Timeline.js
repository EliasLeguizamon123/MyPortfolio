import { Chrono } from 'react-chrono';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';

export default function Timeline() {
    const items = [
        {
            title: 'May 1940',
            cardTitle: 'Dunkirk',
            url: 'http://www.history.com',
            cardSubtitle:
                'Men of the British Expeditionary Force (BEF) wade out to..',
            cardDetailedText:
                'Men of the British Expeditionary Force (BEF) wade out to..',
        },
        {
            title: 'May 1950',
            cardTitle: 'Dunkirk',
            url: 'http://www.history.com',
            cardSubtitle:
                'Men of the British Expeditionary Force (BEF) wade out to..',
            cardDetailedText:
                'Men of the British Expeditionary Force (BEF) wade out to..',
        },
        {
            title: 'May 1960',
            cardTitle: 'Dunkirk',
            url: 'http://www.history.com',
            cardSubtitle:
                'Men of the British Expeditionary Force (BEF) wade out to..',
            cardDetailedText:
                'Men of the British Expeditionary Force (BEF) wade out to..',
        },
    ];

    return (
        <Box align="center" pt={32}>
            <Text
                as="i"
                color={useColorModeValue('lPrimary', 'primary')}
                fontSize={'lg'}
            >
                My Timeline
            </Text>
            <Chrono
                hideControls="true"
                items={items}
                mode="VERTICAL_ALTERNATING"
                slideShow="true"
                theme={{
                    primary: '#75AD63',
                    secondary: '#EAF5E9',
                    cardBgColor: '#DCDBDB',
                    cardForeColor: 'black',
                    titleColor: '#75AD63',
                }}
            />
        </Box>
    );
}
