import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faRectangleAd } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faCompassDrafting } from '@fortawesome/free-solid-svg-icons'


//components
import Link from 'next/link'
import StartNow from '../Buttons/StartNow'
import Whatsapp from '../Buttons/Whatsapp'


export default function Features() {
  return (

  <section id="services" className="px-3 py-5 min d-flex justify-content-center align-items-center text-white" style={{minHeight : '75%',  backgroundColor: 'rgb(2, 13, 29)'}} >

  <div className="container">
    <div className="row row-cols-1 row-cols-lg-2 g-5">

      <div className="col d-flex flex-column align-items-start gap-2">
        <h2 className="fw-bold h1">Grow your business, online.</h2>
        <p className=" fw-lighter"><FontAwesomeIcon icon={faCheck} className="me-2"/> Chose the best web solutions for your business and go live.</p>
        <p className=" fw-lighter"><FontAwesomeIcon icon={faCheck} className="me-2"/>Pic the latest marketing technology and scale up your business.</p>

        <div className="d-none d-sm-block">
          <StartNow />
          <Whatsapp />
        </div>

      </div>

      <div className="col">
        <div className="row row-cols-1 row-cols-sm-2 g-4">

    
          <div className="col">
            <Link href="#website" >
              <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faLaptopCode} className="me-2" /> Website</h4>
              <p className="fw-lighter small d-none d-sm-block">Transform your vision into a compelling online presence with our expert web development services. Sleek, responsive, and user-centric websites.</p>
            </Link>
          </div>


          <div className="col">
            <Link href="#marketing" >
              <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faRectangleAd} className="me-2" />Advertising</h4>
              <p className="fw-lighter small d-none d-sm-block">Amplify your reach and impact through strategic online advertising. Targeted campaigns, compelling creatives, and measurable results for optimal digital visibility.</p>
            </Link>
          </div>

          <div className="col">
            <Link href="#ecommerce" >
              <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faLaptopCode} className="me-2" /> E-commerce</h4>
              <p className="fw-lighter small d-none d-sm-block">Launch a thriving online store with our e-commerce development. Seamless transactions, captivating design, and features tailored to boost sales and engagement.</p>
            </Link>
          </div>

          <div className="col">
            <Link href="#marketing" >
              <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faPenToSquare} className="me-2" />SEO</h4>
              <p className="fw-lighter small d-none d-sm-block">Boost your online visibility with our SEO expertise. Tailored strategies to climb search rankings, increase organic traffic, and elevate your digital presence.</p>
            </Link>
          </div>

          <div className="col">
            <Link href="#webapp" >
              <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faLaptopCode} className="me-2" /> Web Application</h4>
              <p className="fw-lighter small d-none d-sm-block">Empower your business with custom web applications. From concept to implementation, we create dynamic solutions for optimal user experiences and streamlined processes.</p>
            </Link>
          </div>

          <div className="col">
            <Link href="#marketing">
              <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faCompassDrafting} className="me-2" />Marketing Technology</h4>
              <p className="fw-lighter small d-none d-sm-block">Leverage analytics for data-driven decisions and CRM for customer engagement. Our marketing technology solutions optimize performance, conversions, and customer relationships.</p>
            </Link>
          </div>

          <div className="d-sm-none">
          <StartNow />
          <Whatsapp />
        </div>

        </div>
      </div>
    </div>
  </div>
  </section>

  )
}
