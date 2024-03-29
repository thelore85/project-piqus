'use client'

import React from 'react'

export default function Selector({ onProjectSelection, selection }) {
  return (
        <div className="text-center text-white mb-5">
          <p className="mb-5 fw-bold text-decoration-underline">#Portfolio</p>
          <h1 className="fw-bold">Esplora il mio mondo digitale</h1>
          <p className="fw-lighter mb-5">Scopri i miei progetti e immagina le possibilità che possiamo creare insieme.</p>

          <div className="selector-wrapper">
            <select className="selector p-2 rounded w-100" style={{maxWidth:"400px"}} defaultValue={selection} onChange={onProjectSelection}>
              <option className="" value="null" >Seleziona categoria</option>
              <option className="" value="developing">Sviluppo Web</option>
              <option className="" value="marketing">Marketing e Comunicazione</option>
              <option className="" value="open_source">Progetti Open Source</option>
            </select>
          </div>
        </div>
  )
}
