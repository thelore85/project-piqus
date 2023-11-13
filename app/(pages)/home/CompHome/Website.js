import Image from "next/image";
import NextLogo from '@/public/img/home/next-logo.png'

export default function Website() {
  return (
    <section id="application" className="bg-black d-flex justify-content-center align-items-center py-5 px-4">
      <div className="container text-white" style={{maxWidth:'1000px'}}>

        <h2 className=" text-decoration-underline small mb-4">Website</h2>
        <h3 className="h1 fw-bolder mb-5 text-en"><span className="text-success">Websites</span> That Performs</h3>

        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-2">
            <Image alt="wordpress" src={NextLogo} width='100' className=" d-block m-auto"/>
          </div>

          <div className="col-sm-10">
            <div className=" rounded-4 border p-3">
              <p className=" h6 fw-bold mb-0">Ensure that you stay up-to-date with the latest practices and technologies.</p>
              <p className="fw-lighter small mb-0">Next.js is the framework recommended by React team. It brings out the best in web performance, SEO, security and more</p>
            </div>
          </div>
        </div>

        <div className="row py-5 g-4">

          <div className="col-md-4 mb-3">
            <div className="p-3 bg-white rounded-1 text-dark">
              <h5 className="h5 fw-bolder">SPEED</h5>
              <p className="fw-bolder small">Fast Load On All Devices.</p>
              <p className="fw-light small m-0">Next.js employs Server Side Render, resulting in faster page loads and interaction speed.</p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="p-3 bg-white rounded-1 text-dark">
              <h5 className="h5 fw-bolder">SEO</h5>
              <p className="fw-bolder small">Search Engine Optimization.</p>
              <p className="fw-light small m-0">Pages are server redered, ensuring that search engines receive HTML for indexing.</p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="p-3 bg-white rounded-1 text-dark">
              <h5 className="h5 fw-bolder">SECURITY</h5>
              <p className="fw-bolder small">A safe website is a good website.</p>
              <p className="fw-light small m-0">Server-side rendering is less vulnerable and reduce the risk of Cross-Site Scripting (XSS) attacks.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
