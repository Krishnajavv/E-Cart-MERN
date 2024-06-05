import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeFromCart } from '../Redux/slice/cartSlice'



function Cart() {
  const cartArray=useSelector((state=>state.cartReducer))
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const[total,setTotal]=useState(0)

 const getCartTotal=()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))

    }else{
      setTotal(0)
    }

  }
  useEffect(()=>{
    getCartTotal()

  },[cartArray])

 const handleCart=()=>{
    dispatch(emptyCart())
    alert("order placed sucessfully...Thank u for purchasing")
    navigate('/')

  }
  return (
    <div className='ms-5' style={{marginTop:"50px"}}>
      

{

cartArray.length>0?
<div className="row">
  <div className="col-lg-8">
    <table className="table shadow rounded p-2 m-2">
    
      <thead>
        <tr>
         <th>#</th>
         <th>Product Name</th>
         <th>Product Image</th>
         <th>Price</th>
         <th>Action</th>
        </tr>
      </thead>
    
      <tbody>
          {
            cartArray.map((product,index)=>(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{product.title}</td>
                <td><img height={'150px'} width={'200px'} src={product.thumbnail} alt="" /></td>
                <td>{product.price}</td>
                <td><button className='btn ' onClick={()=>dispatch(removeFromCart(product.id))} ><i class="fa-solid fa-trash text-danger"></i></button></td>
              </tr>
            ))
            
          }
      </tbody>
      
      </table>
      </div>
    
    
  
    <div className="col-lg-3">
      <div className="border mt-3 rounded shadow p-2 w-100">
        <h1 className='text-primary p-2'>Cart Summery</h1>
        <h4>Total Products:<span className='fs-2 text-success'>{cartArray.length}</span></h4>
        <h5>Total:<span className='text-danger fw-bolder fs-2'>${total}</span></h5>
        <div className="d-grid">
          <button className='btn btn-success' onClick={handleCart}>Check Out</button>
        
      </div>
    </div>
  </div>
</div>
 


:<div style={{height:"100vh"}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
  <img height={'500px'} width={'500px'} src="https://th.bing.com/th/id/R.7390370dd3126af64d37c89d455d5884?rik=9nswOC%2fTjqEgWQ&riu=http%3a%2f%2fimages.clipartpanda.com%2fshopper-clipart-ncXBdxaRi.png&ehk=5Igmqx19BfjQIE%2buU2g2qu7%2fHGR%2b6yTTXOwJA47UoTs%3d&risl=&pid=ImgRaw&r=0" alt="" />
  <h3 className='text-center text-danger'>Cart is empty</h3>
  <Link style={{textDecoration:"none" }} className='btn btn-warning rounded' to={'/'}>Back to home</Link>

</div>
}




  
  </div>
)
}

export default Cart