import Image from "next/image";
import wpLogo from '@/public/img/home/wp-logo.png'
import wcLogo from '@/public/img/home/wc-logo.jpg'

export default function Ecommerce() {
  return (
    <section id="ecommerce" className="bg-black d-flex justify-content-center align-items-center py-5 px-4">
      <div className="container text-white pt-4" style={{ maxWidth: '1000px' }}>

        <h2 className="text-decoration-underline small mb-4">Comercio Electrónico</h2>
        <h3 className="h1 fw-bolder mb-3">Lleva tu <span className="text-primary">Tienda Online</span> al siguiente nivel</h3>

        <div className="row border-bottom py-4 g-4">

          <div className="col-md-3 mb-3">
            <div className="h5">
              <p>✓ Pagos online</p>
              <p>✓ Gestión de pedidos</p>
              <p>✓ Gestión de inventario</p>
              <p>✓ Optimización SEO</p>
              <p>✓ GDPR</p>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <p>Una potente solución de comercio electrónico con todas las funciones necesarias para iniciar tu negocio hoy mismo.</p>
            <p className="fw-lighter d-none d-sm-block">Pagos en línea para transacciones seguras, seguimiento y gestión de pedidos, optimización SEO para una mejor visibilidad y cumplimiento de GDPR para proteger tus datos.</p>
          </div>
          <div className="col-md-3 text-center mb-3">
            <Image alt="wordpress" src={wpLogo} width='100' className="d-block m-auto mb-3" />
            <Image alt="woo-Commerce" src={wcLogo} width='150' />
          </div>

        </div>

      </div>
    </section>
  )
}
