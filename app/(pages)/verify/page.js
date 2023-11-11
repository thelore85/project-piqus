import React from 'react'

export default function page() {
  return (
    <section className="h-75 p-2 d-flex align-items-center justify-content-center " style={{ backgroundImage : 'url(/img/home/hero_bg.jpg)', backgroundSize : 'cover', backgroundPosition : 'center'}}>
      <div className='text-center p-5 bg-white rounded'>
    
        <h2 className="fs-2">Check your email!</h2>
        <p className="fs-6">Thanks for sign up.<br />Before start, go to your email inbox to validate the addres.</p>

      </div>
    </section>
  )
}
