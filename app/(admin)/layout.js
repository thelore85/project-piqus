import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'
export const dynamic = 'force-dynamic'; // force realtime update


//////////////////////////////
// components
import Footer from '@/app//Components/Footer/Footer'
import Navbar from '@/app/Components/Navbar/Navbar';
import AdminMenu from '@/app/Components/Navbar/AdminMenu';


//////////////////////////////////////
// layout template
export default async function layout({children}) {

    //get session
      const supabase = createServerComponentClient({ cookies })    
      const { data } = await supabase.auth.getSession()
    
      if(!data.session){ redirect('/') } //protect the page from non logged-in users 
  

  return (
    <>
      <Navbar />
      <AdminMenu />
      <div className=" min-vh-100 container py-5">
        {children}
      </div>
      <Footer/>
    </>
  )
}
