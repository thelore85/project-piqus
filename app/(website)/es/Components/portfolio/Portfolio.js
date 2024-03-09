'use client'
import React, { useState } from 'react'
import {pjt} from "@/public/assets/db"


////////////////////////////
// components
import Selector from './Selector'
import CardList from './CardList'


export default function Portfolio() {
  
  const [selection, setSelection] = useState(null)
  const [filteredList, setFilteredList] = useState('')

  const onProjectSelection = (e) => {
    const value = e.target.value;
    console.log(value)
    setSelection(value);
    filterProject(value);
  }

  const filterProject = (selection) => {
    let filteredProjects = []
    filteredProjects = pjt.filter((el , i)=>
      el.category.toString().includes(selection)
    )

    setFilteredList(filteredProjects)
  }

  return (
    <>
      <section id="portfolio" className="py-5 px-1" style={{background: 'rgb(2, 13, 29)', border: '2rem solid white' }}>
        
          <Selector onProjectSelection={onProjectSelection} selection={selection}/>
          <CardList filteredList = { filteredList }/>
        
      </section>    
    </>
  )
}
