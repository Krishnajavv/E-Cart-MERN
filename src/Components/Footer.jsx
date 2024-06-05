import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <>
    <MDBFooter  className='text-center text-lg-start text-muted mt-5 bg-primary'>
     
     <section className='bg-primary mt-5'>
       <MDBContainer className='text-center text-md-start mt-5'>
         <MDBRow className='mt-3'>
           <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
             <h6 className='text-uppercase fw-bold mb-4 ' style={{color:'skyblue'}}>
               <MDBIcon color='white' icon='video' className='me-3 mt-5' />
                  E-Cart
             </h6>
             <p style={{color:'white'}}>
               Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
               amet, consectetur adipisicing elit.
             </p>
           </MDBCol>

           <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4 mt-5'>
             <h6 className='text-uppercase fw-bold mb-4 text-light'>Links</h6>
             <Link to={'/'} style={{color:'white',textDecoration:'none'}}>
             Landing Page</Link>
             <br></br>
             <Link to={'/whishlist'} style={{color:'white',textDecoration:'none'}}>
            WhishList </Link>
             <br />
             <Link to={'/cart'} style={{color:'white',textDecoration:'none'}}>
             Cart</Link>
             
           </MDBCol>

           <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4 mt-5'>
             <h6 className='text-uppercase fw-bold mb-4 text-light'>Guides</h6>
            

             <Link to={'/'} style={{color:'white',textDecoration:'none'}} >React</Link><br />
             <Link to={'/'} style={{color:'white',textDecoration:'none'}} >React Bootstrap</Link><br />
             <Link to={'/'} style={{color:'white',textDecoration:'none'}} >Bootswatch</Link>
             
           </MDBCol>

           <MDBCol md='2' lg='5' xl='3' className='mx-auto mb-md-0 mb-4 mt-5'>
             <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>
             <div className='d-flex'>
              <input type="text" className='form-control m-1' placeholder='Enter your Email ID' style={{backgroundColor:'White',color:'white',width:'150px'}} />
              <button className=' p-1 m-1' style={{backgroundColor:'yellow', border:'1px',height:'40px'}}>Subscribe</button>
               </div>
             <section className='d-flex justify-content-center justify-content-lg-between p-4 '>
               
              
      
       <div>
         <a href='' className='me-4 text-reset'>
           <MDBIcon color='white' fab icon='facebook-f' />
         </a>
         <a href='' className='me-4 text-reset'>
           <MDBIcon color='white' fab icon='twitter' />
         </a>
        
         <a href='' className='me-4 text-reset'>
           <MDBIcon color='white' fab icon='instagram' />
         </a>
         <a href='' className='me-4 text-reset'>
           <MDBIcon color='white' fab icon='linkedin' />
         </a>
       
       </div>
     </section>

           </MDBCol>
         </MDBRow>
       </MDBContainer>
     </section>

     <div className='text-center p-4 bg-primary text-light' >
       © 2021 Copyright:
       <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
         E-Cart.com
       </a>
     </div>
   </MDBFooter></>
  )
}

export default Footer