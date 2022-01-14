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

export default theme;
