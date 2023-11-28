'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link';

//componentes
import SignupForm from '../Components/SignupForm';

//page function
export default function SignUp() {

  const [formError, setFormError] = useState('') //manage form error
  const router = useRouter();

  // const url = location.origin
  // console.log('debugging signUp v2: ', `${location.origin}/api/auth/callback`)

  ////////////////////////////////////////
  // submit new user to DB

  // generate url
  const getURL = () => {
    let url =
      process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
      process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
      'http://localhost:3000/'
    // Make sure to include `https://` when not localhost.
    url = url.includes('http') ? url : `https://${url}`
    // Make sure to include a trailing `/`.
    url = url.charAt(url.length - 1) === '/' ? url : `${url}/`
    url = `${url}api/auth/callback/`

    return url
  }

  const newUserRegistration = async(name, phone, email, password) => {
    const supabase = createClientComponentClient() //call the database API
    const {error, data } = await supabase.auth
    .signUp({
      email,
      password,
      option:{
        data: {
          first_name: name,
          phone: phone,
        },
        emailRedirectTo: getURL(),
      }
    })

    if(error){ 
      setFormError(error.message); 
      console.log(error.message)
    }
    if(!error){ 
      sendNewUserEmailAlert(name,phone,email); 
      router.push('/verify') 
    }

  }

  const sendNewUserEmailAlert = async (name, email, phone) => {
    const info = { name, email, phone}
    const url = '/api/auth/email-alert'
    const options = {
      method: "POST",
      body: JSON.stringify(info),
      headers: { "Content-Type": "application/json" }
    }

    const response = await fetch(url, options)
    if(response.ok){
      const data = await response.json()
      console.log('notification email sent: ', data)
    }else{
      console.log('error: notification email', response.status, response.statusText )
    }
  }

  const handleSubmit = ( e, name, phone, email, password) => {
    e.preventDefault()
    newUserRegistration(name, phone, email, password);
  }

  //////////////////////////////////////
  // Page html output
  return (
    <section className="dark-bg w-100 h-75 py-3 d-flex justify-content-center align-items-center" style={{ backgroundImage : 'url(/img/home/net-bg-2.jpg)', backgroundSize : 'cover', backgroundPosition : 'center'}}>
      <div className="container" style={{'maxWidth':'500px'}}>
      
      <SignupForm title = 'Create your account'  handleSubmit= {handleSubmit}/>
      { formError && <div className="fs-6 p-3 mt-2 rounded bg-danger-subtle text-danger" >{formError}</div> }

      <div className="p-3 mt-4 mb-4 rounded bg-white text-secondary">
        <p className="mb-0"> Already have an account? <Link href="/login" className="text-primary ">Login Here</Link></p>
      </div>

      <div className="">
        <p className="mb-3 text-white fw-lighter" style={{ 'fontSize' : '11px'}} >Clicking Submit, you agree to the terms and conditions and the privacy policy present at the bottom of the site. For more information, visit the legal section of piqus.it.</p>
      </div>
      <div>
        <button className="btn btn-primary" onClick={sendNewUserEmailAlert}> run api</button>
      </div>

      </div>
    </section>
  )
}
