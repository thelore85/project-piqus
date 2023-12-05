import Image from "next/image";
import seo from '@/public/img/marketingonline/seo-strategy.png'

export default function Seo() {
  return (
    <section id="ecommerce" className="bg-light d-flex justify-content-center align-items-center py-5 px-4">
      <div className="container text-dark pt-4" style={{maxWidth:'1000px'}}>

        <div className="row border-bottom g-4">

          <div className="col-md-12 mb-3">
            <h2 className="h1 fw-bolder mb-5"><span className="" style={{color:"green"}}>SEO</span> and Content Creation</h2>
            <h4 className="fw-bold mb-4">Search Engine Optimization - Copywriting - Content Strategy</h4>
            <p className="">Elevate your digital presence From SEO-content strategies to Google Business optimization</p>
            <p className=" d-none d-sm-block">
              From SEO-content strategies to Google Business optimization, ensure a holistic approach to maximize your online impact. 
              Dominate search results with relevant keywords, and establish a robust online identity through our integrated indexing strategies.
            </p>
          </div>

          <div className=" col-12 mb-5" >
            <Image alt="google" src={seo} className=" rounded-4 shadow w-100 h-100 d-block"/>
          </div>

        </div>

      </div>
    </section>
  )
}
