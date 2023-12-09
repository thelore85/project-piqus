import Image from "next/image";
import google from '@/public/img/marketingonline/google-icon-ver.png'
import googleMobile from '@/public/img/marketingonline/google-icon.png'

export default function Google() {
  return (
    <section id="ecommerce" className="bg-light d-flex justify-content-center align-items-center pt-5 px-4">
      <div className="container text-dark p-0" style={{ maxWidth: '1000px' }}>

        <div className="row d-flex align-items-center border-bottom g-2 g-md-5">

          <div className="col-md-9 m-0">
            <h2 className="h1 fw-bolder mb-4" style={{ fontSize: "2.3rem" }}><span className="text-primary">Google</span> Ads</h2>
            <p className="fw-bolder h5 mb-4">
              Campañas online personalizadas para impulsar la presencia en la web y obtener clientes.
            </p>
            <p className="d-none d-sm-block">
              Mejora el rendimiento de tu sitio web, llegando de manera eficiente a posibles clientes. <br />
              Aumenta tu visibilidad online a través de estrategias publicitarias en Google diseñadas para un impacto óptimo.
            </p>
            <p className="fw-light small fst-italic">Búsqueda - Display - Youtube - Maps - Pmax</p>
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
