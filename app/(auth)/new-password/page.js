'use client'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React, {useState} from 'react'

export default function NewPassworPage() {

  const [password, setPassword ] = useState('');
  const [viewPassword, setViewPassword] = useState(false)
  const [response, setResponse] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const supabase = createClientComponentClient()
    const { data, error } = await supabase.auth.updateUser({password: password})
    
    if( data ){setResponse(true)}
    if( error ){setResponse(false); console.log('new pass error: ', error)}
  }


  return (
    
    <section className="dark-bg w-100 h-75 py-3 d-flex justify-content-center align-items-center" style={{ backgroundImage : 'url(/img/home/net-bg-4.jpg)', backgroundSize : 'cover', backgroundPosition : 'center'}}>
    <div className="container" style={{'maxWidth':'500px'}}>

    <form className="bg-white p-3 rounded" onSubmit={(e) => handleSubmit(e)} >  
      <h1 className="h2 text-center p-3 fw-bold">Insert a New Password</h1>
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
      <button className="btn btn-primary w-100 py-2" >Confirm New Password</button>
    </form>

    { response === '' ? null : 
      ( response ?   
        (<div className="p-3 mt-4 rounded bg-success-subtle text-success">
          <p className="mb-0 small">Check your email and follow the link</p>
        </div>) :

        (<div className="p-3 mt-4 rounded bg-danger-subtle text-danger">
          <p className="mb-0 small">Impossible to change. Try another password</p>
        </div>)
      )}



    </div>
  </section>
    


  )
}
