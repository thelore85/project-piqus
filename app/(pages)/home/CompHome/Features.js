import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faRectangleAd } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faCompassDrafting } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'

import Link from 'next/link'

//components
import StartNow from '@/app/Components/CallToAction/StartNow'
import Whatsapp from '@/app/Components/CallToAction/WhatsApp'


export default function Features() {
  return (

  <section id="services" className="px-4 py-5 min d-flex justify-content-center align-items-center bg-black text-white" style={{minHeight : '75%'}}>

  <div className="container">

    <div className="row row-cols-1 row-cols-lg-2 g-5 py-5">

      <div className="col d-flex flex-column align-items-start gap-2">
        <h2 className="fw-bold h1">Grow your business, online.</h2>
        <p className=" fw-lighter">Considering going online? <br />I can study the best solution and guide you through all the steps.</p>
        <p className=" fw-lighter">Already online? <br />I can help you scale up with the latest marketing technology, analytics, and CRM tools.</p>

        <div>
          <StartNow />
          <Whatsapp />
        </div>

      </div>

      <div className="col">
        <div className="row row-cols-1 row-cols-sm-2 g-4">

    
          <div className="col">
            <Link href="#ecommerce" >
              <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faLaptopCode} className="me-2" /> Web Developing</h4>
              <p className="fw-lighter">E-commerce, a simple website, or a personal blog? Develop your project and go live with a fully-featured web product.</p>
            </Link>
          </div>

          <div className="col">
            <Link href="#marketing">
              <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faCompassDrafting} className="me-2" />Marketing Technology</h4>
              <p className="fw-lighter">Keep track of your performance and use Analytics and CRM data to make business decisions.</p>
            </Link>
          </div>
    
          <div className="col">
            <Link href="#marketing" >
              <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faRectangleAd} className="me-2" /> Advertising</h4>
              <p className="fw-lighter">Gain web traffic and attract customers by leveraging the online marketing tools available today!</p>
            </Link>
          </div>
    
          <div className="col">
            <Link href="#marketing" >
              <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faPenToSquare} className="me-2" /> Content Creation</h4>
              <p className="fw-lighter">Enrich your blog with relevant content, improve your SEO ranking, and capture the interest of users.</p>
            </Link>
          </div>
    
          <div className="col">
            <Link href="#ecommerce" >
              <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faCreditCard} className="me-2" /> Payment process</h4>
              <p className="fw-lighter">Manage online payments through your e-commerce and keep track of your orders.</p>
            </Link>
          </div>

          <div className="col">
            <Link href="#ecommerce" >
              <h4 className="fw-semibold mb-2"><FontAwesomeIcon icon={faFile} className="me-2"/>GDPR ready</h4>
              <p className="fw-lighter">Make your platform legally compliant, manage cookies correctly, and adhere to the latest GDPR policies.</p>
            </Link>
          </div>  

        </div>
      </div>
    </div>
  </div>
  </section>

  )
}
