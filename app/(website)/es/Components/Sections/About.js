import Image from "next/image";
import profilePic from "@/public/img/home/about_img.jpg";
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
    <section id="about" className="px-3 py-5 text-center d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(/img/home/net-bg-1.jpg)', minHeight: '70%' }}>
      <div className="container ">

        <div className="row d-flex align-items-center">
          <div className="col-md-4">
            <Image src={profilePic} width={250} className=" rounded-circle mb-4" alt="lorenzo garofalo" />
          </div>

          <div className="col-md-8 text-white text-start py-4">
            <h2 className="h1 text-white fw-bolder h1 mb-5">Más de 10 años en la Web</h2>
            <div className="mb-5">
              <p className="fw-light small">Con una década de experiencia en comunicación en línea, aporto una perspectiva internacional como freelance experto y colaborador con empresas multinacionales en los sectores financiero, de la salud, del entretenimiento y de la moda.</p>
              <p className="fw-light small">He dominado modernas estrategias de marketing en línea, implementado tecnologías de marketing complejas y mantenido sitios web y plataformas actualizados.</p>
            </div>

            <div className="accordion mb-5">
              <div className="accordion-item">

                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#courses" aria-expanded="false" aria-controls="courses">
                    Cursos y Certificaciones
                  </button>
                </h2>

                <div id="courses" className="accordion-collapse collapse">
                  <div className="accordion-body">

                    <h6 className="ms-3">Academias</h6>
                    <ul className="small">
                      <li className="small"><strong>Desarrollador Web</strong> Bootcamp Full Stack - 4 Geeks Academy - 2024</li>
                      <li className="small">Máster en <strong>Marketing y Comunicación</strong> - Sole 24 Business School - 2018</li>
                      <li className="small">Licenciatura en <strong>Diseño</strong> - Politécnico de Milán - 2009</li>
                    </ul>

                    <h6 className="ms-3">Actualizaciones en desarrollo web</h6>
                    <ul className="small">
                      <li className="small"><strong>React</strong> práctica avanzada - ZTM academy - 2023</li>
                      <li className="small"><strong>Next.js</strong> desarrollo - ZTM academy - 2023</li>
                      <li className="small"><strong>Javascript</strong> práctica avanzada - Linkedin Learn - 2018 </li>
                      <li className="small"><strong>Bootstrap</strong> diseño - Linkedin Learn - 2018</li>
                      <li className="small"><strong>Python</strong> - Linkedin Learn - 2018</li>              
                    </ul>

                    <h6 className="ms-3">Actualizaciones en marketing</h6>
                    <ul className="certification small">
                      <li className="small"><strong>Google Analytics 4</strong> - Coursera - 2023</li>
                      <li className="small"><strong>Google Tag Manager</strong> - Coursera - 2022</li>
                      <li className="small">Visualización de datos con <strong>Google Looker Studio</strong> - Linkedin Learn - 2022</li>
                      <li className="small">Módulo de marketing <strong>Hubspot</strong> - Hubspot Academy - 2021</li>
                      <li className="small">Avanzado <strong>Google ADS</strong> - Linkedin Learn - 2021</li>
                      <li className="small">Avanzado gestional <strong>META - Facebook Business Manager</strong> - Linkedin Learn - 2023</li>
                      <li className="small">Rendimiento y optimización para la publicidad en línea - Linkedin 2021</li>
                    </ul>

                    <h6 className="ms-3">Idiomas</h6>
                    <ul className="certification small">
                      <li className="small">Certificación en <strong>Inglés</strong> - B2- IELTS - 2009</li>
                      <li className="small">Fluido en escritura y habla en <strong>Español</strong></li>
                      <li className="small">Lengua materna <strong>Italiano</strong></li>
                    </ul>

                    <div className="border-top p-3 mt-4">
                      <Image className="me-2" style={{ width: '14%', height: 'auto' }} alt="Universidad Politécnico de Milán" src={poli} />
                      <Image className="me-2" style={{ width: '17%', height: 'auto' }} alt="ZTM academy" src={ztm} />
                      <Image className="me-2" style={{ width: '17%', height: 'auto' }} alt="Sole 24 Business School" src={sole24} />
                      <Image className="me-2" style={{ width: '17%', height: 'auto' }} alt="4 Geeks Academy" src={geeks} />
                      <Image className="me-2" style={{ width: '17%', height: 'auto' }} alt="Google Ads" src={google} />
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
