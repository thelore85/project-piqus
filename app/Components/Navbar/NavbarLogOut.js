'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useEffect} from 'react';


///////////////////////////////////////
//components
import Dropdown from './Dropdown';
import StartNow from '../CallToAction/StartNow';
import Whatsapp from '@/app/Components/CallToAction/Whatsap'
import Image from 'next/image';
import logo from '@/public/img/logo/piqus-logo-white.png'




export default function NavbarLogOut() {

    // import bootstrap 5 javascript
    useEffect(() => {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

  return (


    <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm " aria-label="Eleventh navbar example">
      <div className="container">

          <div>
            <Link className="navbar-brand fs-4 me-4 d-inline-block" href="/">
            <Image src={logo} alt="Piqus" width="30" className="text-primary rounded me-3"/><span>PIQUS</span>
              
            </Link>
          </div>

          <div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarsExample09">
            <Dropdown />
            <StartNow size={"sm"}/>
            <Whatsapp size={"sm"}/>
          </div>

      </div>
    </nav>



  )
}
