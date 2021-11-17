import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Link,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Box>Logo</Box>
            <Stack spacing={3} direction={"row"}>
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Proyects</Link>
            </Stack>  
            <Flex alignItems={'center'}>
                <Stack direction={'row'} spacing={7}>
                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon color="blue.200"/> : <SunIcon color="yellow.200"/>}
                    </Button>
                </Stack>
            </Flex>
        </Flex>
      </Box>
    </>
  );
}