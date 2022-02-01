import './App.css';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import Router from './routes/Router';

function App() {
    return (
        <Flex
            align="center"
            bgColor={useColorModeValue('lBackground', 'background')}
            direction="column"
            justify="center"
            w={'full'}
        >
            <Router />
        </Flex>
    );
}
export default App;
