'use client'
import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'


//components
import Link from 'next/link'
import FormAuth from '../../Components/Authentication/FormAuth'


//page function
export default function Login() {

  const [errorLogin, setErrorLogin] = useState('')
  const router = useRouter()

  const userLogin = async( email, password) => {
    setErrorLogin('')

    const supabase = createClientComponentClient()
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if(error){ setErrorLogin(error.message) }
    if(!error){ 
      router.refresh();
      router.push(`/en/profile/${data.user.id}`)
    }
  }

  const handleSubmit = ( e, email, password ) => {
    e.preventDefault()
    userLogin( email, password)
  }

  return (
    <section className="dark-bg w-100 h-100 py-3 d-flex justify-content-center align-items-center" style={{ backgroundImage : 'url(/img/home/net-bg-4.jpg)', backgroundSize : 'cover', backgroundPosition : 'center'}}>
      <div className="container" style={{'maxWidth':'500px'}}>

      <FormAuth title= {'Log in'} handleSubmit= {handleSubmit} />
      { errorLogin && <div className="p-2 bg-danger-subtle text-danger">{ errorLogin }</div>}    

      <div className="p-3 mt-4 rounded bg-white text-secondary">
        <p className="mb-0 small py-1">Don&apos;t have an account? <Link href="/en/auth/signup" className="text-primary fw-bold">Sign up Here</Link></p>
        <p className="mb-0 small py-1">Forgot your passworld? <Link href="/en/auth/reset-password" className="text-primary fw-bold">Reset your password</Link></p>
      </div>

      </div>
    </section>
  )
}
