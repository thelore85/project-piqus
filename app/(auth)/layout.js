import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'
export const dynamic = 'force-dynamic'; // force realtime update

//components
import MainNavbar from './en/Components/Navigation/MainNavbar';
import Footer from '../(website)/en/Components/Sections/Footer';


export default async function authLayout({children}) {

const supabase = createServerComponentClient({ cookies })    
const { data } = await supabase.auth.getSession()

if(data.session){ redirect(`/profile/${data.session.user.id}`) } //protect the page from logged-in users 

  return (
      <>
        <MainNavbar />
        {children}
        <Footer />
      </>
  )
}