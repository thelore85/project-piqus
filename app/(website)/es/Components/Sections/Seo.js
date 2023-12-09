import Image from "next/image"
import seo from '@/public/img/marketingonline/seo-strategy.png'

export default function Seo() {
  return (
    <section id="ecommerce" className="bg-light d-flex justify-content-center align-items-center py-5 px-4">
      <div className="container text-dark p-0" style={{ maxWidth: '1000px' }}>

        <div className="row border-bottom g-4">

          <div className="col-md-12 mb-3">
            <h2 className="h1 fw-bolder mb-4" style={{ fontSize: "2.3rem" }}><span className="" style={{ color: "green" }}>SEO</span> y Contenido</h2>
            <h5 className="fw-bold mb-4">Optimización para Motores de Búsqueda - Copywriting - Estrategias de Contenido</h5>
            <p>Eleva tu presencia digital desde estrategias de SEO hasta contenido, incluso hasta la optimización de Google Business.</p>
            <p className="d-none d-sm-block">
              Desde estrategias de SEO hasta contenido, incluso hasta la optimización de Google Business, asegúrate de tener un enfoque holístico para maximizar tu impacto en línea.
              Domina los resultados de búsqueda con palabras clave relevantes y establece una identidad en línea sólida a través de nuestras estrategias integradas de indexación.
            </p>
          </div>

          <div className="col-12 mb-5">
            <Image alt="google" src={seo} className="rounded-4 shadow w-100 h-100 d-block" />
          </div>

        </div>

      </div>
    </section>
  )
}
