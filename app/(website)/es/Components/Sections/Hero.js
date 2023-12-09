// Componentes
import CallToActionButtons from '../Buttons/CallToActionButtons'

export default function Hero() {
  return (
    <section id='hero' className="dark-bg min-vh-100 p-3 text-center d-flex justify-content-center align-items-center " style={{ backgroundImage: 'url(/img/home/hero_bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container text-white">

        <div className="">
          <h1 className="h1 fw-bolder mb-2" style={{ fontSize: '4rem' }}>Piensa en grande. Piensa en la web.</h1>
          <p className="h5 lh-lg fw-light  mb-5">Desarrollo web. Comercio electrónico. Publicidad online.</p>
          <CallToActionButtons size={'md'} />
        </div>

      </div>
    </section>
  )
}
