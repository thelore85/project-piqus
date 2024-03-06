
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
export const dynamic = 'force-dynamic';

// Components
import CallToActionButtons from '../Buttons/CallToActionButtons';

import Avatar from './Avatar';
import LogoOrizontal from '../Logos/LogoOrizontal';
import LinkNavigation from './LinkNavigation';
import Link from 'next/link';

export default async function MainNavbar() {

  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm " aria-label="Eleventh navbar example">
      <div className="container">
          
          <div>
            <Link className="navbar-brand fs-4 me-4 d-inline-block" href="/en/home">
              <LogoOrizontal />
            </Link>
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
            (<CallToActionButtons size={'sm'} />)}
          </div>

      </div>
    </nav>    
  )
}
