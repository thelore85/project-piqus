
//components
import CallToActionButtons from '../Buttons/CallToActionButtons'

export default function Hero() {
  return (
    <section id='hero' className="dark-bg min-vh-100 p-3 text-center d-flex justify-content-center align-items-center " style={{ backgroundImage : 'url(/img/home/hero_bg.jpg)', backgroundSize : 'cover', backgroundPosition : 'center'}}>
    <div className="container text-white">

      <div className="">
        <h1 className="h1 fw-bolder mb-2" style={{fontSize : '4rem'}}>Think Big. Think Web.</h1>
        <p className=" h5 lh-lg fw-light  mb-5">Sviluppo Web. E-commerce. Marketing Online.</p>
        <CallToActionButtons />
      </div>

    </div>
  </section>
  )
}


