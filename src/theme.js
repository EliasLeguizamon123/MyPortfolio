import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: 'JetBrains Mono, monospace',
        Text: 'Ubuntu, sans-serif',
    },
    colors: {
        primary: '#7FC2C2',
        secondary: '#E1774B',
        tertiary: '#F4DB60',
    },
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
});

// const dune = extendTheme({
//     colors: {
//         primary: '#7FC2C2',
//         secondary: '#E1774B',
//         tertiary: '#F4DB60',
//     },
// });

// const samurai = extendTheme({
//     colors: {
//         primary: '#000000',
//         secondary: '#989C94',
//         tertiary: '#C21515',
//     },
//     config: {
//         initialColorMode: 'dark',
//     },
// });

export default theme;
