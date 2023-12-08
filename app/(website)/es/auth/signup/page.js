'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useState } from 'react';
import { useRouter } from 'next/navigation'

//componentes
import Link from 'next/link';
import SignupForm from '../../Components/Authentication/SignupForm';

//page function
export default function SignUp() {

  const [formError, setFormError] = useState('') //manage form error
  const router = useRouter();

  // const url = location.origin
  // console.log('debugging signUp v2: ', `${location.origin}/api/auth/callback`)

  ////////////////////////////////////////
  // submit new user to DB

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
        emailRedirectTo: 'https://piqus.it/api/auth/callback/',
      }
    })

    if(error){ 
      setFormError(error.message); 
      console.log(error.message)
    }
    if(!error){ 
      sendNewUserEmailAlert(name, email, phone); 
      router.push('/es/auth/verify') 
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
      
      <SignupForm title = 'Crea il tuo Account'  handleSubmit= {handleSubmit}/>
      { formError && <div className="fs-6 p-3 mt-2 rounded bg-danger-subtle text-danger" >{formError}</div> }

      <div className="p-3 mt-4 mb-4 rounded bg-white text-secondary">
        <p className="mb-0 small">Hai già un Account? <Link href="/es/auth/login" className="text-primary fw-bold">Accedi Ora</Link></p>
      </div>

      <div className="">
        <p className="mb-3 text-white fw-lighter" style={{ 'fontSize' : '11px'}} >Continuando accetti i termini e le condizioni e l&apos;informativa sulla privacy presenti nella parte inferiore del sito. Per ulteriori informazioni, visita la sezione legale su piqus.it.</p>
      </div>

      </div>
    </section>
  )
}
