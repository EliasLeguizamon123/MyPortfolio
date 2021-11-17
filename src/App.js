import './App.css';
import Header from './components/Header'
import { Box, Text } from '@chakra-ui/react'

function App() {
  return (
    <Box className="App">
      <Header />
      <Text>
        Hola mundo
      </Text>
    </Box>
  );
}

export default App;
