import { Box, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
import {
    DiHeroku,
    DiJsBadge,
    DiMongodb,
    DiMysql,
    DiNodejsSmall,
    DiNpm,
    DiPython,
    DiReact,
    DiScrum,
    DiWindows,
    DiBootstrap,
    DiAngularSimple,
    DiIonic,
} from 'react-icons/di';
import {
    SiMocha,
    SiJest,
    SiChakraui,
    SiNetlify,
    SiPostman,
    SiPug,
    SiExpress,
    SiSequelize,
    SiDocker,
} from 'react-icons/si';
import { DiLinux, DiGit } from 'react-icons/di';
export default function Technologies() {
    return (
        <Box align="center" pt={12}>
            <Text
                as="i"
                color={useColorModeValue('lPrimary', 'primary')}
                fontSize={'lg'}
                pb="6"
            >
                Technologies i love to use
            </Text>
            <SimpleGrid
                columns={[3, 5, 5, 7]}
                pt={4}
                spacing={4}
                w={'max-content'}
            >
                <DiLinux
                    color={useColorModeValue('black', 'white')}
                    size={32}
                />
                <DiWindows
                    color={useColorModeValue('black', 'white')}
                    size={32}
                />
                <DiScrum
                    color={useColorModeValue('black', 'white')}
                    size={32}
                />
                <DiJsBadge
                    color={useColorModeValue('black', 'white')}
                    size={32}
                />
                <DiPython
                    color={useColorModeValue('black', 'white')}
                    size={32}
                />
                <DiNodejsSmall
                    color={useColorModeValue('black', 'white')}
                    size={32}
                />
                <DiReact
                    color={useColorModeValue('black', 'white')}
                    size={32}
                />
                <DiAngularSimple
                    color={useColorModeValue('black', 'white')}
                    size={32}
                />
                <DiNpm color={useColorModeValue('black', 'white')} size={32} />
                <DiGit color={useColorModeValue('black', 'white')} size={32} />
                <SiSequelize
                    color={useColorModeValue('black', 'white')}
                    size={32}
                />
                <DiMongodb
                    color={useColorModeValue('black', 'white')}
                    size={32}
                />
                <DiMysql
                    color={useColorModeValue('black', 'white')}
                    size={32}
                />
                <SiExpress
                    color={useColorModeValue('black', 'white')}
                    size={32}
                />
                <SiMocha
                    color={useColorModeValue('black', 'white')}
                    size={32}
                />
                <SiJest color={useColorModeValue('black', 'white')} size={32} />
                <SiChakraui
                    color={useColorModeValue('black', 'white')}
                    size={32}
                />
                <DiBootstrap
                    color={useColorModeValue('black', 'white')}
                    size={32}
                />
                <DiIonic
                    color={useColorModeValue('black', 'white')}
                    size={32}
                />
                <SiPug color={useColorModeValue('black', 'white')} size={32} />
                <DiHeroku
                    color={useColorModeValue('black', 'white')}
                    size={32}
                />
                <SiDocker
                    color={useColorModeValue('black', 'white')}
                    size={32}
                />
                <SiNetlify
                    color={useColorModeValue('black', 'white')}
                    size={32}
                />
                <SiPostman
                    color={useColorModeValue('black', 'white')}
                    size={32}
                />
            </SimpleGrid>
        </Box>
    );
}
