'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

// components
import ResetPassworldForm from '../Components/ResetPasswordForm'
import Link from 'next/link'



export default function pageResetPassworld() {

  const router = useRouter()

  const handleSubmit = async ( e, email ) => {

    e.preventDefault()

    // sent reset email to user
    const supabase = createClientComponentClient()
    const { data, error } = await supabase.auth
      .resetPasswordForEmail(email)

    console.log('reset psw: ', error, data)

  }




  return (
    
    <section className="dark-bg w-100 h-75 py-3 d-flex justify-content-center align-items-center" style={{ backgroundImage : 'url(/img/home/net-bg-4.jpg)', backgroundSize : 'cover', backgroundPosition : 'center'}}>
      <div className="container" style={{'maxWidth':'500px'}}>

      <ResetPassworldForm title= {'Reset Password'} handleSubmit= {handleSubmit} />
      {/* { errorLogin && <div className="p-2 bg-danger-subtle text-danger">{ errorLogin }</div>} */}

      <div className="p-3 mt-4 rounded bg-white text-secondary">
        <p className="mb-0 small">Go back to <Link href="/login" className="text-primary">Login</Link></p>
      </div>

      </div>
    </section>


  )
}
