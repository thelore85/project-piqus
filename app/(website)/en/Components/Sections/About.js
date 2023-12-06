import Image from "next/image";
import profilePic from "@/public/img/home/about_img.jpg"
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import geeks from '@/public/img/home/about/4geek_academy.png'
import google from '@/public/img/home/about/google_ads_certification.jpeg'
import ztm from '@/public/img/home/about/zero_to_masgery_academy.png'
import poli from '@/public/img/home/about/politecnico_milano.png'
import sole24 from '@/public/img/home/about/sole24ore.png'



export default function About() {
  return (
    <section id="about" className="px-3 py-5 text-center d-flex justify-content-center align-items-center" style={{ backgroundImage : 'url(/img/home/net-bg-1.jpg)', minHeight : '70%'}}>
      <div className="container ">
            
            <div className="row d-flex align-items-center">  
              <div className="col-md-4">
                <Image src={profilePic} width={250} className=" rounded-circle mb-4" alt="lorenzo garofalo"/>
                {/* <div className=" m-auto  rounded-circle" style={{ backgroundImage : "url(/img/home/about_img.jpg)", backgroundSize:'cover', backgroundPosition: 'top',  width: '100%', maxWidth: '300px', minHeight:'300px',  }}></div> */}
              </div>

              <div className="col-md-8 text-white text-start py-4">
                <h2 className="h1 text-white fw-bolder h1 mb-5">Connecting Businesses for Over 10 Years</h2>
                <div className="mb-5">
                  <p className="fw-light small">With a decade of experience in online communication, I bring an international perspective as a seasoned freelancer and collaborator with multinational companies in finance, healthcare, entertainment, and fashion. </p>
                  <p className="fw-light small">I&#39;ve mastered modern online marketing strategies, implemented complex marketing technology, and kept websites and platforms up to date. </p>
                </div>

                <div className="accordion mb-5" >
                  <div className="accordion-item">

                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#courses" aria-expanded="false" aria-controls="courses">
                        Courses and Certification
                      </button>
                    </h2>

                    <div id="courses" className="accordion-collapse collapse" >
                      <div className="accordion-body">
                        
                        <h6 className="ms-3">Academy</h6>
                        <ul className="small">
                          <li className="small"><strong>Web Developer</strong> Full Stack Bootcamp - 4 Geeks Academy -  2024</li>
                          <li className="small">Master in <strong>Marketign and Communication</strong> Management - Sole 24 Business School -  2018</li>
                          <li className="small">Bachelor in <strong>Design</strong> - Politecnico di Milano - 2009</li>
                        </ul>

                        <h6 className="ms-3">Web developing upgrade</h6>
                        <ul className="small">
                          <li className="small"><strong>React</strong> advance practice - ZTM academy - 2023</li>
                          <li className="small"><strong>Next.js</strong> advanced course - ZTM academy - 2023</li>
                          <li className="small"><strong>Javascript</strong> advance practice - Linkedin Learn - 2018</li>
                          <li className="small"><strong>Bootstrap</strong> foundamentals - Linkedin Learn - 2018</li>
                          <li className="small"><strong>Python</strong> full program - ZTM academy - 2023</li>
                        </ul>

                        <h6 className="ms-3">Marketing upgrade </h6>
                        <ul className="certification small">
                          <li className="small"><strong>Google Analytics 4</strong> - Coursera - 2023</li>
                          <li className="small"><strong>Google Tag Manager</strong> - Coursera - 2022</li>
                          <li className="small"><strong>Google Looker Studio</strong> data visualization - Linkedin Learn - 2022</li>
                          <li className="small"><strong>Hubspot</strong> marketing module - Hubspot Academy - 2021</li>
                          <li className="small"><strong>Google ADS</strong> advance - Linkedin Learn - 2021</li>
                          <li className="small"><strong>META - facebook Business Manager</strong> advance - Linkedin Learn - 2023</li>
                          <li className="small"><strong>Performance and Optimization</strong> for online advertising - Linkedin 2021</li>
                        </ul>

                        <h6 className="ms-3">Languages</h6>
                        <ul className="certification small">
                          <li className="small"><strong>English</strong> certifcation - B2- IELTS - 2009</li>
                          <li className="small"><strong>Spanish</strong> fluent in writing and speaking</li>
                          <li className="small"><strong>Italian</strong> native speaker</li>
                        </ul>

                        <div className="border-top p-3 mt-4">
                          <Image className="me-2" style={{width:'14%', height:'auto'}} alt="Milano Politecnico University" src={poli} />
                          <Image className="me-2" style={{width:'17%', height:'auto'}} alt="ZTM academy" src={ztm} />
                          <Image className="me-2" style={{width:'17%', height:'auto'}} alt="Sole 24 Business School" src={sole24} />
                          <Image className="me-2" style={{width:'17%', height:'auto'}} alt="4 Geeks Academy" src={geeks} />
                          <Image className="me-2" style={{width:'17%', height:'auto'}} alt="Google Ads" src={google} />
                        </div>

                      </div>
                    </div>

                  </div>
                </div>

                <div className="mt-4 d-flex justify-content-between">

                  <div className="d-inline fs-3" >
                    
                      <Link className="me-3" href="https://api.whatsapp.com/send/?phone=393933222446&text&type=phone_number&app_absent=0" target="_blank">
                        <FontAwesomeIcon icon={faWhatsapp} />
                      </Link>
                      <Link href="https://github.com/thelore85" target='_blank'>
                        <FontAwesomeIcon icon={faGithub} className="me-3" />
                      </Link>
                      <Link href="https://www.Linkedin.com/in/lorenzo-garofalo-digital/" target="_blank" >
                        <FontAwesomeIcon icon={faLinkedin} className="" />
                      </Link>
                    
                  </div>


                </div>
              </div>

            </div>
        
      </div>

    </section>
  )
}
