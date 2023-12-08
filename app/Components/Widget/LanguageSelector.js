'use client'

import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'


export default function LanguageSelector() {

  const [lang, setLang] = useState('')
  const [path, setPath] = useState('')
  
  const router = useRouter()
  const pathName = usePathname()

  const handleSelection = (e)=>{
    const language = e.target.value
    setLang(language)
    redirect(language)
  }

  const redirect = (string) => {
    const pathToReplace = path.slice(1, 3);
    const newPath = path.replace(pathToReplace, `${string}`);
    setPath(newPath)
    router.push(newPath)
  }

  
  useEffect(()=>{
    const url = pathName
    setPath(url)
    setLang(url.slice(1, 3))
  },[pathName, router])

  return (
    <div>
      <select name="cars" id="cars" form="carform" value={lang}  onChange={handleSelection}>
        <option value="it" >Italiano</option>
        <option value="es" >Español</option>
        <option value="en" >English</option>
      </select>
    </div>
  )
}
