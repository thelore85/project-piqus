import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'


// Components
import Image from "next/image";
import meta from '@/public/img/marketingonline/meta-orizontal.png'
import ig from '@/public/img/marketingonline/ig.png'



export default function Social() {
  return (
    <section id="ecommerce" className="bg-light d-flex justify-content-center align-items-center pt-5 px-4">
      <div className="container text-dark py-4" style={{ maxWidth: '1000px' }}>

        <div className="row d-flex align-items-center border-bottom g-2 g-md-5">

          <div className="col-md-3 text-center d-none d-sm-block">
            <Image alt="meta" src={ig} width={200} className="d-block m-auto mb-3" />
          </div>

          <div className="col-md-9 mb-3">
            <h2 className="h1 fw-bolder mb-4" style={{ fontSize: "2.3rem", textWrap:"balance" }}>Pubblicità sui <span className="" style={{ color: "purple" }}>Social Media</span></h2>
            
            <div className="row">
              <div className="col-12 col-md-8">
                <p className="fw-bold h5 mb-3">
                  Massimizza i tuoi obiettivi con annunci impattanti sulle principali piattaforme social.
                </p>
                <p className=" d-none d-sm-block" style={{ textWrap:"pretty" }} >
                  Sviluppa la tua presenza online con una strategia social su misura.
                  Raggiungi la tua audience e guadagna rilevanza e autorevolezza.
                </p>
              </div>
            <div className="col-12 col-md-4">
                <ul className=" h6 list-unstyled ">
                  <li className="mb-3"><FontAwesomeIcon icon={faCircleCheck} className="me-2 " /> Fan Acquisition</li>
                  <li className="mb-3"><FontAwesomeIcon icon={faCircleCheck} className="me-2 " />  Visualizzazioni Profilo</li>
                  <li className="mb-3"><FontAwesomeIcon icon={faCircleCheck} className="me-2 " />  Traffico al Sito</li>
                  <li className="mb-3"><FontAwesomeIcon icon={faCircleCheck} className="me-2 " />  Prenotazioni e contatti</li>
                  <li className="mb-3"><FontAwesomeIcon icon={faCircleCheck} className="me-2 " />  Vendite online</li>
                </ul>
              </div>
            </div>
        
            <Image alt="meta" src={meta} width={300} className="d-block my-4" />
          </div>
        </div>

      </div>
    </section>
  )
}
