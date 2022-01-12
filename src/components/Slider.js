import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { Text } from '@chakra-ui/react';

const Slider = () => {
    return (
        <ScrollMenu>
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
            <Text>4</Text>
            <Text>5</Text>
        </ScrollMenu>
    );
};

export default Slider;
