import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons'
import { faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faN } from '@fortawesome/free-solid-svg-icons'

import { faWordpress } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faHubspot } from '@fortawesome/free-brands-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faSquareJs } from '@fortawesome/free-brands-svg-icons'
import { faFigma } from '@fortawesome/free-brands-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons'
import { faArtstation } from '@fortawesome/free-brands-svg-icons'



////////////////////////////
// components


export default function Tech() {

  return (
    <section id="tech" className="bg-body-tertiary d-flex justify-content-center align-items-center p-5" style={{minHeight: '40%'}}>
      <div className=" text-center">
        <h1 className="mb-4 fw-bold" style={{ fontSize: "2.5rem", lineHeight: "2.7rem" }}>Elige la Mejor Tecnología Web</h1>


        <div>
          <div className="d-inline-block p-3">
            <FontAwesomeIcon icon={faSquareJs} className="h2"/>
            <p className="small fw-light" >Javascipt</p>
          </div>

          <div className="d-inline-block p-3">
            <FontAwesomeIcon icon={ faPython} className="h2"/>
            <p className="small fw-light" >Python</p>
          </div>

          <div className="d-inline-block p-3">
            <FontAwesomeIcon icon={faReact} className="h2" />
            <p className="small fw-light" >React.js</p>
          </div>

          <div className="d-inline-block p-3">
            <FontAwesomeIcon icon={faN} className="h2" />
            <p className="small fw-light" >Next.js</p>
          </div>


          <div className="d-inline-block p-3">
            <FontAwesomeIcon icon={faBootstrap} className="h2"/>
            <p className="small fw-light" >Bootstrap</p>
          </div>

          <div className="d-inline-block p-3">
            <FontAwesomeIcon icon={faDatabase} className="h2"/>
            <p className="small fw-light" >SQL</p>
          </div>

          <div className="d-inline-block p-3">
            <FontAwesomeIcon icon={faWordpress} className="h2" />
            <p className="small fw-light" >Wordpress</p>
          </div>


          <div className="d-inline-block p-3">
            <FontAwesomeIcon icon={faGoogle} className="h2" />
            <p className="small fw-light" >Tag Manager</p>
          </div>

          <div className="d-inline-block p-3">
            <FontAwesomeIcon icon={faChartSimple} className="h2"/>
            <p className="small fw-light" >GA4</p>
          </div>

          <div className="d-inline-block p-3">
            <FontAwesomeIcon icon={faMagnifyingGlassChart}  className="h2"/>
            <p className="small fw-light" >SEO</p>
          </div>

          <div className="d-inline-block p-3">
            <FontAwesomeIcon icon={faHubspot}  className="h2"/>
            <p className="small fw-light" >Hubspot</p>
          </div>

          <div className="d-inline-block p-3">
            <FontAwesomeIcon icon={faFigma} className="h2"/>
            <p className="small fw-light" >Figma</p>
          </div>

          <div className="d-inline-block p-3">
            <FontAwesomeIcon icon={faArtstation} className="h2" />
            <p className="small fw-light" >Adobe</p>
          </div>


     
        </div>
      </div>
    </section>    
  )
}
