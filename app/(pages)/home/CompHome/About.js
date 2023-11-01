import Image from "next/image";
import profilePic from "@/public/img/home/about_img.jpg"
import Link from "next/link";


export default function About() {
  return (
    <section id="about" className="px-3 py-5 text-center d-flex justify-content-center align-items-center" style={{ backgroundImage : 'url(/img/home/net-bg-1.jpg)', minHeight : '70%'}}>
      <div className="container ">
            
            <div className="row d-flex align-items-center">  
              <div className="col-md-4">
                <Image  src={profilePic} width={250} className=" rounded-circle mb-4" alt="lorenzo garofalo"/>
                {/* <div className=" m-auto  rounded-circle" style={{ backgroundImage : "url(/img/home/about_img.jpg)", backgroundSize:'cover', backgroundPosition: 'top',  width: '100%', maxWidth: '300px', minHeight:'300px',  }}></div> */}
              </div>

              <div className="col-md-8 text-white text-start py-4">
                <h2 className="h1 text-white fw-bolder h1 mb-5">Connecting Businesses for Over 10 Years</h2>
                <p className="fw-light small">With a decade of experience in online communication, I bring an international perspective as a seasoned freelancer and collaborator with multinational companies in finance, healthcare, entertainment, and fashion. </p>
                <p className="fw-light small">I&#39;ve mastered modern online marketing strategies, implemented complex marketing technology, and kept websites and platforms up to date. </p>
                <p className="fw-light small">In 2023, I completed an intensive web development course to stay at the forefront of industry techniques.</p>
                <div className="mt-4">
                  <Link href="https://api.whatsapp.com/send/?phone=393933222446&text&type=phone_number&app_absent=0" target="_blank">
                    <button className="btn btn-primary me-4"> Contact Me</button>
                  </Link>
                  {/* <button className="btn btn-light border-primary text-primary">Download my cv</button> */}
                </div>
              </div>

            </div>
        
      </div>

    </section>
  )
}
