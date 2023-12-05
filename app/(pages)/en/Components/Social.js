import Image from "next/image";
import meta from '@/public/img/marketingonline/meta-orizontal.png'
import ig from '@/public/img/marketingonline/ig.png'

export default function Social() {
  return (
    <section id="ecommerce" className="bg-light d-flex justify-content-center align-items-center pt-5 px-4">
      <div className="container text-dark p-0" style={{maxWidth:'1000px'}}>

        <div className="row d-flex align-items-center border-bottom g-5">

          <div className="col-md-3 text-center d-none d-sm-block">
            <Image alt="meta" src={ig} width={200} className=" d-block m-auto mb-3 "/>
          </div>

          <div className="col-md-9 mb-3">
            <h2 className="h1 fw-bolder mb-4" style={{fontSize:"2.3rem"}}><span className="" style={{color:"purple"}}>Social Media</span> Advertising</h2>
            <p className="fw-bolder h5 mb-3">
              Maximize sales through impactful ads across key social platforms.
            </p>
            <p className=" d-none d-sm-block">
              Effectively <span className="">reach potential clients</span>, boosting your website sales.<br />
              Elevate your online presence with a tailored <span className="">Social Media strategy</span>.
            </p>
            <p className="fw-light fst-italic small">Stories - Video Reel - Marketplace - News Feed</p>
            <Image alt="meta" src={meta} width={300} className=" d-block my-4"/>
          </div>
        </div>


      </div>
    </section>
  )
}
