import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: 'JetBrains Mono, monospace',
        Text: 'Ubuntu, sans-serif',
    },
    colors: {
        primary: '#75AD63',
        background: '#333333',

        lBackground: '#FFFFFF',
        lTitles: '#9E9A9A',
        lSecondary: '#EAF5E9',
        lPrimary: '#43853D',
    },
    config: {
        initialColorMode: 'dark',
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
