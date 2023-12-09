import Image from "next/image";
import wpLogo from '@/public/img/home/wp-logo.png'
import wcLogo from '@/public/img/home/wc-logo.jpg'

export default function WebApp() {
  return (
    <section id="webapp" className="bg-black d-flex justify-content-center align-items-center py-5 px-4">
      <div className="container text-white" style={{ maxWidth: '1000px' }}>

        <h2 className="text-decoration-underline small mb-4">Aplicación Web</h2>
        <h3 className="h1 fw-bolder mb-3">Expande las Funcionalidades de tu <span className="" style={{ color: 'purple' }}>Aplicación</span></h3>

        <div className="row py-4 g-4 align-items-center">

          <div className="col-md-9 mb-3">
            <p className="h4">Potencia tu presencia digital con una aplicación web.</p>
            <p className="fw-lighter d-none d-sm-block small">Desbloquea funciones avanzadas, desde Single Page y Progressive Web Apps hasta Componentes Funcionales. Integra API RESTful o construye tu aplicación desde cero, asegurando soluciones personalizadas para tus necesidades.</p>
          </div>


          <div className="col-md-3 mb-3">
            <div className="h6">
              <p>✓ Aplicación de Página Única</p>
              <p>✓ Progressive Web App</p>
              <p>✓ Componentes Funcionales</p>
              <p>✓ Integración de API RESTful</p>
            </div>
          </div>

        </div>


      </div>
    </section>
  )
}
