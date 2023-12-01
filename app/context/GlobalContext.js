'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, {createContext, useEffect, useState} from "react";

export const  Context = createContext(null)
export const GlobalContext = (props) => {

  // Store
  const [ store, setStore ] = useState({
    session : {}
  })

  // Actions 
  const [actions, setActions] = useState({

    getSession: async () => {

      console.log('getSession function called')
      const supabase = createClientComponentClient()    
      const { data } = await supabase.auth.getSession()

      if(data){
        setStore( prevStore => ({ ...prevStore, session: data.session }))
        console.log(data)
      }
      
    },
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