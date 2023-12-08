
//components
import CallToActionButtons from '../Buttons/CallToActionButtons'

export default function Title({ title, subtitle }) {
  return (
    <section id='hero' className="dark-bg p-3 text-center d-flex justify-content-center align-items-center mb-5" style={{minHeight: '50vh',  backgroundImage : 'url(/img/home/net-bg-4.jpg)', backgroundSize : 'cover', backgroundPosition : 'center'}}>
    <div className="container text-white">

      <div className="">
        <h1 className="h1 fw-bolder mb-2" style={{fontSize : '4rem'}}>{title}</h1>
        <p className=" h5 lh-lg fw-light  mb-5">{subtitle}</p>
        <div>
          <CallToActionButtons size={'sm'}/>
        </div>
      </div>

    </div>
  </section>
  )
}


