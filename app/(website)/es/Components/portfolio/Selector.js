'use client'

import React from 'react'

export default function Selector({ onProjectSelection, selection }) {
  return (
        <div className="text-center text-white mb-5">
          <p className="mb-5 fw-bold text-decoration-underline">#Portfolio</p>
          <h1 className="fw-bold">Explora mi mundo digital</h1>
          <p className="fw-lighter mb-5">Descubre mis proyectos e imagina las posibilidades que podemos crear juntos.</p>

          <div className="selector-wrapper">
            <select className="selector p-2 rounded w-100" style={{maxWidth:"400px"}} defaultValue={selection} onChange={onProjectSelection}>
              <option className="" value="null" >Seleccionar categoría</option>
              <option className="" value="developing">Desarrollo Web</option>
              <option className="" value="marketing">Marketing y comunicación</option>
              <option className="" value="open_source">Proyectos Open Source</option>
            </select>
          </div>
        </div>
  )
}
