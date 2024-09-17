"use client"
import React from 'react'

type Props = {}

const Button = (props: Props) => {
    const  ahandler=()=>{
        alert('hi')
            }
  return (
    <div>
        <button className='btn bg-cyan-300' onClick={ahandler}>add</button><br/>
    </div>
  )
}

export default button1