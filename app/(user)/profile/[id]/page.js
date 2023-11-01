import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { notFound } from "next/navigation"
import { cookies } from 'next/headers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"

//components
import ProjectList from "@/app/(user)/profile/CompProfile/ProjectList"


// PAGE FUNCTION
export default async function userDetails({ params }) {
  
  // get DB table: tickets
  async function getUserTickets(id) {
    const supabase = createServerComponentClient({ cookies })
    const { data } = await supabase.from('pj_promo_service')
      .select()
      .eq('user_id', id)

    if ( data === null) { console.log('error: ', data); notFound() }
    return data
  }

  const tickets = await getUserTickets(params.id)

  return (
    <>
      <div className="row">

        <div className="col-12">
          <div className="lh-1 bg-primary rounded p-4 text-white mb-4 d-flex align-items-center">
            <FontAwesomeIcon icon={faUser} className="h2 me-3"/>
            <div className="me-auto">
              <h1 className="h5 mb-1 text-white lh-1">My Projects</h1>
              <small>{ 'Find your project list here' ?? 'Still  no projects! Click the button aside to start a new one!'}</small>
            </div>
            <Link href="/tickets/create" ><div className="btn btn-light text-primary fw-bold ms-3">New Project</div></Link>
          </div>
        </div>
        
      </div>

      <div className="row">
        
        <div className="col-md-3">
          <div className="bg-white rounded p-3">
            <ul className=" list-unstyled text-secondary">
              <li><small className="fw-bold text-black">{tickets[0]?.user_email}</small></li>
            </ul>
          </div>
        </div>

        <div className="col-md-9">
          <div className="bg-white rounded">
            <ProjectList tickets={tickets} />
          </div>
        </div>

      </div>
    </>
  )
}