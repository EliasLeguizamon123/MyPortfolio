import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import { Box } from '@chakra-ui/react'

function App() {
  return (
    <Box className="App">
      <Main />
      <Header />
    </Box>
  );
}

export default App;
