'use client'

import { useState } from "react";
import Tiptap from "./Tiptap";
import { useRouter } from "next/navigation";


export default function CreatePostForm() { 

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const [content_index, setIndexContent] = useState('')
  const [category, setCategory] = useState([])
  const [author, setAuthor] = useState('Lorenzo')

  const router = useRouter()


  // FORM SUBMISSION - call api/tickets
  const handleSubmit = async (e)  => {
    e.preventDefault()

    const newPost = { title, description, content, content_index, category, author }
    
    const response = await fetch('/api/blog/post', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newPost)
    })
    
    const json = await response.json()

    if(json.error){console.log('API rerro create post form: ', json.error.message)}
    if(json.data){
      router.refresh()
      router.push(`/blog/${json.data.id}`)
    }
  }


  const handleCategoryChange = (e) => {
    if(e.target.checked){ setCategory([...category, e.target.value]) }
  }

  const handleIndexChange = (html) => {
   setIndexContent(html)
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
              <input className="form-check-input" type="checkbox" value="Best Practice" id="practice" onChange={(e) => handleCategoryChange(e)}/>
              <label className="form-check-label" htmlFor="practice">
                Best Practice
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Web Industry" id="web" onChange={(e) => handleCategoryChange(e)}/>
              <label className="form-check-label" htmlFor="web">
                Web Industry
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
