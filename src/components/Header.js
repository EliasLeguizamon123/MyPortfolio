import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Image, 
  useMediaQuery,
  Text,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Header = ({ nav = [{path:'/skills', label:'Skills'}] }) => {    
  const [isMobile] = useMediaQuery('(max-width: 30em)');

  const { colorMode, toggleColorMode } = useColorMode();
  const logoImage = "https://avatars.githubusercontent.com/u/25516473?s=400&u=58049da37eaf5d050270ef502caacfb79c9f8dda&v=4"
  
  let navItems = nav.map((link, index) => (
        <Link
          key={index}
          to={link.path}>
          <Button variant="ghost" color={colorMode === 'light' ? "blueCake" : "yellowCake"}>{link.label}</Button>
        </Link>
  ))  
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        {isMobile ? 
         <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
         <Link to="/">
           <Box>
             <Image 
               src={logoImage}
               alt="logo"  
               borderRadius='full' 
               fallbackSrc='https://via.placeholder.com/150'
               boxSize={'55px'}
             />
           </Box>
         </Link>
           <Stack spacing={3} direction={"row"}>
             {navItems}
             <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? 
                  <MoonIcon color='green.200'/> : 
                  <SunIcon color='orange.200'/>
                }
              </Button>
           </Stack>  
       </Flex>
       :
        <Stack direction={"row"} align="center" justify="center" h={16} spacing={6}>
          <Image 
            src={logoImage}
            alt="logo"  
            borderRadius='full' 
            fallbackSrc='https://via.placeholder.com/150'
            boxSize={'55px'}
          />
            <Text fontSize="xl" as="i">Elías Leguizamón</Text>
            <Button onClick={toggleColorMode} >
                {colorMode === 'light' ? 
                  <MoonIcon color='green.200'/> : 
                  <SunIcon color='orange.200'/>
                }
              </Button>
        </Stack>
        // null
      }
      </Box>
    </>
  );
}
export default Header;