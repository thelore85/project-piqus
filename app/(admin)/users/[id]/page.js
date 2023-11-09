import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { notFound } from "next/navigation"
import { cookies } from 'next/headers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"

//components
import TicketList from "@/app/(admin)/tickets/CompTicket/TicketList"


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
      <div className="lh-1 bg-dark rounded p-4 text-white mb-4 d-flex align-items-center">
        <FontAwesomeIcon icon={faUser} className="h2 me-3"/>
        <div className="me-auto">
          <h1 className="h5 mb-1 text-white lh-1">User Projects</h1>
          <small>{ tickets[0]?.user_email ?? 'No ticket for this user'}</small>
        </div>
        <Link href="/profile/newproject" ><div className="btn btn-light text-primary fw-bold ms-3">New Promo</div></Link>
      </div>

      <div>
        <div className="bg-white rounded">
          <TicketList tickets={tickets} />
        </div>
      </div>
    </>
  )
}