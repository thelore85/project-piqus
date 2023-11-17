'use client'

import { useState } from "react";
import Tiptap from "./Tiptap";


export default function CreatePostForm() { 

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [index, setIndex] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState([])

  // FORM SUBMISSION - call api/tickets
  const handleSubmit = async (e)  => {
    e.preventDefault()
    setIsLoading(true)

    const newTicket = { title, description, index, content, category }

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


  const handleCategoryChange = (e) => {
    if(e.target.checked){ setCategory([...category, e.target.value]) }
  }

  const handleIndexChange = (html) => {
   setIndex(html)
  }

  const handleContentChange = (html) => {
    setContent(html)
  }


  return (
    <section className="px-2 py-5 bg-light d-flex justify-content-center align-items-center">
      <div className="container" style={{width:'100%', maxWidth:'800px'}}>

        <h2 className="h1 fw-bold mb-5 text-center">Create a new post</h2>

        <div className="rounded bg-white p-3 w-100">

          <fieldset id='content' className=" mb-5">
            <h3 className="h5 fw-bold border-bottom w-100 d-block mb-3 pb-2"> Content</h3>

            <label htmlFor="title" className="form-label">Title</label>
            <input id="title "type='text' className="form-control mb-3" onChange={(e)=>{setTitle(e.target.value)}}/>

            <label htmlFor="description" className="form-label">Description</label>
            <input id="description" type='text' className="form-control mb-3" onChange={(e)=>{setDescription(e.target.value)}}/>

            <label htmlFor="index" className="form-label d-block">Index</label>
            <Tiptap onUpdate={handleIndexChange} />

            <label htmlFor="content" className="form-label d-block">Content</label>
            <Tiptap onUpdate={handleContentChange} />

          </fieldset>

          <fieldset id="tag" className="mb-5 w-100">
            <h3 className="h5 fw-bold border-bottom w-100 d-block mb-3 pb-2">Metadata</h3>

            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Javascript" id="js" onChange={(e) => handleCategoryChange(e)} />
              <label className="form-check-label" htmlFor="js">
                Javascript
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Html-Css" id="html" onChange={(e) => handleCategoryChange(e)} />
              <label className="form-check-label" htmlFor="html">
                Html and Css
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Best Practice" id="web" onChange={(e) => handleCategoryChange(e)}/>
              <label className="form-check-label" htmlFor="web">
                Best Practice
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="React" id="react" onChange={(e) => handleCategoryChange(e)}/>
              <label className="form-check-label" htmlFor="react">
                React
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Python" id="python" onChange={(e) => handleCategoryChange(e)}/>
              <label className="form-check-label" htmlFor="python">
                Python
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="e-Commerce" id="ecommerce" onChange={(e) => handleCategoryChange(e)} />
              <label className="form-check-label" htmlFor="ecommerce">
                E-commerce
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Web App" id="webapp" onChange={(e) => handleCategoryChange(e)} />
              <label className="form-check-label" htmlFor="webapp">
                Web App
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Website" id="website" onChange={(e) => handleCategoryChange(e)}/>
              <label className="form-check-label" htmlFor="website">
                Website
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Marketing" id="marketing" onChange={(e) => handleCategoryChange(e)} />
              <label className="form-check-label" htmlFor="marketing">
                Marketing and Adv
              </label>
            </div>
          </fieldset>

          <button className="btn btn-primary" onClick={handleSubmit}>Submit Content</button>

        </div>

      </div>
    </section>

  )
}
