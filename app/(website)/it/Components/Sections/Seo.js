import Image from "next/image"
import seo from '@/public/img/marketingonline/seo-strategy.png'

export default function Seo() {
  return (
    <section id="ecommerce" className="bg-light d-flex justify-content-center align-items-center py-5 px-4">
      <div className="container text-dark p-0" style={{ maxWidth: '1000px' }}>

        <div className="row border-bottom g-4">

          <div className="col-md-12 mb-3">
            <h2 className="h1 fw-bolder mb-4" style={{ fontSize: "2.3rem" }}><span className="" style={{ color: "green" }}>SEO</span> e Contenuti</h2>
            <h5 className="fw-bold mb-4">Ottimizzazione per i Motori di Ricerca - Copywriting - Strategie di Contenuto</h5>
            <p>Eleva la tua presenza digitale dalle strategie SEO ai contenuti, fino all'ottimizzazione di Google Business.</p>
            <p className="d-none d-sm-block">
              Dalle strategie SEO ai contenuti, fino all'ottimizzazione di Google Business, assicurati un approccio olistico per massimizzare il tuo impatto online.
              Dominare i risultati di ricerca con parole chiave rilevanti e stabilire un'identità online robusta attraverso le nostre strategie integrate di indicizzazione.
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
