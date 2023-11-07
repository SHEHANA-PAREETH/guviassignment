import React, { useEffect, useState } from 'react'
import {FloatingLabel,Button,Form,Container} from 'react-bootstrap'

import Swal from 'sweetalert2'

import {useNavigate} from 'react-router-dom'
import AxiosInstance from '../config/axiosinstance'
import Navcomponent from './Navcomponent'

function Home() {
    useEffect(() => {
        let isAuth = JSON.parse(localStorage.getItem('user'));
        if( isAuth == null) {
            navigate("/login");
        }
        
        
       
    }, []);
     const [imageurl,setImageurl]=useState()
        const[files,setFile]=useState()
      const navigate=useNavigate()
      const[error, seterror]=useState(false)
        const [userData,setUserData]=useState({
          name:'',
          age:"",
          dob:'',
        city:'',
        address:'',
        mobileno:'',
          village:'',
          qualification:"",
          occupation:'',

        })
        useEffect(()=>{
            console.log(userData);
            console.log(files);
                 },[userData])

               
          const onSelectFile = (event) => {
        
            setFile(event.target.files[0]);
          }
    
          const handleInputChange=(e)=>{
            const {name,value}=e.target
            setUserData((prevFormData) => 
            ({ ...prevFormData, [name]:value}))
           }
      
          
           
      const handleSubmit= async (e)=>{
            
        e.preventDefault()
        const isEmpty = Object.values(userData).some(x => x === null || x === '')
        console.log(isEmpty);
        if(isEmpty){
console.log('all fields are required');
seterror(true)
setTimeout(()=>{
    seterror(false)
},2000)
        }
        else{
            const formData = new FormData()
            formData.append('profilepic',files)
              
            for ( var key in userData ) {
              formData.append(key, userData[key]);
          }
              
              const result = await AxiosInstance.post('/user/uploaddata', formData,
               { headers: {'Content-Type': 'multipart/form-data'}})
              console.log(result.data)
              if(result.data.message){
             
                Swal.fire({  
                  text: 'Register successfully.',
                  icon: 'success'
                }).then(
                  navigate('/showuploads')
                )
              }
              else{
                Swal.fire({  
                   
                  text: 'something went wrong ',
                
                })
              }
        }
         
          }
 return(
 <>

  
  
    <Navcomponent/>
    <h3 className='mt-5'>upload the user details</h3>
        <Form onSubmit={handleSubmit} className='w-50 mx-auto my-5 p-5 shadow-lg' style={{ border: '1px solid grey'}} > 
   <Form.Group className="mb-3 " >
     <Form.Label className=''>name</Form.Label>
     <Form.Control type="text"  name='name' value={userData.name} onChange={(e)=>handleInputChange(e)} />

   </Form.Group>
   <Form.Group className="mb-3 " >
     <Form.Label className=''>age</Form.Label>
     <Form.Control type="number" name='age' value={userData.age} onChange={(e)=>handleInputChange(e)} />

   </Form.Group>
   <Form.Group className="mb-3 " >
     <Form.Label className=''>DOB</Form.Label>
     <Form.Control type="date"  name='dob' value={userData.dob} onChange={(e)=>handleInputChange(e)} />

   </Form.Group>
   <Form.Group className="mb-3 " >
     <Form.Label className=''>mobileno</Form.Label>
     <Form.Control type="number"  name='mobileno' value={userData.mobileno} onChange={(e)=>handleInputChange(e)} />

   </Form.Group>
   
   <Form.Group className="mb-3 " >
     <Form.Label className=''>city</Form.Label>
     <Form.Control type="text"  name='city' value={userData.city} onChange={(e)=>handleInputChange(e)} />

   </Form.Group>
   <Form.Group className="mb-3 " >
     <Form.Label className=''>village</Form.Label>
     <Form.Control type="text"  name='village' value={userData.village} onChange={(e)=>handleInputChange(e)} />

   </Form.Group>
   
   <Form.Group className="mb-3 " >
     <Form.Label className=''>qualification</Form.Label>
     <Form.Control type="text"  name='qualification' value={userData.qualification} onChange={(e)=>handleInputChange(e)} />
   </Form.Group>
   <Form.Group className="mb-3 " >
     <Form.Label className=''>occupation</Form.Label>
     <Form.Control type="text" name='occupation' value={userData.occupation} onChange={(e)=>handleInputChange(e)} />
   </Form.Group>
   <FloatingLabel
        controlId="floatingTextarea"
        label="address"
        className="mb-3"
      >
      <Form.Control name="address" as="textarea" value={userData.address} onChange={(e)=>handleInputChange(e)}  />
      </FloatingLabel>
   
      <Form.Group>
     
        <Form.Control
          type="file"
          name="profilepic"
          onChange={onSelectFile}
          
          
          accept="image/png , image/jpeg, image/webp" className="my-3"
        />
     
    </Form.Group>

    <Form.Group>
    

      
        {files?
        <>
       
            <div className="me-2">
                <img src={URL.createObjectURL(files)} height="100" width="150px" alt="upload" />
                
              </div>
        
        </>
        
        :''}
        
    </Form.Group>
    {error ?<p className='text-danger'>all fields are required</p>:''}
   <Button  variant=" w-25 my-3 " className='mx-auto text-light' type="submit" style={{ backgroundColor: '#0D4A42'}}>
     Save
   </Button>

 </Form>

 </>

 )
    
}


export default Home