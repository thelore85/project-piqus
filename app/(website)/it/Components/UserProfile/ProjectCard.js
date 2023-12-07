'use client'

import React from 'react';
import { useRouter } from 'next/navigation'
export const dynamic = 'force-dynamic' // force db refrech


// function component
export default function  TicketCard({ ticket }) {

  //NEXT setting
  const router = useRouter()

  //interection function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTicket({
      ...ticket,
      [name]: value,
    });
  };

 



 // EDIT SUBMISSION - call api/tickets/edit
 const onUpdate = async (updatedTicket)  => {
  
  const res = await fetch('/api/tickets/edit', {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(updatedTicket)
  })

  const json = await res.json()  

  if(json.error){console.log('Error - ticket update: ',json.error)}
  if(!json.error){ router.refresh() }
}



  // html
  return (
    <div key={ticket.id} className="p-3 mb-2">
      <div className="d-flex text-body-secondary">
        <div className="bg-secondary-subtle p-1 me-3 rounded"></div>

        <ul className="w-100 pb-3 mb-0 small lh-sm border-bottom fw-light list-unstyled">
          <li>
            <p>
              <span className="h5 fw-bold text-black text-decoration-underline me-2">{ticket.title}</span>
              <span className="small h6 text-black-50">{ticket.service ?? ''} / Id: {ticket.id} </span>
            </p>
          </li>
          <li > <span className="fw-bold"> {ticket.user_email} </span> </li>
          <li><span>Create at: </span> {new Date(ticket.created_at).toLocaleString("it-IT", {  day: "2-digit", month: "2-digit",  year: "numeric" })}</li>
          <li>{ticket.promo_start ? <span>Promo Start: {ticket.promo_start}</span> : null }</li>
          <li>{ ticket.promo_end ? <span>Promo End: {ticket.promo_end}</span> : null }</li>
          <li>{ ticket.promo_code ? <span>Promo Code: {ticket.promo_code} </span> : null }</li>
          <div>
            {ticket.status === 'active' ? ( <li><span className="mt-2 badge text-bg-success">Active</span></li>) : 
            ticket.status === 'pending' ? ( <li><span className="mt-2 badge text-bg-warning">Pending</span></li>) : 
            ticket.status === 'ended' ? ( <li><span className="mt-2 badge text-bg-secondary">Ended</span></li>) : null}
          </div>
        </ul>
        
      </div>
    </div>
  );
}

