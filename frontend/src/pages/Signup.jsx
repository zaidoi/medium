import React from 'react'
import Qoute from '../components/Qoute'
import Form from '../components/Form'

function Signup() {
  return (
    <div className='grid md:grid-cols-2 h-screen  ' >
        <Form type={"signup"}/>
        <div className='hidden sm:block '>
        <Qoute/>
        </div>
    </div>
  )

}

export default Signup