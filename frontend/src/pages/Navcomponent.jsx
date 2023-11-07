
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from 'react-bootstrap'


import { useSelector } from 'react-redux';
import AxiosInstance from '../config/axiosinstance';

import Swal from 'sweetalert2'
import {  useNavigate } from 'react-router-dom';






function Navcomponent() {
 const navigate=useNavigate()
const {user}=useSelector((state)=>state.user)
  const handleLogout=()=>{
  
  
AxiosInstance.get(`/logout`).then((resp)=>{
  console.log(resp);
  if(resp.data.logout){
    Swal.fire({    
      text: 'logout successfully.',
      icon: 'success'
    }).then(()=>{
        localStorage.clear()
    navigate('/login')
   
   })
  }
})
  
}


  return (

      <Navbar expand="lg" style={{backgroundColor:'#D20000'}} >
     
      <Container>
      
        <Navbar.Brand href="/home"><h2 className='text-light'>Data Saver</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='text-light bg-light' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
    <Nav.Link href="/home" className='fw-bold text-light me-3'>Home</Nav.Link>
      <Nav.Link href="/showuploads" className='text-light '>show data</Nav.Link>
      <Nav.Link href="#" id="basic-nav-dropdown" className='text-light'>{user?`${user.firstName} ${user.lastName}`:` `}</Nav.Link>
          </Nav>
          <Button className="ms-4" style={{backgroundColor:'#D20000'}} onClick={handleLogout}>Log out</Button>
            
        </Navbar.Collapse>
      
        
      </Container>
    </Navbar>


      
     

   
    
  

  )
}

export default Navcomponent