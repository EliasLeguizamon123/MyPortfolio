import { useColorModeValue, Box, Spinner } from '@chakra-ui/react';

function Loader() {
    return (
        <Box align="center" justify="center">
            <Spinner color={useColorModeValue('lPrimary', 'primary')} />
        </Box>
    );
}
export default Loader;
