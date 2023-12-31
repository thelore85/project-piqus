'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

 
// component function
export default function DeleteButton({ ticket }) {

  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleDelete = async ()  => {
    setIsLoading(true)
  
    const res = await fetch('/api/tickets/delete', {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(ticket.id)
    })
  
    const json = await res.json()  
  
    if(json.error){console.log('Error - ticket update: ',json.error)}
    if(!json.error){ 
      router.refresh();
      router.push(`/users/${ticket.user_id}`)
    }
  }

  return (
    <div className=" d-inline-block rounded w-auto" onClick={handleDelete} disabled={isLoading}>
      {isLoading 
      ? (<span className="btn btn-sm btn-light border-danger text-danger"><FontAwesomeIcon className="text-danger h-6 " icon={faSpinner} spin /></span>)
      : (<span className='btn btn-sm btn-light'>Delate</span>) }
    </div>
  )  
}
