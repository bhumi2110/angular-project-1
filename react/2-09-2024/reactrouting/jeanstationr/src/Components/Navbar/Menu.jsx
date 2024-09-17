import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Menu.css'
const Menu = () => {
    const navigate=useNavigate()
   const loginHandler=()=>{
        navigate('/Login')
    }
    const RegisterHandler=()=>{
        navigate('/Register')
    }
    const ProductHandler=()=>{
        navigate('/Show-Products')
    }
  return (
    <div>
        <h1>STAY STYLISH WITH LATEST STYLES</h1>
        <ol>
            <li><Link to ='/Show-Products'>
                <div onClick={ProductHandler}>products</div> </Link></li>
            <li><Link to ='/Login'>
                <div onClick={loginHandler}>login</div></Link></li>
            <li><Link to ='/Register'>
                <div onClick={RegisterHandler}>Register</div></Link></li>
        </ol>
    </div>
  )
}

export default Menu