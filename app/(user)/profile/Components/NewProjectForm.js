"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"


//component
export default function NewProjectForm({ user_id }) {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  const [service, setService] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')


  // FORM SUBMISSION - call api/tickets
  const handleSubmit = async (e)  => {
    e.preventDefault()
    setIsLoading(true)

    const newTicket = { title, description, service }

    const res = await fetch('/api/tickets/create/', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newTicket)
    })

    const json = await res.json()

    if(json.error){console.log('Error - ticket form: ',json.error)}
    if(json.data){
      router.refresh()
      router.push(`/profile/${user_id}`)
    }

  }

  return (
<>
      <div className="bg-white p-3 rounded text-center" style={{ width: '100%', maxWidth : '600px'}} >

        <h2 className="h2 p-4">Select the project you need!</h2>

        {/* PROJECT LIST */}
        <div className="form-floating mb-5">
          <select  className="form-select" aria-label="Default select example" required onChange={(e) => setService(e.target.value)} value={service ?? ''} >
            <option value="" disabled >Please select a service</option>

            <optgroup label="WEB DEVELOPING" className="mb-2" >
              <option value="e_commerce">E-commerce</option>
              <option value="website">Website</option>
              <option value="landing_page">One-Page Site (Landing Page)</option>
              <option value="web_application">Web Application</option>
              <option value="email">Email</option>
            </optgroup>
            <optgroup label="ADV & MARKETING">
              <option value="google_ads">Google Ads Campaign</option>
              <option value="seo_content">Content Creation and SEO</option>
              <option value="influencer">Influencer Campaign</option>
              <option value="press">PR and Press Campaign</option>
              <option value="brand_identity">Brand Identity</option>
              <option value="consultancy">Strategy Consultancy</option>
            </optgroup>
            <optgroup label="TECHNOLOGY">
              <option value="analytics">Analytics</option>
              <option value="crm">CRM</option>
            </optgroup>
          </select>
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Project type
          </label>
        </div>


        {service ? (
          <form onSubmit={handleSubmit} className="">

            <div className="form-floating mb-3">
              <input  className="form-control" required type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
              <label htmlFor="floatingInput">Project Name</label>
            </div>
            
            <div className="form-floating mb-3">
              <textarea  className="form-control" required onChange={(e) => setDescription(e.target.value)} value={description} />
              <label htmlFor="floatingPassword">Describe your project</label>
            </div>

            <button  className="btn btn-primary"  disabled={isLoading} >
              {isLoading && <span>Adding...</span>}
              {!isLoading && <span>Add Project</span>}
            </button>
            
          </form>

        ) : null}


      </div>

</>
   
  )
}