///////////////////////////////////////////////
// delat ticket from db


import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import {NextResponse} from 'next/server'
import { cookies } from 'next/headers'
export const dynamic = 'force-dynamic'


export async function DELETE(request) {
  console.log('API REQUEST: api/tickets/delete')

  const id = await request.json()
  const supabase = createRouteHandlerClient({cookies})
  const {error} = await supabase
  .from('pj_promo_service')
  .delete()
  .eq('id', id)

  return NextResponse.json({ error })
}