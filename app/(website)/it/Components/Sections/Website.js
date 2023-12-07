import Image from "next/image";
import nextLogo from '@/public/img/home/next-logo.png'
import reactLogo from '@/public/img/home/react.png'

export default function Website() {
  return (
    <section id="website" className="bg-black d-flex justify-content-center align-items-center py-5 px-4">
      <div className="container text-white border-bottom" style={{ maxWidth: '1000px' }}>

        <h2 className="text-decoration-underline small mb-4">Sito Web</h2>
        <h3 className="h1 fw-bolder mb-5 text-en">Costruisci un <span className="text-success">Sito Web</span> Performante</h3>

        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-3">
            <div className="text-center mb-4 mb-md-0">
              <Image alt="Next.js" src={nextLogo} width='100' className="" />
              <Image alt="React.js" src={reactLogo} width='100' className="" />
            </div>
          </div>

          <div className="col-md-9">
            <div className="rounded-2 border p-3">
              <p className="h5 fw-bold mb-2 mobile_hide">Resta aggiornato sulle ultime tecnologie.</p>
              <p className="fw-lighter small mb-0">Next.js è il framework raccomandato dal team di React. Porta il meglio delle prestazioni web, dell'ottimizzazione per i motori di ricerca (SEO), della sicurezza e altro ancora.</p>
            </div>
          </div>
        </div>

        <div className="row py-5 g-4">

          <div className="col-md-4 mb-3">
            <div className="p-3 bg-white rounded-1 text-dark">
              <h5 className="h5 fw-bolder">VELOCITÀ</h5>
              <p className="fw-bolder small">Veloce su Tutti i Dispositivi.</p>
              <p className="fw-light small m-0">Next.js utilizza il rendering lato server, garantendo tempi di caricamento delle pagine e velocità di interazione più veloci.</p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="p-3 bg-white rounded-1 text-dark">
              <h5 className="h5 fw-bolder">SEO</h5>
              <p className="fw-bolder small">Ottimizzazione per i Motori di Ricerca.</p>
              <p className="fw-light small m-0">Le pagine vengono renderizzate lato server, garantendo che i motori di ricerca ricevano HTML per l'indicizzazione.</p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="p-3 bg-white rounded-1 text-dark">
              <h5 className="h5 fw-bolder">SICUREZZA</h5>
              <p className="fw-bolder small">Sicurezza del Server</p>
              <p className="fw-light small m-0">Il rendering lato server è meno vulnerabile e riduce il rischio di attacchi di Cross-Site Scripting (XSS).</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
