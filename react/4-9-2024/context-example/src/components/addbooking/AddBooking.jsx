import React, { useContext,useState } from 'react'
import { BookingContext } from '../../context/BookingContext'

const AddBooking = () => {
    const ibookcontext=useContext(BookingContext)
    const{booking,setBooking}=ibookcontext
    const[venue,setVenue]=useState();
    const[slot,setSlot]=useState();
    const[mobile,setMobile]=useState();
    const saveHandler=()=>{
        setBooking([...booking,{venue1:venue,slotcode1:slot,cmobile:mobile}])
    }
  return (
    <div>AddBooking<br/>
       venue name  <input type="text" value={venue} onChange={(e)=>{setVenue(e.target.value)}}/><br />
       slot code  <input type="text" value={slot} onChange={(e)=>{setSlot(e.target.value)}}/><br/>
        cmobile<input type="text" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} /><br/>
    <button onClick={saveHandler}></button><br/>
    </div>
  )
}
export default AddBooking