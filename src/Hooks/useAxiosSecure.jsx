
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';




const useAxiosSecure = () => {
  const navigate = useNavigate();
  const {logOut } = useContext(AuthContext)

  const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000', 
  });


  useEffect(() => {
    axiosSecure .interceptors.request.use((config) => {
      const token = localStorage.getItem('access-token');
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });

    axiosSecure .interceptors.response.use(
      (response) => response,
     async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403 )) 
        {
         
           await logOut()
           navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [ logOut, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;

