import Image from "next/image";
import google from '@/public/img/marketingonline/google-icon-ver.png'
import googleMobile from '@/public/img/marketingonline/google-icon.png'

export default function Google() {
  return (
    <section id="ecommerce" className="bg-light d-flex justify-content-center align-items-center pt-5 px-4">
      <div className="container text-dark pt-4" style={{maxWidth:'1000px'}}>

        <div className="row border-bottom g-5">

          <div className="col-md-9 mb-3">
            <h2 className="h1 fw-bolder mb-5"><span className="" style={{color:"blue"}}>Google</span> Ads</h2>
            <h4 className="fw-bold">Search - Display - Youtube - Maps - Pmax</h4>
            <p className="">
            Drive results with Google Advertising solutions. Tailored online campaigns to lead web presence and gain customers.
            </p>
            <p className=" d-none d-sm-block">
              Enhance your website's performance, reaching potential clients efficiently. <br />
              Elevate your online visibility through strategic Google Advertising designed for optimal impact.</p>
          </div>

          <div className=" col-md-3 mb-5 d-none d-sm-block" >
            <Image alt="google" src={google} className=" rounded-4 shadow w-100 h-100 d-block"/>
          </div>

          <div className=" col-12 mb-5 d-block d-sm-none" >
            <Image alt="google" src={googleMobile} className=" rounded-4 shadow w-100 h-100 d-block"/>
          </div>

        </div>

      </div>
    </section>
  )
}
