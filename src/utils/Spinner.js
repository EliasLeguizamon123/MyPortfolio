import GifLoader from 'react-gif-loader';
import { useColorModeValue, Box } from '@chakra-ui/react';

function Spinner() {
    return (
        <Box align="center" justify="center">
            <GifLoader
                imageSrc={useColorModeValue(
                    'https://giphy.com/gifs/online-account-hacker-11UhXwm8Ipd9C',
                    'https://giphy.com/gifs/code-AOSwwqVjNZlDO'
                )}
                isLoading={true}
                overlayBackground="rgba(0,0,0,0.5)"
            />
        </Box>
    );
}
export default Spinner;
