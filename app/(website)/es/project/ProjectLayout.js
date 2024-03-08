'use client'
import React from 'react'
import { useEffect, useState } from "react"
import {pjt} from "/public/assets/db.js"
import Link from 'next/link'


export default function ProjectLayout({params}) {

  const [project, setProject] = useState({})
  
  useEffect(()=>{
    selectProject(params.id)
  },[])

  const selectProject = (id) => {
    let projectSelected = {}
    pjt.map( project => {
      if(project.id == id){
        projectSelected = project
      }    
    })
    setProject(projectSelected)
  }


  return (
      <div className="bg-light my-5" >
        <div className="container">

        <div className="row g-3">

            <div className="col-lg-4 col-md-12">
              <div className=' p-4 border rounded d-flex align-items-center bg-white'>
                  <img src={project.clientLogo} className="w-100 shadow me-4 rounded" style={{ maxWidth:"100px"}}/>
                  <div>
                    <h5 className='fw-bolder border-bottom' >{project.clientName}</h5>
                    <p className='fw-bold mb-1'>{project.clientDescription}</p>
                    <p className='small mb-0'>{project.clientIndustries}</p>
                  </div>
                
              </div>
            </div>
          
            <div className="col-lg-8 col-md-12">
              <div className='border rounded p-3 bg-white'>
                
                <div className='mb-5'>
                  <h1 className='fw-bold border-bottom mb-4 pb-3'>{project.title}</h1>
                  <p className='mb-3 fw-bold d-none d-md-block'>{project.description}</p>
                  <img src={project.clientImage} className="w-100 shadow rounded "/>
                </div>
                
                <div>
                  <h4 className=''>Project description</h4>
                  <p className='mb-4 pb-3 border-bottom'>
                    {project?.content?.split(". ").map((sentence, index) => (
                      <span key={index}>{sentence}.<br /><br /></span>
                    ))}
                  </p>
                </div>

                <div className='mb-4 border-bottom'>
                  <h4 className=''>Tools and Tech</h4>
                  <ul className='small'>
                    {project?.tech?.map((tool, index) => <li key={index}>{tool}</li>)}
                  </ul>
                </div>

                <div>
                  {project.webUrl && (
                    <Link className="btn-light text-primary border-primary btn btn-sm me-3" href={project.webUrl} target="_blanc">Visit Website</Link>
                  )}
                  {project.gitCode && (
                    <Link className="btn-primary btn btn-sm" href={project.gitCode} target="_blanc">Git Repository</Link>
                  )}
                </div>

              </div>
            </div>

        </div>

        </div>
      </div>
  )
}
