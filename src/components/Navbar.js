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
import { AiOutlineFolder } from 'react-icons/ai';
import { SiMinutemailer } from 'react-icons/si';
import { BiFace } from 'react-icons/bi';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <VStack
            bgColor={useColorModeValue('lSecondary', 'primary')}
            borderRight="1px solid"
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
                </Box>
                <Box alignItems={'center'}>
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
                </Box>
                <Box alignItems={'center'}>
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
                </Box>
                <Box alignItems={'center'}>
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
                </Box>
            </Flex>
        </VStack>
    );
};

export default Navbar;
