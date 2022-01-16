import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        primary: '#7FC2C2',
        secondary: '#E1774B',
        tertiary: '#F4DB60',
    },
    config: {
        initialColorMode: 'light',
    },
});

const samurai = extendTheme({
    colors: {
        primary: '#000000',
        secondary: '#989C94',
        tertiary: '#C21515',
    },
    config: {
        initialColorMode: 'dark',
    },
});

export default { theme, samurai };
