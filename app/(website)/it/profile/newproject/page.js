/////////////////////////////////////
// create component form page
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'


//////////////////////////////////
// componetns
import NewProjectForm from '../../Components/UserProfile/NewProjectForm';


///////////////////////////////////
// page
export default async function create() {

  const supabase = createServerComponentClient({ cookies })
  const { data : session } = await supabase.auth.getSession()
  const id =  session.session.user.id;

  return (
    <section className=" h-75 d-flex justify-content-center align-items-center" style={{ backgroundImage : 'url(/img/home/net-bg-5.jpg)', backgroundSize : 'cover', backgroundPosition : 'center'}}>
      <NewProjectForm user_id={id} />
    </section>
  )
}