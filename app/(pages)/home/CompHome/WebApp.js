import Image from "next/image";
import wpLogo from '@/public/img/home/wp-logo.png'
import wcLogo from '@/public/img/home/wc-logo.jpg'

export default function WebApp() {
  return (
    <section id="ecommerce" className="bg-black d-flex justify-content-center align-items-center py-5 px-4">
      <div className="container text-white" style={{maxWidth:'1000px'}}>

        <h2 className=" text-decoration-underline small mb-4">Web Application</h2>
        <h3 className="h1 fw-bolder mb-3"> Extend your <span className="" style={{color :'purple'}}>App</span> Functionalities</h3>

        <div className="row py-4 g-4">

          <div className="col-md-3 mb-3">
            <div className="h6">
              <p>✓ Single Page App</p>
              <p>✓ Progressive Web App</p>
              <p>✓ Funcional Components</p>
              <p>✓ RESTful API Integration</p>
              <p>✓ Supabase DB management</p>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <p>A powerful e-commerce solution with all the features you need to start your business today.</p>
            <p className="fw-lighter d-none d-sm-block">Online Payment for secure transactions, Order Tracking & Management, SEO optimization for better visibility, and GDPR compliance to safeguard your data. </p>
          </div>
          <div className="col-md-3 text-center mb-3">
            <Image alt="wordpress" src={wpLogo} width='100' className=" d-block m-auto mb-3"/>
            <Image alt="woo-Commerce" src={wcLogo} width='150'/>
          </div>

        </div>


      </div>
    </section>
  )
}
