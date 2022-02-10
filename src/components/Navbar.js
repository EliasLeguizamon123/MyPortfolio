import {
    HStack,
    useColorMode,
    Button,
    Box,
    Text,
    useColorModeValue,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MdLightbulb, MdLightbulbOutline } from 'react-icons/md';
import { RiMenu4Fill } from 'react-icons/ri';
import { BsArrowBarLeft } from 'react-icons/bs';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box
            style={{
                position: 'sticky',
            }}
            w="full"
        >
            <HStack
                align={'center'}
                bgColor={useColorModeValue('lSecondary', 'primary')}
                display={['none', 'none', 'flex']}
                justify={'space-evenly'}
                p={4}
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
            <Box display={['flex', 'flex', 'none']} pl="12" pt="12">
                <Menu alignItems="center">
                    <MenuButton as="button" variant="ghost">
                        <RiMenu4Fill size="24" />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                            {colorMode === 'light' ? (
                                <Button
                                    _hover={{
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
                        </MenuItem>
                        <MenuItem>
                            <Link to="/">
                                <Button
                                    _hover={{
                                        color: 'black',
                                    }}
                                    color="lTitles"
                                    size="xl"
                                    variant="ghost"
                                >
                                    <BsArrowBarLeft />
                                    <Text as="i">Elías Leguizamón</Text>
                                </Button>
                            </Link>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </Box>
    );
};

export default Navbar;
