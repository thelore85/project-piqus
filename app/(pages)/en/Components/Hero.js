import Link from 'next/link'

//components
import StartNow from '@/app/Components/CallToAction/StartNow'
import Whatsapp from '@/app/Components/CallToAction/Whatsap'

export default function Hero() {
  return (
    <section id='hero' className="dark-bg min-vh-100 p-3 text-center d-flex justify-content-center align-items-center " style={{ backgroundImage : 'url(/img/home/hero_bg.jpg)', backgroundSize : 'cover', backgroundPosition : 'center'}}>
    <div className="container text-white">

      <div className="">
        <h1 className="h1 fw-bolder mb-2" style={{fontSize : '4rem'}}>Think Big. Think Web.</h1>
        <p className=" h5 lh-lg fw-light  mb-5">Web Developing. E-commerce. Online Advertising.</p>
        <div>
          <StartNow size={"md"}/>
          <Whatsapp size={"md"}/>
        </div>
      </div>

    </div>
  </section>
  )
}


