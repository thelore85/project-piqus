import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faRectangleAd } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faCompassDrafting } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'

import Link from 'next/link'


export default function Features() {
  return (

  <section id="features" className="px-4 py-5 min d-flex justify-content-center align-items-center bg-black text-white" style={{minHeight : '75%'}}>

  <div className="container">

    {/* <h2 className="pb-2 border-bottom">Features with title</h2> */}

    <div className="row row-cols-1 row-cols-lg-2 g-5 py-5">

      <div className="col d-flex flex-column align-items-start gap-2">
        <h2 className="fw-bold h1">Grow your business, online.</h2>
        <p className=" fw-lighter">Planning to bring your business online? <br/>We can provide the best solution to guide you throgh all the steps.</p>
        <p className=" fw-lighter">Already online? <br/>We can help to scale up with the latest Marketing tecnology, Analytics and CRM tools</p>
        <Link href="/signup">
          <button className="btn btn-primary m-2">Start Now</button>
        </Link>
      </div>

      <div className="col">
        <div className="row row-cols-1 row-cols-sm-2 g-4">

    
          <div className="col">
            <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faLaptopCode} className="me-2" /> Web Developing</h4>
            <p className="fw-lighter">Ecommerce, Simple Website or a personal Blog? Develop your project and go live with a full featured web product.</p>
          </div>
    
          <div className="col">
            <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faRectangleAd} className="me-2" /> Advertising</h4>
            <p className="fw-lighter">Gain web traffic and customers leveraging the online marketing tools available today!</p>
          </div>
    
          <div className="col">
            <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faPenToSquare} className="me-2" /> Content Creation</h4>
            <p className="fw-lighter">Enrich your blog with relevant content, scale SEO rancking and catch the interest of users.</p>
          </div>
    
          <div className="col">
            <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faCreditCard} className="me-2" /> Payment process</h4>
            <p className="fw-lighter">Manage online payments throgh your ecommerce and keep track of your orders.</p>
          </div>

          <div className="col">
            <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faCompassDrafting} className="me-2" />Marketing Technology</h4>
            <p className="fw-lighter">Keep track of your performance and use Analytics and CRM data to make business decision.</p>
          </div>

          <div className="col">
            <h4 className="fw-semibold mb-2"><FontAwesomeIcon icon={faFile} className="me-2"/>Privacy Policy</h4>
            <p className="fw-lighter">Make your platform legal proof, manage the cookie the right way, respect the latest GDPR policy</p>
          </div>


    
      

        </div>
      </div>
    </div>
  </div>
  </section>

  )
}
