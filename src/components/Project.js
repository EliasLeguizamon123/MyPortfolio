import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Text } from '@chakra-ui/react';

export default function Project() {
    const [project, setProject] = useState([]);
    let { id } = useParams();

    const getProject = async () => {
        const response = await axios.get(
            `https://portfolio-backend-el.herokuapp.com/projects/${id}`
        );
        const data = await response.data.data;

        setProject(() => data);
    };

    useEffect(() => {
        getProject();
    }, []);

    return <Text> {project} </Text>;
}
