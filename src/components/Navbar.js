import {
    VStack,
    Flex,
    Button,
    useColorMode,
    Box,
    Text,
    useColorModeValue,
    IconButton,
} from '@chakra-ui/react';
import { MdLightbulbOutline, MdLightbulb } from 'react-icons/md';
import { GiAura } from 'react-icons/gi';
import { AiOutlineFolder } from 'react-icons/ai';
import { SiMinutemailer } from 'react-icons/si';
import { BiFace } from 'react-icons/bi';
import { HamburgerIcon } from '@chakra-ui/icons';
import { CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [changeDisplay] = useState('none');

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

                <Box alignItems={'center'}>
                    {/* Skills */}
                    <Link to="/skills">
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
                            <Text size="xs">Skills</Text>
                        </Button>
                    </Link>
                </Box>
                <Box alignItems={'center'}>
                    <Link to="/projects">
                        {/* Projects */}
                        <Button
                            _hover={{
                                transform: 'scale(1.2)',
                                color: 'white',
                            }}
                            colorScheme="lTitles"
                            size="xl"
                            variant="ghost"
                        >
                            <AiOutlineFolder />
                            <Text size="xs">Projects</Text>
                        </Button>
                    </Link>
                </Box>
                <Box alignItems={'center'}>
                    <Link to="/about">
                        {/* About */}
                        <Button
                            _hover={{
                                transform: 'scale(1.2)',
                                color: 'white',
                            }}
                            colorScheme="lTitles"
                            size="xl"
                            variant="ghost"
                        >
                            <BiFace />
                            <Text size="xs">About</Text>
                        </Button>
                    </Link>
                </Box>
                <Box alignItems={'center'}>
                    <Link to="/contact">
                        {/* Contact */}
                        <Button
                            _hover={{
                                transform: 'scale(1.2)',
                                color: 'white',
                            }}
                            colorScheme="lTitles"
                            size="xl"
                            variant="ghost"
                        >
                            <SiMinutemailer />
                            <Text size="xs">Contact</Text>
                        </Button>
                    </Link>
                </Box>
            </Flex>
            <Flex>
                <IconButton
                    aria-label="Open Menu"
                    colorScheme={'lTitles'}
                    display={['flex', 'flex', 'none', 'none']}
                    icon={<HamburgerIcon />}
                    mr={2}
                    my={3}
                    size="lg"
                    onClick={() => changeDisplay('flex')}
                />
            </Flex>
            <Flex
                display={['flex', 'flex', 'none', 'none']}
                flexDir="column"
                h="100vh"
                left="0"
                overflowY="auto"
                pos="fixed"
                top="0"
                w="100vw"
                zIndex={20}
            >
                <Flex justify="flex-end">
                    <IconButton
                        aria-label="Close Menu"
                        icon={<CloseIcon />}
                        mr={3}
                        mt={3}
                        size="md"
                        onClick={() => changeDisplay('none')}
                    />
                </Flex>
                <Flex
                    align="center"
                    flexDir="column"
                    onClick={() => changeDisplay('none')}
                />
            </Flex>
        </VStack>
    );
};

export default Navbar;
