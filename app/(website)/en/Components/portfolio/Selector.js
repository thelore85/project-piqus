'use client'

import React from 'react'

export default function Selector({ onProjectSelection, selection }) {
  return (
        <div className="text-center text-white mb-5">
          <p className="mb-5 fw-bold text-decoration-underline">#Portfolio</p>
          <h1 className="fw-bold">Explore My Digital World</h1>
          <p className="fw-lighter mb-5">Discover my projects and imagine the possibilities we can create together.</p>

          <div className="selector-wrapper">
            <select className="selector p-2 rounded w-100" style={{maxWidth:"400px"}} defaultValue={selection} onChange={onProjectSelection}>
              <option className="" value="null" >Select category</option>
              <option className="" value="developing">Websites and Apps</option>
              <option className="" value="marketing">Marketing and Communication</option>
              <option className="" value="open_source">Open Source Projects</option>
            </select>
          </div>
        </div>
  )
}
