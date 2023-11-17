
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"

export async function GET(request){

  console.log('API CALL: blog get')

  const supabase = createRouteHandlerClient({cookies})

  const { data, error } = await supabase
    .from('piqus_blog_post')
    .select()

  return NextResponse.json(data ?? error) // send back data to the api call
}