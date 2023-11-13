import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link";

/////////////////////////////
// components
import Navigation from '../Navbar/Navigation';
import Whatsapp from '../CallToAction/Whatsap';
import StartNow from '../CallToAction/StartNow';

export default function Footer() {
  return (
  <footer className="p-4 bg-black text-white">
    <div className="container py-5">

      <div className="row">

        <div className="col-4 col-md-2 mb-5">
          <h5 className="small">Piqus</h5>
          <Navigation />
        </div>

        <div className="col-4 col-md-2 mb-4">
            <h5 className="small">Contacts</h5>
            <ul className="nav flex-column small">
              <li className="nav-item mb-2 fw-lighter p-0 small"><Link href="https://api.whatsapp.com/send/?phone=393933222446&text&type=phone_number&app_absent=0" target='_blank'>Whatsapp</Link></li>
              <li className="nav-item mb-2 fw-lighter p-0 small"><Link href="https://github.com/thelore85" target='_blank'>GitHub</Link></li>
              <li className="nav-item mb-2 fw-lighter p-0 small"><Link href="https://www.linkedin.com/in/lorenzo-garofalo-digital/" target='_blank'>Linkedin</Link></li>
            </ul>
        </div>

        <div className="col-4 col-md-2 mb-4">
            <h5 className="small">Admin</h5>
            <ul className="nav flex-column small">
              <li className="nav-item mb-2"><Link href="/login" className="fw-lighter p-0 small">Login</Link></li>
              <li className="nav-item mb-2"><Link href="/signup" className="fw-lighter p-0">Signup</Link></li>
              <li className="nav-item mb-2"><Link href="/dashboard" className="fw-lighter p-0">Dashboard</Link></li>
            </ul>
        </div>

        <div className="col-md-2"></div>

        <div className="col-md-4 mb-3 text-center">
          <h5 className="">Think Big. Think Web.</h5>
          <p className="small fw-lighter">Start your web project now!</p>
          <StartNow size={"sm"}/>
          <Whatsapp size={"sm"}/>
        </div>
      </div>

      <div className="d-flex  justify-content-center align-items-center py-4 my-4 border-top">
        <p className="fw-lighter small me-4">© 2023 Piqus, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex fs-3">
          <Link href="https://github.com/thelore85" target='_blank'>
            <FontAwesomeIcon icon={faGithub} className="me-3" />
          </Link>
          <Link href="https://www.linkedin.com/in/lorenzo-garofalo-digital/" target="_blank" >
            <FontAwesomeIcon icon={faLinkedin} className="me-3" />
          </Link>
        </ul>
      </div>

    </div>
  </footer>
  )
}
