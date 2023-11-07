import axios from 'axios'
import {BASE_URL} from '../constants'
import Swal from 'sweetalert2'
import { redirect } from 'react-router-dom'
const AxiosInstance=axios.create({
    baseURL:BASE_URL
})

AxiosInstance.interceptors.request.use(function(config){
    const token=localStorage.getItem('token')
config.headers['Authorization']="Bearer " +token
config.headers['Access-control-Allow-Origin']='*'
return config
})
// Add a 401 response interceptor
AxiosInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (401 === error.response.status) {
       redirect('/')
   
    } else {
        return Promise.reject(error);
    }
});
export default AxiosInstance