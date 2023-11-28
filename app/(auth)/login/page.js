'use client'
import { useState, useEffect } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'


//components
import Link from 'next/link'
import FormAuth from '@/app/(auth)/Components/FormAuth.js'


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

  // check if user is resetting psw
  useEffect( async() => {

    const supabase = createClientComponentClient()

    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event == "PASSWORD_RECOVERY") {
        const newPassword = prompt("What would you like your new password to be?");
        const { data, error } = await supabase.auth
          .updateUser({ password: newPassword })
 
        if (data) alert("Password updated successfully!")
        if (error) alert("There was an error updating your password.")
      }
    })
  }, [])


  return (
    <section className="dark-bg w-100 h-75 py-3 d-flex justify-content-center align-items-center" style={{ backgroundImage : 'url(/img/home/net-bg-4.jpg)', backgroundSize : 'cover', backgroundPosition : 'center'}}>
      <div className="container" style={{'maxWidth':'500px'}}>

      <FormAuth title= {'Log in'} handleSubmit= {handleSubmit} />
      { errorLogin && <div className="p-2 bg-danger-subtle text-danger">{ errorLogin }</div>}    

      <div className="p-3 mt-4 rounded bg-white text-secondary">
        <p className="mb-0 small">Don&apos;t have an account? <Link href="/signup" className="text-primary">Sign up Here</Link></p>
        <p className="mb-0 small">Forgot your passworld? <Link href="/reset-password" className="text-primary">Reset your password</Link></p>
      </div>
      

      </div>
    </section>
  )
}
