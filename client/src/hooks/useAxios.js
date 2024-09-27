import {useEffect, useState} from 'react';
import axios from "axios";

const UseAxios = (endpoint, options) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState([]);
    const [error, setError] = useState([]);

    const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios(`https://events-registration-server.vercel.app/${endpoint}`, options);
                setData(response.data);
            } catch (error) {
                setError(error.message)
                console.error(error.message);
            } finally {
                setLoading(false)
            }
        };
    return { data, loading, error, fetchData };
};

export default UseAxios;