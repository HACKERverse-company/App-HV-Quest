import React, { useEffect } from 'react'
import axios from 'axios';
import { Api } from './Api/Api'

const HealthCheck = () => {

    const fetchBlogs = async () => {
        try {
            const response = await axios.get(`${Api}/health`);
            alert('ok')
        } catch (error) {
            console.error('Error fetching Blogs:', error);
        }
    };

    useEffect(() => {
        fetchBlogs();
        window.scrollTo(0, 0);
    }, []);


    return (

        <div>HealthCheck</div>
    )
}

export default HealthCheck