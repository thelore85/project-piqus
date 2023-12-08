'use client'

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

export default function FormAuth({ title, handleSubmit }){
    
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
  const [viewPassword, setViewPassword] = useState(false)
   
  return (
        <form className="bg-white p-3 rounded" onSubmit={(e) => handleSubmit(e, email, password) }>

          <h1 className="h2 text-center p-3 fw-bold">{title}</h1>

          <div className="form-floating mb-3">
            <input type="email" required className="form-control" id="floatingEmail" placeholder="name@example.com" onChange={(e)=>{ setEmail(e.target.value)}} value={email}/>
            <label htmlFor="floatingEmail">Email</label>
          </div>

          <div className="input-group mb-3">
            <div className="form-floating ">
              <input type={viewPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} 
              className="form-control" id="floatingInputGroup1" placeholder="Password" />
              <label htmlFor="floatingInputGroup1">Password</label>
            </div>
            <span className="input-group-text" onClick={() => {setViewPassword(!viewPassword)}}>
              {viewPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
            </span>
          </div>

          <button className="btn btn-primary w-100 py-2" >Continua</button>

        </form>
  )
}
