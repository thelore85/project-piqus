import Image from "next/image";
import wpLogo from '@/public/img/home/wp-logo.png'
import wcLogo from '@/public/img/home/wc-logo.jpg'

export default function Ecommerce() {
  return (
    <section id="ecommerce" className="bg-black d-flex justify-content-center align-items-center py-5 px-4">
      <div className="container text-white pt-5 border-bottom">

        <h2 className="h1 fw-bolder mb-3" style={{ textWrap:"pretty" }}>Porta il tuo <span className="text-primary">Negozio Online</span></h2>

        <div className="row border-bottom py-4 g-4">

          <div className="col-md-3 mb-3">
            <div className="h5">
              <p>✓ Pagamenti Online</p>
              <p>✓ Tracciamento Ordini</p>
              <p>✓ Magazzino Web</p>
              <p>✓ Ottimizzato SEO</p>
              <p>✓ Conformità GDPR</p>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <p>Una potente soluzione di e-commerce con tutte le funzionalità necessarie per avviare la tua attività oggi.</p>
            <p className="fw-lighter d-none d-sm-block">Pagamenti online per transazioni sicure, tracciamento e gestione degli ordini, ottimizzazione SEO per una migliore visibilità e conformità GDPR per proteggere i tuoi dati.</p>
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
