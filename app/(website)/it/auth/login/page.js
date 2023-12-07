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

  const sendEmailToPiqus = () => {
    console.log('new user registered: email sent')
  }

  const userLogin = async( email, password) => {
    setErrorLogin('')

    const supabase = createClientComponentClient()
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if(error){ setErrorLogin(error.message) }
    if(!error){ 
      sendEmailToPiqus();
      router.refresh();
      router.push(`/it/profile/${data.user.id}`)
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
        <p className="mb-0 small">Don&apos;t have an account? <Link href="/it/auth/signup" className="text-primary">Sign up Here</Link></p>
        <p className="mb-0 small">Forgot your passworld? <Link href="/it/auth/reset-password" className="text-primary">Reset your password</Link></p>
      </div>

      </div>
    </section>
  )
}
