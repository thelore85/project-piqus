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
            <h2 className="fw-bold h1">Haz crecer tu negocio, en línea.</h2>
            <p className="fw-lighter"><FontAwesomeIcon icon={faCheck} className="me-2" />Desarrolla la mejor estrategia de publicidad online.</p>
            <p className="fw-lighter"><FontAwesomeIcon icon={faCheck} className="me-2" />Elige las últimas tecnologías de marketing para tu negocio.</p>

            <div className="d-none d-sm-block">
              <CallToActionButtons size={'sm'}/>
            </div>

          </div>

          <div className="col">
            <div className="row row-cols-1 row-cols-sm-2 g-4">


              <div className="col">
                <Link href="#website" >
                  <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faLaptopCode} className="me-2" /> Sitio Web</h4>
                  <p className="fw-lighter small d-none d-sm-block">Transforma tu visión en una presencia online atractiva con nuestros servicios de desarrollo web expertos. Sitios web elegantes, receptivos y centrados en el usuario.</p>
                </Link>
              </div>


              <div className="col">
                <Link href="#marketing" >
                  <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faRectangleAd} className="me-2" /> Publicidad</h4>
                  <p className="fw-lighter small d-none d-sm-block">Aumenta tu alcance e impacto a través de una estrategia de publicidad online. Campañas dirigidas, creatividad atractiva y resultados medibles para una visibilidad digital óptima.</p>
                </Link>
              </div>

              <div className="col">
                <Link href="#ecommerce" >
                  <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faLaptopCode} className="me-2" /> E-commerce</h4>
                  <p className="fw-lighter small d-none d-sm-block">Lanza una próspera tienda online con nuestro desarrollo de comercio electrónico. Transacciones sin problemas, diseño atractivo y funciones diseñadas para aumentar las ventas y la interacción.</p>
                </Link>
              </div>

              <div className="col">
                <Link href="#marketing" >
                  <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faPenToSquare} className="me-2" /> SEO</h4>
                  <p className="fw-lighter small d-none d-sm-block">Aumenta tu visibilidad online con nuestra experiencia en SEO. Estrategias personalizadas para escalar en los rankings de búsqueda, aumentar el tráfico orgánico y valorar tu presencia digital.</p>
                </Link>
              </div>

              <div className="col">
                <Link href="#webapp" >
                  <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faLaptopCode} className="me-2" /> Aplicaciones Web</h4>
                  <p className="fw-lighter small d-none d-sm-block">Potencia tu negocio con aplicaciones web personalizadas. Desde la concepción hasta la implementación, creamos soluciones dinámicas para una experiencia de usuario óptima y procesos racionalizados.</p>
                </Link>
              </div>

              <div className="col">
                <Link href="#marketing">
                  <h4 className="fw-semibold mb-2 "><FontAwesomeIcon icon={faCompassDrafting} className="me-2" /> Tecnología de Marketing</h4>
                  <p className="fw-lighter small d-none d-sm-block">Aprovecha el análisis para decisiones basadas en datos y el CRM para la interacción con los clientes. Nuestras soluciones de tecnología de marketing optimizan el rendimiento, las conversiones y las relaciones con los clientes.</p>
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
