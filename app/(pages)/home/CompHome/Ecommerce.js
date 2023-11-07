import Image from "next/image";
import wpLogo from '@/public/img/home/wp-logo.png'
import wcLogo from '@/public/img/home/wc-logo.jpg'

export default function Ecommerce() {
  return (
    <section id="ecommerce" className="bg-black d-flex justify-content-center align-items-center py-5 px-4">
      <div className="container text-white pt-4" style={{maxWidth:'1000px'}}>

        <h2 className=" text-decoration-underline small mb-4">Ecommerce</h2>
        <h3 className="h1 fw-bolder mb-3">Bring Your <span className="text-primary">Store Online</span></h3>

        <div className="row border-bottom py-4 g-4">

          <div className="col-md-3 mb-3">
            <div className="h5">
              <p>✓ Online Payment</p>
              <p>✓ Order Tracking</p>
              <p>✓ Stock Management</p>
              <p>✓ SEO Ready</p>
              <p>✓ GDPR proof</p>
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
