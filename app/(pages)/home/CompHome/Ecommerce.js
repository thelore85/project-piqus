import Image from "next/image";
import wpLogo from '@/public/img/home/wp-logo.png'
import wcLogo from '@/public/img/home/wc-logo.jpg'

export default function Ecommerce() {
  return (
    <section id="ecommerce" className="bg-black d-flex justify-content-center align-items-center py-5 px-4" style={{ minHeight:'70%'}}>
      <div className="container text-white" style={{maxWidth:'1000px'}}>

        <h3 className=" text-decoration-underline small mb-4">Ecommerce</h3>
        <h2 className="h1 fw-bolder mb-5">Bring Your <span className="text-primary">Business Online</span></h2>

        <div className="row border-bottom py-4">

          <div className="col-sm-3 mb-5">
            <div className="">
              <p>✓ Online Payment</p>
              <p>✓ Order Tracking</p>
              <p>✓ Stock Management</p>
              <p>✓ Seo Ready</p>
              <p>✓ GDPR proof</p>
            </div>
          </div>
          <div className="col-sm-6 mb-5">
            <p>A powerful e-commerce solution with all the features you need to start your business today.</p>
            <p className="fw-lighter mobile_hide">Online Payment for secure transactions, Order Tracking & Management, SEO optimization for better visibility, and GDPR compliance to safeguard your data. </p>
          </div>
          <div className="col-sm-3 text-center mb-5">
            <Image alt="wordpress" src={wpLogo} width='100' className=" d-block m-auto mb-3"/>
            <Image alt="wordpress" src={wcLogo} width='150'/>
          </div>

        </div>


      </div>
    </section>
  )
}
