import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'
export const dynamic = 'force-dynamic'; // force realtime update


//////////////////////////////
// components

import MainNavbar from '../(website)/en/Components/Navigation/MainNavbar';
import Footer from '../(website)/en/Components/Sections/Footer';
import AdminMenu from '../Components/AdminMenu/AdminMenu';


//////////////////////////////////////
// layout template
export default async function layout({children}) {

    //get session
      const supabase = createServerComponentClient({ cookies })    
      const { data } = await supabase.auth.getSession()
    
      if(!data.session){ redirect('/') } //protect the page from non logged-in users 
  

  return (
    <>
      <MainNavbar />
      <AdminMenu />
      <div className=" min-vh-100 container py-5">
        {children}
      </div>
      <Footer />
    </>
  )
}
