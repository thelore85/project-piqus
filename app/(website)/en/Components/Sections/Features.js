import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faRectangleAd } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faCompassDrafting } from '@fortawesome/free-solid-svg-icons'


//components
import Link from 'next/link'
import StartNow from '../Buttons/StartNow'
import Whatsapp from '../Buttons/Whatsapp'
import CallToActionButtons from '@/app/(website)/it/Components/Buttons/CallToActionButtons'


export default function Features() {
  return (

  <section id="services" className="px-3 py-5 min d-flex justify-content-center align-items-center text-white" style={{minHeight : '75%',  backgroundColor: 'rgb(2, 13, 29)'}} >

  <div className="container">
    <div className="row row-cols-1 row-cols-lg-2 g-5">

      <div className="col d-flex flex-column align-items-start gap-2">
        <h2 className="fw-bold h1">Grow your business, online.</h2>
        <p className=" fw-lighter"><FontAwesomeIcon icon={faCheck} className="me-2"/> Chose the best web solutions to develop your Website or App.</p>
        <p className=" fw-lighter"><FontAwesomeIcon icon={faCheck} className="me-2"/> Pic the latest marketing technology and scale up your business.</p>

        <div className="d-none d-sm-block">
          <CallToActionButtons size={'sm'}/>
        </div>

      </div>

      <div className="col">
        <div className="row row-cols-1 row-cols-sm-2 g-4">

    
        <div className="col">
          <Link href="/en/web-developing" >
            <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faLaptopCode} className="me-2" /> Website</h4>
            <p className="fw-lighter small d-none d-sm-block">Create a captivating online presence with our elegant, responsive, and user-friendly sites.</p>
          </Link>
        </div>

        <div className="col">
          <Link href="/en/online-marketing" >
            <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faRectangleAd} className="me-2" /> Advertising</h4>
            <p className="fw-lighter small d-none d-sm-block">Increase customers with targeted campaigns to gain online visibility.</p>
          </Link>
        </div>

        <div className="col">
          <Link href="/en/web-developing" >
            <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faLaptopCode} className="me-2" /> E-commerce</h4>
            <p className="fw-lighter small d-none d-sm-block">Launch your online store designed to increase sales.</p>
          </Link>
        </div>

        <div className="col">
          <Link href="/en/online-marketing" >
            <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faPenToSquare} className="me-2" /> SEO</h4>
            <p className="fw-lighter small d-none d-sm-block">Scale search rankings and increase traffic with customized SEO strategies.</p>
          </Link>
        </div>

        <div className="col">
          <Link href="/en/web-developing" >
            <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faLaptopCode} className="me-2" /> Web Applications</h4>
            <p className="fw-lighter small d-none d-sm-block">Create a tailor-made Web App with specific functionalities for your business.</p>
          </Link>
        </div>

        <div className="col">
          <Link href="/en/online-marketing">
            <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faCompassDrafting} className="me-2" /> Analytics</h4>
            <p className="fw-lighter small d-none d-sm-block">Enhance your site&#39;s performance by measuring data with Google Analytics.</p>
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
