import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faRectangleAd } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faCompassDrafting } from '@fortawesome/free-solid-svg-icons'

// Componenti
import Link from 'next/link'
import CallToActionButtons from '../Buttons/CallToActionButtons'

export default function Features() {
  return (
    <section id="services" className="px-3 py-5 min d-flex justify-content-center align-items-center text-white" style={{ minHeight: '75%', backgroundColor: 'rgb(2, 13, 29)' }}>

      <div className="container">
        <div className="row row-cols-1 row-cols-lg-2 g-5">

          <div className="col d-flex flex-column align-items-start gap-2">
            <h2 className="fw-bold h1">Il web ti sta aspettando.</h2>
            <p className=" fw-lighter"><FontAwesomeIcon icon={faCheck} className="me-2" />Progetta il tuo Sito Web</p>
            <p className=" fw-lighter"><FontAwesomeIcon icon={faCheck} className="me-2" />Sviluppa l&#39;App  dei tuoi sogni</p>
            <p className=" fw-lighter"><FontAwesomeIcon icon={faCheck} className="me-2" />Scegli la migliore strategia pubblicitaria online</p>

            <div className="d-none d-sm-block">
              <CallToActionButtons size={'sm'}/>
            </div>

          </div>

          <div className="col">
            <div className="row row-cols-1 row-cols-sm-2 g-4">


              <div className="col">
                <Link href="/it/web-developing" >
                  <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faLaptopCode} className="me-2" /> Sito Web</h4>
                  <p className="fw-lighter small d-none d-sm-block">Crea una presenza online accattivante con i nostri siti eleganti, reattivi e user-friendly.</p>
                </Link>
              </div>


              <div className="col">
                <Link href="/it/marketing-online" >
                  <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faRectangleAd} className="me-2" /> Pubblicità</h4>
                  <p className="fw-lighter small d-none d-sm-block">Aumenta i clienti con campagne mirate per ottenere visibilità online.</p>
                </Link>
              </div>

              <div className="col">
                <Link href="/it/web-developing" >
                  <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faLaptopCode} className="me-2" /> E-commerce</h4>
                  <p className="fw-lighter small d-none d-sm-block">Lancia il tuo negozio online progettato per aumentare le vendite.</p>
                </Link>
              </div>

              <div className="col">
                <Link href="/it/marketing-online" >
                  <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faPenToSquare} className="me-2" /> SEO</h4>
                  <p className="fw-lighter small d-none d-sm-block">Scala le classifiche di ricerca e aumenta il traffico con strategie SEO personalizzate.</p>
                </Link>
              </div>

              <div className="col">
                <Link href="/it/web-developing" >
                  <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faLaptopCode} className="me-2" /> Applicazioni Web</h4>
                  <p className="fw-lighter small d-none d-sm-block">Realizza una Web App su misura con funzionalità specifiche per il tuo business.</p>
                </Link>
              </div>

              <div className="col">
                <Link href="/it/marketing-online">
                  <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faCompassDrafting} className="me-2" />Analytics</h4>
                  <p className="fw-lighter small d-none d-sm-block">Eleva le prestazioni del tuo sito misurando i dati con Google Analytics.</p>
                </Link>
              </div>

              <div className="d-sm-none">
                <CallToActionButtons />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
