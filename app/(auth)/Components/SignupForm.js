'use client'

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

export default function SignupForm({ title, handleSubmit }){
    
  const [name, setName ] = useState('');
  const [phone, setPhone ] = useState('');
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
  const [viewPassword, setViewPassword] = useState(false)
   
  return (
        <form className="bg-white p-3 rounded" onSubmit={(e) => handleSubmit(e, name, phone, email, password) }>

          <h1 className="h2 text-center p-3 fw-bold">{title}</h1>

          <div className="form-floating mb-3">
            <input type="text" required className="form-control" id="userName" placeholder="Your Name here" onChange={(e)=>{ setName(e.target.value)}} value={name}/>
            <label htmlFor="userName">Your Brand or Personal name</label>
          </div>

          <div className="form-floating mb-3">
            <input type="number" required className="form-control" id="phoneNumber" placeholder="Phone number" onChange={(e)=>{ setPhone(e.target.value)}} value={phone}/>
            <label htmlFor="phoneNumber">Phone Number</label>
          </div>

          <div className="form-floating mb-3">
            <input type="email" required className="form-control" id="floatingEmail" placeholder="name@example.com" onChange={(e)=>{ setEmail(e.target.value)}} value={email}/>
            <label htmlFor="floatingEmail">Email address</label>
          </div>

          <div className="input-group mb-3">
            <div className="form-floating ">
              <input type={viewPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} 
              className="form-control" id="floatingInputGroup1" placeholder="Password" />
              <label htmlFor="floatingInputGroup1">Password</label>
            </div>
            <span className="input-group-text" onClick={() => {setViewPassword(!viewPassword)}}>
              {viewPassword ? <FontAwesomeIcon icon={faEyeSlash} /> :<FontAwesomeIcon icon={faEye} />}
            </span>
          </div>

          <button className="btn btn-primary w-100 py-2" >Submit</button>

        </form>
  )
}
