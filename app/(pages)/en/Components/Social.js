import Image from "next/image";
import meta from '@/public/img/marketingonline/meta.png'
import ig from '@/public/img/marketingonline/ig.png'

export default function Social() {
  return (
    <section id="ecommerce" className="bg-light d-flex justify-content-center align-items-center pt-5 px-4">
      <div className="container text-dark pt-4" style={{maxWidth:'1000px'}}>

        <div className="row border-bottom g-5">

          <div className="col-md-9 mb-3">
            <h2 className="h1 fw-bolder mb-5"><span className="" style={{color:"purple"}}>Social Media</span> Advertising</h2>
            <h4 className="fw-bold">Stories - Video Reel - Marketplace - News Feed</h4>
            <p className="">
              Maximize sales through Social Media Ad campaigns. Craft impactful ads across key social platforms.
            </p>
            <p className=" d-none d-sm-block">
              Effectively <span className="fw-bold">reach potential clients</span>, boosting your website sales.<br />
              Elevate your online presence with a tailored <span className="fw-bold">Social Media strategy</span>.</p>
              <Image alt="meta" src={meta} width={150} className=" d-block my-4"/>
          </div>

          <div className="col-md-3 text-center">
            <Image alt="meta" src={ig} width={200} className=" d-block m-auto mb-3 d-none d-sm-block"/>
          </div>
        </div>


      </div>
    </section>
  )
}
