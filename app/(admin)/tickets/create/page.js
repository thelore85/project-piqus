/////////////////////////////////////
// create component form page
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'


//////////////////////////////////
// componetns
import CreateTicketForm from "@/app/(admin)/tickets/CompTicket/CreateTicketForm.js";


///////////////////////////////////
// page
export default async function create() {

  const supabase = createServerComponentClient({ cookies })
  const { data : session } = await supabase.auth.getSession()
  const id =  session.session.user.id;

  return (
    <section className="d-flex align-content-center justify-content-center ">
      <CreateTicketForm user_id={id}/>
    </section>
  )
}