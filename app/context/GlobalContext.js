'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, {createContext, useEffect, useState} from "react";

export const  Context = createContext(null)
export const GlobalContext = (props) => {

  // Store
  const [ store, setStore ] = useState({
    session : {},
  })

  // Actions 
  const [actions, setActions] = useState({

    getSession: async () => {
      const supabase = createClientComponentClient()    
      const { data } = await supabase.auth.getSession()
      if(data.session){
        setStore( prevStore => ({ ...prevStore, session: data.session }))
      }else{
        console.log('Context message: anonimous session running')
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