import React, { useEffect, useState } from 'react'
import AxiosInstance from '../config/axiosinstance'
import { BASE_URL } from '../constants'
import './ViewuseData.css'
import Button from 'react-bootstrap/Button';
import Navcomponent from './Navcomponent';
import { useNavigate } from 'react-router-dom';
function ViewuseData() {
const navigate=useNavigate()
  const [userdata,setdata]=useState()
    useEffect(()=>{
    
        let isAuth = JSON.parse(localStorage.getItem('user'));
        if( isAuth == null) {
            navigate("/login");
        }
        else{
          navigate("/showuploads");
        }
       
  
AxiosInstance.get('user/getData').then((res)=>{
    console.log(res.data.data);
    setdata(res?.data?.data)
})
    },[])
  return (
  <>
   <Navcomponent/>
   <div className=' d-flex  justify-content-center align-items-center ' style={{height:'100vh'}}>
  <div className='outer-box '>
  <img src={`${BASE_URL}/uploads/${userdata?.profilepic}`} alt="image" className='' style={{width:'100%', margin:'auto',height:'170px'}}/>
  <h2 className='my-5'>{`${userdata?.name}`}</h2>
  <p>Qualification: {`${userdata?.qualification}`}</p>
  <p>Age: {`${userdata?.age}`}</p>
  <p>DOB:{`${userdata?.dob}`.split('T')[0]} </p>
  <p>Occupation: {`${userdata?.occupation}`}</p>
  <p>Address: {`${userdata?.adress}`}</p>
  <p>Village:{`${userdata?.village}`}</p>
  <p>city: {`${userdata?.city}`}</p>
  <p>Mobileno: {`${userdata?.mobileno}`}</p>
  
 
  <Button className='my-3 btn-danger'>Contact</Button>
  </div>
  </div>
  </>

  

  
  )
}

export default ViewuseData