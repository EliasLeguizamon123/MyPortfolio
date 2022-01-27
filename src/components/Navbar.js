import {
    VStack,
    Flex,
    Button,
    useColorMode,
    Box,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { MdLightbulbOutline, MdLightbulb } from 'react-icons/md';
import { GiAura } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Navbar = ({ navlinks = [{ name: 'Skills', path: '/skills' }] }) => {
    const { colorMode, toggleColorMode } = useColorMode();

    let navLinks = navlinks.map((index, link) => (
        <Box key={index} alignItems={'center'}>
            <Link to={link.path}>
                <Button
                    _hover={{
                        transform: 'scale(1.2)',
                        color: 'white',
                    }}
                    colorScheme="lTitles"
                    size="xl"
                    variant="ghost"
                >
                    <GiAura />
                    <Text size="xs">{link.name}</Text>
                </Button>
            </Link>
        </Box>
    ));

    return (
        <VStack
            bgColor={useColorModeValue('lSecondary', 'primary')}
            borderRight="1px solid"
            display={['none', 'none', 'flex', 'flex']}
            h="full"
            pos="fixed"
            style={{
                zIndex: 9999,
            }}
            w={32}
        >
            <Flex
                alignItems={'center'}
                direction={'column'}
                h="full"
                justifyContent={'space-evenly'}
                m="12px"
            >
                {colorMode === 'light' ? (
                    <Box alignItems={'center'}>
                        {/* color mode */}

                        <Button
                            _hover={{
                                transform: 'scale(1.2)',
                                color: 'white',
                            }}
                            colorScheme="lTitles"
                            size="xl"
                            variant="ghost"
                            onClick={toggleColorMode}
                        >
                            <MdLightbulbOutline />
                            <Text size="xs">Dark</Text>
                        </Button>
                    </Box>
                ) : (
                    <Box alignItems={'center'}>
                        <Button
                            _hover={{
                                transform: 'scale(1.2)',
                                color: 'white',
                            }}
                            colorScheme="lTitles"
                            size="xl"
                            variant="ghost"
                            onClick={toggleColorMode}
                        >
                            <MdLightbulb />
                            <Text size="xs">Light</Text>
                        </Button>
                    </Box>
                )}
                {navLinks}
            </Flex>
        </VStack>
    );
};

export default Navbar;
