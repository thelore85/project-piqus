import Link from 'next/link'

export default function Hero() {
  return (
    <section id='hero' className="dark-bg min-vh-100 p-5 text-center d-flex justify-content-center align-items-center text-white" style={{ backgroundImage : 'url(/img/home/hero_bg.jpg)', backgroundSize : 'cover', backgroundPosition : 'center'}}>
    <div className="container">

      <div className="mb-5">
        <h1 className="h1 fw-bolder mb-2" style={{fontSize : '4rem'}}>Think Big. Think Web.</h1>
        <p className=" h5 lh-lg fw-light  mb-5">Build your web presence. Gain customers and clients. Scale your business online.</p>
        {/* <br />Sfrutta i canali digitali per raccogliere i contatti e attivarli con campagne mail.</p> */}
        <Link href="/">
          {/* <button className="btn btn-light border-primary text-primary me-2">Learn More</button> */}
        </Link>
        <Link href="/signup">
          <button className="btn btn-primary m-2">Start Your Project Now</button>
        </Link>
      </div>

    </div>
  </section>
  )
}


