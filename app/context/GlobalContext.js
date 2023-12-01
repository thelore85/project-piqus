'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, {createContext, useEffect, useState} from "react";

export const  Context = createContext(null)
export const GlobalContext = (props) => {

  // Store
  const [ store, setStore ] = useState({
    session : {},
    sessionData: {
      name: 'lorenzo',
      surname: 'garofalo'
    }
  })

  // Actions 
  const [actions, setActions] = useState({

    getSession: async () => {
      const supabase = createClientComponentClient()    
      const { data } = await supabase.auth.getSession()
      if(data){
        setStore( prevStore => ({ ...prevStore, session: data.session }))
      }
    },

    addDataSession: (data) => {
      setStore( prevStore => ({...prevStore, sessionData: data }))
      localStorage.setItem('sessionData', JSON.stringify(data))
    }

  });

  // UseEffect
  useEffect(() => {
     actions.getSession()
  },[] )

  return(
    <Context.Provider value={{ store, setStore, actions }}>
      {props.children}
    </Context.Provider>
  )
}