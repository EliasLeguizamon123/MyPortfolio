import {
    VStack,
    Flex,
    Button,
    useColorMode,
    Box,
    Text,
} from '@chakra-ui/react';
import { MdLightbulbOutline, MdLightbulb } from 'react-icons/md';
import { GiAmplitude, GiAura, GiChecklist } from 'react-icons/gi';
import { FaProjectDiagram } from 'react-icons/fa';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <VStack
            bg={'tertiary'}
            h="full"
            pos="fixed"
            style={{
                zIndex: 9999,
            }}
            w={20}
        >
            <Flex
                alignItems={'center'}
                direction={'column'}
                h="full"
                justifyContent={'space-evenly'}
                m="12px"
            >
                {colorMode === 'light' ? (
                    <Box>
                        {/* color mode */}

                        <Button
                            _hover={{
                                transform: 'scale(1.8)',
                                color: 'white',
                            }}
                            size="xl"
                            variant="ghost"
                            onClick={toggleColorMode}
                        >
                            <MdLightbulbOutline />
                        </Button>
                        <Text size="xs">Dark</Text>
                    </Box>
                ) : (
                    <Box>
                        <Button
                            _hover={{
                                transform: 'scale(1.8)',
                                color: 'white',
                            }}
                            size="xl"
                            variant="ghost"
                            onClick={toggleColorMode}
                        >
                            <MdLightbulb />
                        </Button>
                        <Text size="xs">Light</Text>
                    </Box>
                )}

                <Box>
                    {/* Skills */}
                    <Button
                        _hover={{
                            transform: 'scale(1.8)',
                            color: 'white',
                        }}
                        size="xl"
                        variant="ghost"
                    >
                        <GiAura />
                    </Button>
                    <Text size="xs">Skills</Text>
                </Box>
                <Box>
                    {/* Projects */}
                    <Button
                        _hover={{
                            transform: 'scale(1.8)',
                            color: 'white',
                        }}
                        size="xl"
                        variant="ghost"
                    >
                        <FaProjectDiagram />
                    </Button>
                    <Text size="xs">Projects</Text>
                </Box>
                <Box>
                    {/* About */}
                    <Button
                        _hover={{
                            transform: 'scale(1.8)',
                            color: 'white',
                        }}
                        size="xl"
                        variant="ghost"
                    >
                        <GiAmplitude />
                    </Button>
                    <Text size="xs">About</Text>
                </Box>
                <Box>
                    {/* Contact */}
                    <Button
                        _hover={{
                            transform: 'scale(1.8)',
                            color: 'white',
                        }}
                        size="xl"
                        variant="ghost"
                    >
                        <GiChecklist />
                    </Button>
                    <Text size="xs">Contact</Text>
                </Box>
            </Flex>
        </VStack>
    );
};

export default Navbar;
