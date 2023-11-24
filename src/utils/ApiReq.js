import axios from 'axios';

const baseURL = "https://website4you.co.in/tecsense/api/v1/"; // Replace with your API's base URL

const axiosInstance = axios.create({
    baseURL,
});

export const fetchData = async (endpoint) => {
    try {
        const response = await axiosInstance.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const postData = async (endpoint, data) => {
    try {
        const response = await axiosInstance.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};