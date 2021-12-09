import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Header = ({
  nav = [{path:'/skills', label:'Skills'}]
  }) => {    
  const { colorMode, toggleColorMode } = useColorMode();
  
  let navItems = nav.map((link, index) => (
        <Link
          key={index}
          to={link.path}>
          <Button variant="outline" color={colorMode === 'light' ? "blueCake" : "yellowCake"}>{link.label}</Button>
        </Link>
  ))  
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Link to="/">
            <Box>Logo</Box>
          </Link>
            <Stack spacing={3} direction={"row"}>
              {navItems}
            </Stack>  
            <Flex alignItems={'center'}>
                <Stack direction={'row'} spacing={7}>
                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? 
                          <MoonIcon color='blue.200'/> : 
                          <SunIcon color='yellow.200'/>}
                    </Button>
                </Stack>
            </Flex>
        </Flex>
      </Box>
    </>
  );
}
export default Header;