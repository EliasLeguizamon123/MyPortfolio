import {
    HStack,
    useColorMode,
    Button,
    Box,
    Text,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { MdLightbulb, MdLightbulbOutline } from 'react-icons/md';
import { IoMdMailOpen } from 'react-icons/io';
import { motion } from 'framer-motion';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const textMotion = {
        rest: { x: -10 },
        hover: { x: 0 },
    };

    return (
        <HStack
            align={'center'}
            bgColor={useColorModeValue('lSecondary', 'primary')}
            justify={'space-evenly'}
            p={4}
            width={'100vw'}
        >
            <Box>
                <Text>{`Elías Leguizamón`}</Text>
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
            <Stack
                animate="rest"
                direction={'row'}
                initial="rest"
                whileHover="hover"
            >
                <motion.div
                    animate={{
                        opacity: 0,
                        y: -10,
                    }}
                    whileHover={{
                        opacity: 1,
                        y: 0,
                    }}
                >
                    <IoMdMailOpen h="1.125rem" w="1.125rem" />
                </motion.div>
                <motion.h4
                    fontSize={'lg'}
                    variants={textMotion}
                >{`Get in touch`}</motion.h4>
            </Stack>
        </HStack>
    );
};

export default Navbar;
