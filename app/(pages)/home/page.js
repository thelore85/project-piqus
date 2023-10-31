import Link from 'next/link'

// comeponents
export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Crea la tua promo online, gratis! - PIQUS LEAD',
  description: 'Inizia con una landing page promozianel in grado di cerare un codice sconto',
  icons: { icon: "/img/favicon.ico", shortcut: "/img/favicon.ico", apple: "/img/favicon.ico", other: { rel: "apple-touch-icon-precomposed", url: "/img/favicon.ico", }, },
};

export default async function lead() {

  return (
        <section id='hero' className="dark-bg min-vh-100 p-5 text-center d-flex justify-content-center align-items-center text-white">
          <div className="container">
   
            <div className="mb-5">
              <h1 className="h1 fw-bolder mb-2">Push your business to the web and beyond</h1>
              <p className=" h5 lh-lg fw-lighter  mb-5">Build your web presence. Gain customers and clients for your online business</p>
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
