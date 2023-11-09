import Whatsap from '@/app/Components/CallToAction/Whatsap'
import React from 'react'

export default function projectSubmitted() {
  return (
    <div className="h-75 d-flex justify-content-center align-items-center">
      <div className="p-5 bg-white rouded text-secondary text-center">
         <h1> Request Sent!</h1>
         <p>Your brief will be reviewed and soon I&apos;ll be in touch with you. </p>
         <div className="p-4">
            <p className="h5">Need more support?</p>
            <Whatsap size={'sm'} />
         </div>
      </div>
    </div>
  )
}
