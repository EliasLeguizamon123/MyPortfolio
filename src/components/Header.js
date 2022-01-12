import {
    Box,
    Flex,
    Button,
    useColorModeValue,
    Stack,
    useColorMode,
    Image,
    useMediaQuery,
    Text,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Header = () => {
    const nav = [
        { path: '/skills', label: 'Skills' },
        { path: '/formation', label: 'Formation' },
        { path: '/test', label: 'Test' },
    ];
    const [isMobile] = useMediaQuery('(max-width: 30em)');

    const { colorMode, toggleColorMode } = useColorMode();
    const logoImage =
        'https://avatars.githubusercontent.com/u/25516473?s=400&u=58049da37eaf5d050270ef502caacfb79c9f8dda&v=4';

    let navItems = nav.map((link, index) => (
        <Link key={index} to={link.path}>
            <Button
                color={colorMode === 'light' ? 'blueCake' : 'yellowCake'}
                variant="ghost"
            >
                {link.label}
            </Button>
        </Link>
    ));

    return (
        <>
            <Box bg={useColorModeValue('gray.50', 'gray.900')} px={4}>
                {isMobile ? (
                    <Flex
                        alignItems={'center'}
                        h={16}
                        justifyContent={'space-between'}
                    >
                        <Link to="/">
                            <Box>
                                <Image
                                    alt="logo"
                                    borderRadius="full"
                                    boxSize={'55px'}
                                    fallbackSrc="https://via.placeholder.com/150"
                                    src={logoImage}
                                />
                            </Box>
                        </Link>
                        <Stack direction={'row'} spacing={3}>
                            {navItems}
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? (
                                    <MoonIcon color="teal.200" />
                                ) : (
                                    <SunIcon color="orange.200" />
                                )}
                            </Button>
                        </Stack>
                    </Flex>
                ) : (
                    <Stack
                        align="center"
                        direction={'row'}
                        h={16}
                        justify="center"
                        spacing={6}
                    >
                        <Image
                            alt="logo"
                            borderRadius="full"
                            boxSize={'55px'}
                            fallbackSrc="https://via.placeholder.com/150"
                            src={logoImage}
                        />
                        <Text as="i" fontSize="xl">
                            Elías Leguizamón
                        </Text>
                        <Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? (
                                <MoonIcon color="green.200" />
                            ) : (
                                <SunIcon color="orange.200" />
                            )}
                        </Button>
                    </Stack>
                )}
            </Box>
        </>
    );
};

export default Header;
