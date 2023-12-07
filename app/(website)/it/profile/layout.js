import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'
export const dynamic = 'force-dynamic'; // force realtime update


//////////////////////////////
// components
import MainNavbar from '../Components/Navigation/MainNavbar';
import Footer from '../Components/Sections/Footer';

//////////////////////////////////////
// layout template
export default async function layout({children}) {

    //get session
      const supabase = createServerComponentClient({ cookies })    
      const { data } = await supabase.auth.getSession()
    
      if(!data.session){ redirect('/') } //protect the page from non logged-in users 
  

  return (
    <>
      
      {children}
      
    </>
  )
}
