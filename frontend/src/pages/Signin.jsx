import React from 'react'
import Form from '../components/Form.jsx'
import Qoute from '../components/Qoute.jsx'

const Signin = () => {
  return (
    <div className='grid md:grid-cols-2 h-screen  ' >
        <Form type={"signin"}/>
        <div className='hidden sm:block '>
        <Qoute/>
        </div>
    </div>
  )
}

export default Signin