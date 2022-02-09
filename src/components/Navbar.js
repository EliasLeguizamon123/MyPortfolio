import {
    HStack,
    useColorMode,
    Button,
    Box,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MdLightbulb, MdLightbulbOutline } from 'react-icons/md';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <HStack
            align={'center'}
            bgColor={useColorModeValue('lSecondary', 'primary')}
            display={['none', 'none', 'flex']}
            justify={'space-evenly'}
            p={4}
            w="full"
        >
            <Box>
                <Link to="/">
                    <Text
                        _hover={{
                            textDecoration: 'underline',
                            color: 'black',
                            transitionDuration: '0.5s',
                        }}
                        as="i"
                    >{`Elías Leguizamón`}</Text>
                </Link>
            </Box>
            <Box alignItems={'center'}>
                {colorMode === 'light' ? (
                    <Button
                        _hover={{
                            transform: 'scale(1.2)',
                            color: 'black',
                        }}
                        color="lTitles"
                        size="xl"
                        variant="ghost"
                        onClick={toggleColorMode}
                    >
                        <MdLightbulbOutline />
                        <Text size="xs">Dark</Text>
                    </Button>
                ) : (
                    <Button
                        _hover={{
                            transform: 'scale(1.2)',
                            color: 'black',
                        }}
                        color="lSecondary"
                        size="xl"
                        variant="ghost"
                        onClick={toggleColorMode}
                    >
                        <MdLightbulb />
                        <Text size="xs">Light</Text>
                    </Button>
                )}
            </Box>
        </HStack>
    );
};

export default Navbar;
