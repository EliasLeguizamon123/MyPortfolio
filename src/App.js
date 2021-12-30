import './App.css';
// import Routers from './router/Router';
import { Box } from '@chakra-ui/react';
import React from 'react';
import HorizontalScroll from "react-scroll-horizontal";

const dummys = [
  {id: 1, name: 'Hello 1'},
  {id: 2, name: 'Hello 2'},
  {id: 3, name: 'Hello 3'},
  {id: 4, name: 'Hello 4'},
]

const seccions = dummys.map((dummy) => (
  <Box className="main bg1" key={dummy.id}>
        <h1>Hello {dummy.name}</h1>
    </Box>
))


function App() {
  return (
    <Box className="fullPage">
      <HorizontalScroll>
        {seccions}
      </HorizontalScroll>
    </Box>
  )
}
export default App;
