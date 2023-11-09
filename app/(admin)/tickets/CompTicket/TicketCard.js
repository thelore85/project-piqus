'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
export const dynamic = 'force-dynamic' // force db refrech

// componets
import TicketButtons from '@/app/(admin)/tickets/CompTicket/TicketButtons.js'


// function component
export default function  TicketCard({ ticket, user }) {

  //NEXT setting
  const router = useRouter()

  //state interaction
  const [isEditing, setIsEditing] = useState(false);
  const [editedTicket, setEditedTicket] = useState({ ...ticket });

  //interection function
  const handleEdit = () => { setIsEditing(true); };
  const handleCancel = () => {  setIsEditing(false); };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTicket({
      ...ticket,
      [name]: value,
    });
  };

  const handleSave = () => {
    onUpdate(editedTicket);
    setIsEditing(false);
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

        <div className="w-100 pb-3 mb-0 small lh-sm border-bottom fw-light list-unstyled">
          
          <Link href={`/tickets/${ticket.id}`}>
            <p>
              <span className="h5 fw-bold text-black text-decoration-underline">
                {isEditing ? 
                (<input type="text" name="title" value={editedTicket.title} onChange={handleChange} />) : 
                ( ticket.title)}
              </span>
              <span className="small h6 text-black-50"> / Ticket ID: {ticket.id} </span>
            </p>
          </Link>

          <ul className="list-unstyled mb-2">

            <li className="mb-1">
              <Link href={`/users/${ticket.user_id}`}>
                <span className="fw-bold"> {ticket.user_email} </span>
              </Link>
            </li>
            <li className="mb-1">
              <span>Create at: </span> {new Date(ticket.created_at).toLocaleString("it-IT", {  day: "2-digit", month: "2-digit",  year: "numeric" })}
            </li>
            <li className="mb-1">
              {isEditing ? 
              ( <span>Promo Start: <input type="date" name="promo_start" value={editedTicket.promo_start ?? '' } onChange={handleChange} /> </span>) : 
              (  ticket.promo_start ? <span>Promo Start: {ticket.promo_start}</span> : null )}
            </li>

            <li className="mb-1">
              {isEditing ? 
              ( <span>Promo End: <input type="date" name="promo_end" value={editedTicket.promo_end ?? ''} onChange={handleChange} /></span>) : 
              (  ticket.promo_end ? <span>Promo End: {ticket.promo_end}</span> : null )}
            </li>

            <li className="mb-1">
              {isEditing ? 
              ( <span>Promo Code: <input type="date" name="promo_end" value={editedTicket.promo_code ?? ''} onChange={handleChange} /></span>) : 
              (  ticket.promo_end ? <span>Promo End: {ticket.promo_code}</span> : null )}
            </li>
          </ul>
        

          <div>
            {isEditing ? ( 
            <select name="status" id="status" onChange={handleChange} value={editedTicket.status ?? ''}>
              <option value="" disabled selected>Select status</option>
              <option value='review' >Review</option>
              <option value='approved'>Approved</option>
              <option value='rejected'>Rejeced</option>
              <option value='live'>Live</option>
              <option value='ended'>Ended</option>
              
            </select>) : 
            (
            ticket.status === '' ? ( <li><span className="badge text-bg-secondary">none</span></li>) : 
            ticket.status === 'review' ? ( <li><span className="badge text-bg-secondary">Review</span></li>) : 
            ticket.status === 'approved' ? ( <li><span className="badge text-bg-warning">Approved</span></li>) : 
            ticket.status === 'rejected' ? ( <li><span className="badge text-bg-danger">Rejected</span></li>) : 
            ticket.status === 'live' ? ( <li><span className="badge text-bg-success">Live</span></li>) : 
            ticket.status === 'ended' ? ( <li><span className="badge text-bg-secondary">Ended</span></li>) : null
            ) }
          </div>

          <TicketButtons ticket={ticket} isEditing={isEditing} handleCancel={handleCancel} handleEdit={handleEdit} handleSave={handleSave}/>

        </div>
      </div>
    </div>
  );
}

