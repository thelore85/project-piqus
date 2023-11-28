'use client'

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';


export default function ResetPasswordForm({ title, handleSubmit }){
    
  const [email, setEmail ] = useState('');

  return (
        <form className="bg-white p-3 rounded" onSubmit={(e) => handleSubmit(e, email) }>

          <h1 className="h2 text-center p-3 fw-bold">{title}</h1>

          <div className="form-floating mb-3">
            <input type="email" required className="form-control" id="floatingEmail" placeholder="name@example.com" onChange={(e)=>{ setEmail(e.target.value)}} value={email}/>
            <label htmlFor="floatingEmail">Email address</label>
          </div>

          <button className="btn btn-primary w-100 py-2" >Get New Password</button>

        </form>
  )
}
