import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faRectangleAd } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faCompassDrafting } from '@fortawesome/free-solid-svg-icons'

// Componenti
import Link from 'next/link'
import StartNow from '../Buttons/StartNow'
import Whatsapp from '../Buttons/Whatsapp'
import CallToActionButtons from '../Buttons/CallToActionButtons'

export default function Features() {
  return (
    <section id="services" className="px-3 py-5 min d-flex justify-content-center align-items-center text-white" style={{ minHeight: '75%', backgroundColor: 'rgb(2, 13, 29)' }}>

      <div className="container">
        <div className="row row-cols-1 row-cols-lg-2 g-5">

          <div className="col d-flex flex-column align-items-start gap-2">
            <h2 className="fw-bold h1">Fai crescere la tua attività, online.</h2>
            <p className=" fw-lighter"><FontAwesomeIcon icon={faCheck} className="me-2" /> Scegli le migliori soluzioni web per la tua attività e vai online.</p>
            <p className=" fw-lighter"><FontAwesomeIcon icon={faCheck} className="me-2" /> Scegli le ultime tecnologie di marketing e scala la tua attività.</p>

            <div className="d-none d-sm-block">
              <CallToActionButtons />
            </div>

          </div>

          <div className="col">
            <div className="row row-cols-1 row-cols-sm-2 g-4">


              <div className="col">
                <Link href="#website" >
                  <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faLaptopCode} className="me-2" /> Sito Web</h4>
                  <p className="fw-lighter small d-none d-sm-block">Trasforma la tua visione in una presenza online accattivante con i nostri servizi di sviluppo web esperti. Siti web eleganti, reattivi e orientati all'utente.</p>
                </Link>
              </div>


              <div className="col">
                <Link href="#marketing" >
                  <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faRectangleAd} className="me-2" /> Pubblicità</h4>
                  <p className="fw-lighter small d-none d-sm-block">Aumenta la tua portata e l'impatto attraverso una strategia di pubblicità online. Campagne mirate, creatività coinvolgenti e risultati misurabili per una visibilità digitale ottimale.</p>
                </Link>
              </div>

              <div className="col">
                <Link href="#ecommerce" >
                  <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faLaptopCode} className="me-2" /> E-commerce</h4>
                  <p className="fw-lighter small d-none d-sm-block">Lancia un prospero negozio online con il nostro sviluppo di e-commerce. Transazioni senza soluzione di continuità, design accattivante e funzionalità studiate per aumentare le vendite e l'interazione.</p>
                </Link>
              </div>

              <div className="col">
                <Link href="#marketing" >
                  <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faPenToSquare} className="me-2" /> SEO</h4>
                  <p className="fw-lighter small d-none d-sm-block">Aumenta la tua visibilità online con la nostra esperienza in SEO. Strategie personalizzate per scalare le classifiche di ricerca, aumentare il traffico organico e valorizzare la tua presenza digitale.</p>
                </Link>
              </div>

              <div className="col">
                <Link href="#webapp" >
                  <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faLaptopCode} className="me-2" /> Applicazioni Web</h4>
                  <p className="fw-lighter small d-none d-sm-block">Potenzia la tua attività con applicazioni web personalizzate. Dalla concezione all'implementazione, creiamo soluzioni dinamiche per un'esperienza utente ottimale e processi razionalizzati.</p>
                </Link>
              </div>

              <div className="col">
                <Link href="#marketing">
                  <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faCompassDrafting} className="me-2" /> Tecnologia di Marketing</h4>
                  <p className="fw-lighter small d-none d-sm-block">Sfrutta l'analisi per decisioni basate sui dati e il CRM per l'interazione con i clienti. Le nostre soluzioni di tecnologia marketing ottimizzano le prestazioni, le conversioni e le relazioni con i clienti.</p>
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
