import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faRectangleAd } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faCompassDrafting } from '@fortawesome/free-solid-svg-icons'

// Componentes
import Link from 'next/link'
import CallToActionButtons from '../Buttons/CallToActionButtons'

export default function Features() {
  return (
    <section id="services" className="px-3 py-5 min d-flex justify-content-center align-items-center text-white" style={{ minHeight: '75%', backgroundColor: 'rgb(2, 13, 29)' }}>

      <div className="container">
        <div className="row row-cols-1 row-cols-lg-2 g-5">

          <div className="col d-flex flex-column align-items-start gap-2">
            <h2 className="fw-bold h1">Haz crecer tu negocio, online.</h2>
            <p className="fw-lighter"><FontAwesomeIcon icon={faCheck} className="me-2" />Desarrolla la mejor Web y App por tu tienda online.</p>
            <p className="fw-lighter"><FontAwesomeIcon icon={faCheck} className="me-2" />Elige las últimas tecnologías de marketing para tu negocio.</p>

            <div className="d-none d-sm-block">
              <CallToActionButtons size={'sm'}/>
            </div>

          </div>

          <div className="col">
            <div className="row row-cols-1 row-cols-sm-2 g-4">


            <div className="col">
              <Link href="/es/desarrollo-web" >
                <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faLaptopCode} className="me-2" /> Sitio Web</h4>
                <p className="fw-lighter small d-none d-sm-block">Crea una presencia en línea cautivadora con nuestros sitios elegantes, receptivos y fáciles de usar.</p>
              </Link>
            </div>

            <div className="col">
              <Link href="/es/marketing-en-linea" >
                <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faRectangleAd} className="me-2" /> Publicidad</h4>
                <p className="fw-lighter small d-none d-sm-block">Atrae clientes con campañas dirigidas para obtener visibilidad en línea.</p>
              </Link>
            </div>

            <div className="col">
              <Link href="/es/desarrollo-web" >
                <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faLaptopCode} className="me-2" /> Comercio Electrónico</h4>
                <p className="fw-lighter small d-none d-sm-block">Lanza tu tienda en línea diseñada para aumentar las ventas.</p>
              </Link>
            </div>

            <div className="col">
              <Link href="/es/marketing-en-linea" >
                <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faPenToSquare} className="me-2" /> SEO</h4>
                <p className="fw-lighter small d-none d-sm-block">Escala en los rankings de búsqueda y aumenta el tráfico con estrategias de SEO personalizadas.</p>
              </Link>
            </div>

            <div className="col">
              <Link href="/es/desarrollo-web" >
                <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faLaptopCode} className="me-2" /> Aplicaciones Web</h4>
                <p className="fw-lighter small d-none d-sm-block">Crea una aplicación web a medida con funcionalidades específicas para tu negocio.</p>
              </Link>
            </div>

            <div className="col">
              <Link href="/es/marketing-en-linea">
                <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faCompassDrafting} className="me-2" /> Analítica</h4>
                <p className="fw-lighter small d-none d-sm-block">Mejora el rendimiento de tu sitio midiendo datos con Google Analytics.</p>
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
