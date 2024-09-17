import React,{createContext,useState} from 'react'
export const BookingContext=createContext();
export const BookingProvider = ({children}) => {
    const[booking,setBooking]=useState([{venue1:'abc',slotcode1:1,cmobile:'8788989886'}])
  return (
   <BookingContext.Provider value={{booking,setBooking}}>
    {children}
   </BookingContext.Provider>
    
  )
}

