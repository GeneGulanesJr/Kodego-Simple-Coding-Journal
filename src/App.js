import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Homepage from './Pages/Homepage';
import AddTodo from './Pages/AddTodo';
import Navbar from './Components/Navbar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Navbar />
        <AddTodo />
       <Homepage />
      </Box>
    </ChakraProvider>
  );
}

export default App;
