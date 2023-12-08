import Image from "next/image";
import wpLogo from '@/public/img/home/wp-logo.png'
import wcLogo from '@/public/img/home/wc-logo.jpg'

export default function WebApp() {
  return (
    <section id="webapp" className="bg-black d-flex justify-content-center align-items-center py-5 px-4">
      <div className="container text-white" style={{ maxWidth: '1000px' }}>

        <h2 className="text-decoration-underline small mb-4">Applicazione Web</h2>
        <h3 className="h1 fw-bolder mb-3">Espandi le Funzionalità della tua <span className="" style={{ color: 'purple' }}>App</span></h3>

        <div className="row py-4 g-4 align-items-center">

          <div className="col-md-9 mb-3">
            <p className="h4">Potenzia la tua presenza digitale con un&#39;applicazione web.</p>
            <p className="fw-lighter d-none d-sm-block small">Sblocca funzionalità avanzate, dalle Single Page e Progressive Web Apps ai Componenti Funzionali. Integra API RESTful o costruisci la tua app da zero, garantendo soluzioni personalizzate per le tue esigenze.</p>
          </div>


          <div className="col-md-3 mb-3">
            <div className="h6">
              <p>✓ Single Page App</p>
              <p>✓ Progressive Web App</p>
              <p>✓ Componenti Funzionali</p>
              <p>✓ Integrazione API RESTful</p>
            </div>
          </div>

        </div>


      </div>
    </section>
  )
}
