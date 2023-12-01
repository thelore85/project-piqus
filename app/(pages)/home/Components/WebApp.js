import Image from "next/image";
import wpLogo from '@/public/img/home/wp-logo.png'
import wcLogo from '@/public/img/home/wc-logo.jpg'

export default function WebApp() {
  return (
    <section id="webapp" className="bg-black d-flex justify-content-center align-items-center py-5 px-4">
      <div className="container text-white" style={{maxWidth:'1000px'}}>

        <h2 className=" text-decoration-underline small mb-4">Web Application</h2>
        <h3 className="h1 fw-bolder mb-3"> Extend your <span className="" style={{color :'purple'}}>App</span> Functionalities</h3>

        <div className="row py-4 g-4 align-items-center">

          <div className="col-md-9 mb-3">
            <p className="h4">Empower your digital presence with a Web App.</p>
            <p className="fw-lighter d-none d-sm-block small">Unlock advanced functionalities, from Single Page and Progressive Web Apps to Functional Components. Integrate RESTful APIs or build your app from scratch, ensuring tailored solutions for your needs.</p>
          </div>


          <div className="col-md-3 mb-3">
            <div className="h6">
              <p>✓ Single Page App</p>
              <p>✓ Progressive Web App</p>
              <p>✓ Funcional Components</p>
              <p>✓ RESTful API Integration</p>
            </div>
          </div>

        </div>


      </div>
    </section>
  )
}
