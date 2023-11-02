import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Avatar from './Avatar';
import Navigation from './Navigation';


///////////////////////////
// component
export default function NavbarLogIn({session}) {

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm " aria-label="Eleventh navbar example">
      <div className="container">

          <div>
            <Link className="navbar-brand fs-4 me-4 d-inline-block" href="/">
              <FontAwesomeIcon icon={faLaptopCode} className="text-primary rounded me-3"/><span>PIQUS</span>
            </Link>
          </div>

          <div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarsExample09">
            <Navigation />
            <Avatar session={session}/>
          </div>

      </div>
    </nav>

    </>
  )
}
