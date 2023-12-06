
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
export const dynamic = 'force-dynamic';

// Components
import StartNow from '../Buttons/StartNow';
import Whatsapp from '../Buttons/Whatsapp';

import Avatar from './Avatar';
import LogoOrizontal from '../Logos/LogoOrizontal';
import LinkNavigation from './LinkNavigation';

export default async function MainNavbar() {

  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm " aria-label="Eleventh navbar example">
      <div className="container">

          <div>
            <LogoOrizontal />
          </div>

          <div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarsExample09">
            <LinkNavigation />

            {data.session ? 
            (<Avatar session={data.session}/>):
            (<><StartNow size={'sm'}/> <Whatsapp size={'sm'}/></>)}
          </div>

      </div>
    </nav>    
  )
}
