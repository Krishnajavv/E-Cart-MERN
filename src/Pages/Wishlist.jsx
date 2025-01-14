import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWhishlist } from '../Redux/slice/whishListSlice'
import {addToCart} from '../Redux/slice/cartSlice'



function Wishlist() {
  const whishListArray=useSelector((state=>state.whishListReducer))
  const dispatch=useDispatch()
  const handleWhishlistCart=(product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWhishlist(product.id))

  }
  return (
    <div>
       <Row className='ms-5' style={{marginTop:"50px"}}>

        {whishListArray?.length>0?whishListArray.map((product,index)=>(
        <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>

       <Card className='shadow rounded' style={{width:"20rem",height:"30rem"}}>
      <Card.Img height={"200px"} variant="top" src={product.thumbnail} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
         <p>{product.description.slice(0,50)}</p>
         <h5>${product.price}</h5>
        </Card.Text>
        <div className='d-flex justify-content-between'>
        <Button className='btn btn-light'onClick={()=>dispatch(removeFromWhishlist(product.id))}><i class="fa-solid fa-trash text-danger"></i></Button>
        <Button className='btn btn-light' onClick={()=>handleWhishlistCart(product)}><i class="fa-solid fa-cart-shopping text-warning "></i></Button>
        </div>
      </Card.Body>
    </Card>
    </Col>
        )):<div style={{height:"100vh"}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
          <img height={'500px'} width={'500px'} src="https://th.bing.com/th/id/R.7390370dd3126af64d37c89d455d5884?rik=9nswOC%2fTjqEgWQ&riu=http%3a%2f%2fimages.clipartpanda.com%2fshopper-clipart-ncXBdxaRi.png&ehk=5Igmqx19BfjQIE%2buU2g2qu7%2fHGR%2b6yTTXOwJA47UoTs%3d&risl=&pid=ImgRaw&r=0" alt="" />
          <h3 className='text-center text-danger'>Whish list is empty</h3>
          <Link style={{textDecoration:"none" }} className='btn btn-warning rounded' to={'/'}>Back to home</Link>

        </div>
}
    </Row>
    </div>
  )
}

export default Wishlist