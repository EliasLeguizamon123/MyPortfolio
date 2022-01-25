import { Flex, Heading, useColorModeValue, Text, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { GiLightSabers } from 'react-icons/gi';

export default function Home() {
    return (
        <Flex align="center" h={'90vh'} justify="center" pt={12} w={'100vw'}>
            <Box align="center" h="90%" w="80%">
                <Heading
                    color={useColorModeValue('lPrimary', 'primary')}
                    fontSize="2xl"
                >
                    Hello there!, Im Elias Leguizamon
                </Heading>
                <Text
                    as="i"
                    className="typingTitle"
                    color={useColorModeValue('lPrimary', 'primary')}
                    fontSize={'lg'}
                >
                    {`<Fullstack Developer />`}
                </Text>
                <Box mt="32">
                    <motion.button
                        drag
                        animate={{ scale: [1, 3], opacity: [0, 1] }}
                        dragConstraints={{
                            left: 40,
                            right: 40,
                            top: 5,
                            bottom: 5,
                        }}
                        dragElastic={0.5}
                        transition={{ duration: 1 }}
                        whileFocus={{ scale: 3.5 }}
                        onClick={() => alert('This function is not ready yet')}
                    >
                        <GiLightSabers size={80} />
                    </motion.button>
                </Box>
            </Box>
        </Flex>
    );
}
