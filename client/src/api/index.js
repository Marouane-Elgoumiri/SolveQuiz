import axios from 'axios';

const axiosInstance = axios.create();

// Set the Authorization header separately after creating the instance
axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

export default axiosInstance;
