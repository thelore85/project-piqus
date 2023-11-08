'use client'
import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'


//components
import FormAuth from '@/app/(auth)/Components/FormAuth.js'
import { useRouter } from 'next/navigation'


//page function
export default function Login() {

  const [errorLogin, setErrorLogin] = useState('')
  const router = useRouter()

  const handleSubmit = async ( e, email, password ) => {

    e.preventDefault()
    setErrorLogin('')

    const supabase = createClientComponentClient()
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if(error){ setErrorLogin(error.message) }
    if(!error){ 
      router.refresh();
      router.push(`/profile/${data.user.id}`) 
    }
  }

  return (
    <section className="dark-bg w-100 h-75 py-3 d-flex justify-content-center align-items-center">
      <div className="container" style={{'maxWidth':'500px'}}>

      <FormAuth title= {'Log in'} handleSubmit= {handleSubmit} />
      { errorLogin && <div className="p-2 bg-danger-subtle text-danger">{ errorLogin }</div>}    

      <div className="p-3 mt-4 rounded bg-white text-secondary">
        <p className="mb-0">Don&apos;t have an account? <Link href="/signup" className="text-primary">Sign up Here</Link></p>
      </div>
      

      </div>
    </section>
  )
}
