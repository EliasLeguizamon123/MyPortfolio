import './App.css';
import { Box, useColorModeValue } from '@chakra-ui/react';
import Router from './router/Router';

function App() {
    return (
        <Box
            bgColor={useColorModeValue('lBackground', 'background')}
            w={'100vw'}
        >
            <Router />
        </Box>
    );
}
export default App;
