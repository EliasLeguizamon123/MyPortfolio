import './App.css';
import { Box } from '@chakra-ui/react';
import Router from './router/Router';

function App() {
    return (
        <Box bg="useColorModeValue('gray.50', 'gray.900')">
            <Router />
        </Box>
    );
}
export default App;
