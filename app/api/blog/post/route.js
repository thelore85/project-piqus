//////////////////////////////////////////////////
// create a new post in DB

import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import {NextResponse} from 'next/server'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic' // force db refresh


export async function POST(request) {
  console.log('API REQUEST: api/blog/post')

  const post = await request.json()
  const supabase = createRouteHandlerClient({cookies})
  const {data: {session}} = await supabase.auth.getSession()   // get the current user session
  const {data, error} = await supabase.from('piqus_blog_post')  // insert the data in supabase
  .insert({
    ...post, // get all info from the form 
    // user_email: session.user.email,
    // user_id: session.user.id
  })
    .select() // ask back the obj from the DB
    .single() // make it an obj (not an array [{ tiket }])

  return NextResponse.json({data, error}) // send back data to the api call
}