'use client'
import React, {useState} from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

// components
import Link from 'next/link'

export default function PageResetPassword() {
  const [email, setEmail ] = useState('');
  const [ request, setRequest] = useState('')

  const handleSubmit = async ( e, email ) => {
    e.preventDefault()

    // send reset email to user
    const supabase = createClientComponentClient()

    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'https://piqus.it/new-password',
    })


    if(data){setRequest(true)}
    if(error){ console.log('reset psw error: ', data); setRequest(false)}
  }

  return (
    
    <section className="dark-bg w-100 h-75 py-3 d-flex justify-content-center align-items-center" style={{ backgroundImage : 'url(/img/home/net-bg-4.jpg)', backgroundSize : 'cover', backgroundPosition : 'center'}}>
      <div className="container" style={{'maxWidth':'500px'}}>

      <form className="bg-white p-3 rounded" onSubmit={(e) => handleSubmit(e, email)} >  
        <h1 className="h2 text-center p-3 fw-bold">Reset Password</h1>
        <div className="form-floating mb-3">
          <input type="email" required className="form-control" id="floatingEmail" placeholder="name@example.com" onChange={(e)=>{ setEmail(e.target.value)}} value={email}/>
          <label htmlFor="floatingEmail">Email address</label>
        </div>
        <button className="btn btn-primary w-100 py-2" >Get New Password</button>
      </form>

      { request === '' ? null : 
      ( request ?   
        (<div className="p-3 mt-4 rounded bg-success-subtle text-success">
          <p className="mb-0 small">Check your email and follow the link</p>
        </div>) :

        (<div className="p-3 mt-4 rounded bg-danger-subtle text-danger">
          <p className="mb-0 small">Impossible to send the request. Check your email and retry</p>
        </div>)
      )}



      <div className="p-3 mt-4 rounded bg-white text-secondary">
        <p className="mb-0 small">Go back to <Link href="/login" className="text-primary">Login</Link></p>
      </div>

      </div>
    </section>

  )
}
