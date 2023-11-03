'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useState } from 'react';
import { useRouter } from 'next/navigation'

//componentes
import FormAuth from '@/app/(auth)/Components/FormAuth.js'

//page function
export default function SignUp() {

  const [formError, setFormError] = useState('') //manage form error
  const router = useRouter();

  const url = location.origin
  console.log('debugging signUp v2: ', `${location.origin}/api/auth/callback`)



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

  console.log('debugging signUp v3: ', `${getURL()}api/auth/callback/`)


  const handleSubmit = async ( e, email, password ) => {
    e.preventDefault() //don't reload the page

    const supabase = createClientComponentClient() //call the database API
    const {error, data } = await supabase.auth
    .signUp({
      email,
      password,
      option:{
        emailRedirectTo: getURL(),
      }
    })

    if(error){ setFormError(error.message); console.log(error.message)}
    if(!error){ router.push('/verify') }
  }

  //////////////////////////////////////
  // Page html output
  return (
    <section className="dark-bg w-100 h-75 py-3 d-flex justify-content-center align-items-center">
      <div className="container" style={{'maxWidth':'500px'}}>

      <FormAuth title = 'Create your account'  handleSubmit= {handleSubmit} />
      { formError && <div className="fs-6 p-3 mt-2 rounded bg-danger-subtle text-danger" >{formError}</div> }

      </div>
    </section>
  )
}
