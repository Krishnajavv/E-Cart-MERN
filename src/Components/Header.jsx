import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



function Header() {

  const whishlist = useSelector((state=>state.whishListReducer))
  
  const cart = useSelector((state=>state.cartReducer))

  return (
    <>
     

     
      <Navbar expand="lg" className="bg-primary position-fixed top-0 w-100" style={{zIndex:1}}>
      <Container>
        <Navbar.Brand>

        <Link to={'/'} style={{color:"white",fontWeight:"bold",textDecoration:"none"}} ><i class="fa-solid fa-truck-fast fa-bounce"></i>
           E-Cart</Link>
            


        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-light">
            <Nav.Link><Link to={'/whishlist'} style={{color:"white",fontWeight:"bold",textDecoration:"none"}} >
              <i class="fa-solid fa-heart text-danger"></i>
           Whishlist
           <Badge bg='success rounded ms-2'>{whishlist.length}</Badge></Link>
            </Nav.Link>
            <Nav.Link ><Link to={'/cart'} style={{color:"white",fontWeight:"bold",textDecoration:"none"}} >
              <i class="fa-solid fa-cart-shopping text-warning "></i>
              Cart<Badge bg='success rounded ms-2'>{cart.length}</Badge></Link>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header