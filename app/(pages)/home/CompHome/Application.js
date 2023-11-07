import Image from "next/image";
import NextLogo from '@/public/img/home/next-logo.png'

export default function Application() {
  return (
    <section id="application" className="bg-black d-flex justify-content-center align-items-center py-5 px-4" style={{ minHeight:'70%'}}>
      <div className="container text-white" style={{maxWidth:'1000px'}}>

        <h2 className=" text-decoration-underline small mb-4">Web Application</h2>
        <h3 className="h1 fw-bolder mb-5 text-en">Take care of <span className="text-success">Web Performance</span></h3>

        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-2">
            <Image alt="wordpress" src={NextLogo} width='150' className=" d-block m-auto mb-3"/>
          </div>

          <div className="col-sm-10">
            <div className=" rounded-5 border p-4">
              <h4 className="text-decoration-underline h6">Next.js</h4>
              <p className="fw-lighter small">Next.js is the framework recommended by the Meta developers in the React community. Next.js brings out the best in web performance, SEO, and security, ensuring that you stay consistently up-to-date with the latest practices and technologies.</p>
            </div>
          </div>
        </div>

        <div className="row py-5 g-4">

          <div className="col-md-4 mb-3">
            <div className="p-3 bg-white rounded-1 text-dark">
              <h5 className="h5 fw-bolder">SPEED</h5>
              <p className="fw-bolder small">Fast Load On All Devices.</p>
              <p className="fw-light small">Next.js employs Server Side Render to generate pages on the server, resulting in faster initial page loads and improved perceived speed.</p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="p-3 bg-white rounded-1 text-dark">
              <h5 className="h5 fw-bolder">SEO</h5>
              <p className="fw-bolder small">Search Engine Optimization.</p>
              <p className="fw-light small">Pages are pre-rendered on the server, reducing client-side rendering and ensuring that search engines receive HTML for indexing.</p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="p-3 bg-white rounded-1 text-dark">
              <h5 className="h5 fw-bolder">SECURITY</h5>
              <p className="fw-bolder small">A safe website is a good website.</p>
              <p className="fw-light small">Server-side rendering reduce the risk of Cross-Site Scripting (XSS) attacks, as server-side rendering is less vulnerable to malicious scripts.</p>
            </div>
          </div>

        </div>


      </div>
    </section>
  )
}
