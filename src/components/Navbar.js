import { VStack, Flex, Button, useColorMode } from '@chakra-ui/react';
import { MdLightbulbOutline, MdLightbulb } from 'react-icons/md';
import { GiAmplitude } from 'react-icons/gi';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <VStack
            borderRight="1px solid"
            h="full"
            pos="fixed"
            style={{
                zIndex: 9999,
                backdropFilter: 'blur 2px',
                opacity: 0,
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
                <Button
                    _hover={{
                        transform: 'scale(1.8)',
                        color: 'white',
                    }}
                    size="xl"
                    variant="ghost"
                    onClick={toggleColorMode}
                >
                    {colorMode === 'light' ? (
                        <MdLightbulbOutline />
                    ) : (
                        <MdLightbulb />
                    )}
                </Button>
                <Button
                    _hover={{
                        transform: 'scale(1.8)',
                        color: 'white',
                    }}
                    variant="ghost"
                >
                    <GiAmplitude />
                </Button>
                <Button
                    _hover={{
                        transform: 'scale(1.8)',
                        color: 'white',
                    }}
                    variant="ghost"
                >
                    <GiAmplitude />
                </Button>
                <Button
                    _hover={{
                        transform: 'scale(1.8)',
                        color: 'white',
                    }}
                    variant="ghost"
                >
                    <GiAmplitude />
                </Button>
                <Button
                    _hover={{
                        transform: 'scale(1.8)',
                        color: 'white',
                    }}
                    variant="ghost"
                >
                    <GiAmplitude />
                </Button>
            </Flex>
        </VStack>
    );
};

export default Navbar;
