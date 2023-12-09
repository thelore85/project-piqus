import Image from "next/image";
import nextLogo from '@/public/img/home/next-logo.png'
import reactLogo from '@/public/img/home/react.png'

export default function Website() {
  return (
    <section id="website" className="bg-black d-flex justify-content-center align-items-center py-5 px-4">
      <div className="container text-white border-bottom" style={{ maxWidth: '1000px' }}>

        <h2 className="text-decoration-underline small mb-4">Sitio Web</h2>
        <h3 className="h1 fw-bolder mb-5 text-en">Construye un <span className="text-success">Sitio Web</span> de Alto Rendimiento</h3>

        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-3">
            <div className="text-center mb-4 mb-md-0">
              <Image alt="Next.js" src={nextLogo} width='100' className="" />
              <Image alt="React.js" src={reactLogo} width='100' className="" />
            </div>
          </div>

          <div className="col-md-9">
            <div className="rounded-2 border p-3">
              <p className="h5 fw-bold mb-2 mobile_hide">Mantente actualizado sobre las últimas tecnologías.</p>
              <p className="fw-lighter small mb-0">Next.js es el framework recomendado por el equipo de React. Ofrece lo mejor en rendimiento web, optimización para motores de búsqueda (SEO), seguridad y más.</p>
            </div>
          </div>
        </div>

        <div className="row py-5 g-4">

          <div className="col-md-4 mb-3">
            <div className="p-3 bg-white rounded-1 text-dark">
              <h5 className="h5 fw-bolder">VELOCIDAD</h5>
              <p className="fw-bolder small">Rápido en Todos los Dispositivos.</p>
              <p className="fw-light small m-0">Garantizamos tiempos de carga de página y velocidad de interacción más rápidos.</p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="p-3 bg-white rounded-1 text-dark">
              <h5 className="h5 fw-bolder">SEO</h5>
              <p className="fw-bolder small">Optimización para Google.</p>
              <p className="fw-light small m-0">Aseguramos que los motores de búsqueda reciban HTML para la indexación.</p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="p-3 bg-white rounded-1 text-dark">
              <h5 className="h5 fw-bolder">SEGURIDAD</h5>
              <p className="fw-bolder small">Seguridad del Servidor</p>
              <p className="fw-light small m-0">El renderizado del lado del servidor es menos vulnerable y reduce el riesgo de ataques de Cross-Site Scripting (XSS).</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
