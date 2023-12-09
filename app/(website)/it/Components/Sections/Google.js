import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

// Components
import Image from "next/image";
import google from '@/public/img/marketingonline/google-icon-ver.png'
import googleMobile from '@/public/img/marketingonline/google-icon.png'

export default function Google() {
  return (
    <section id="ecommerce" className="bg-light d-flex justify-content-center align-items-center pt-5 px-4">
      <div className="container text-dark py-4" style={{ maxWidth: '1000px' }}>

        <div className="row d-flex align-items-center border-bottom g-2 g-md-5">

          <div className="col-md-9 m-0">
            <h2 className="h1 fw-bolder mb-4" style={{ fontSize: "2.3rem", textWrap:"balance"}}><span className="text-primary">Google</span> Ads</h2>
          

            <div className="row mb-3">
            <div className="col-12 col-md-8">
              <p className="fw-bold h5 mb-3">
                Annunci personalizzati sul web per ottenere risultati di business reali.
              </p>
              <p className="d-none d-sm-block">
              Migliora le performance del tuo sito web, raggiungendo potenziali clienti in modo efficiente e 
              aumentando la tua visibilità online.
            </p>
            </div>
            <div className="col-12 col-md-4">
              <ul className=" h6 list-unstyled ">
                <li className="mb-3"><FontAwesomeIcon icon={faCircleCheck} className="me-2 " /> Vai in Prima Pagina</li>
                <li className="mb-3"><FontAwesomeIcon icon={faCircleCheck} className="me-2 " /> Traffico al Sito Web</li>
                <li className="mb-3"><FontAwesomeIcon icon={faCircleCheck} className="me-2 " /> Remarketing Efficace</li>
                <li className="mb-3"><FontAwesomeIcon icon={faCircleCheck} className="me-2 " /> Geolocalizzazione</li>
                <li className="mb-3"><FontAwesomeIcon icon={faCircleCheck} className="me-2 " /> Prenotazioni online</li>
              </ul>
            </div>
          </div>

          </div>





          <div className="col-md-3 mb-5 d-none d-sm-block">
            <Image alt="google" src={google} className="rounded-4 shadow w-100 h-100 d-block" />
          </div>

          <div className="col-12 mb-5 d-block d-sm-none">
            <Image alt="google" src={googleMobile} className="rounded-4 shadow w-100 h-100 d-block" />
          </div>

        </div>

      </div>
    </section>
  )
}
