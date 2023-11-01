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



////////////////////////////
// components


export default function Tools() {

  return (
    <section id="tools" className="bg-body-tertiary d-flex justify-content-center align-items-center p-5" style={{minHeight: '40%'}}>
      <div className=" w-75 text-center">
        <h1 className="mb-4 fw-bold h2">The best technology at your disposal</h1>

        <div>

          <div className="d-inline-block p-3">
            <FontAwesomeIcon icon={faWordpress} className="h1" />
            <p className="small" >Wordpress</p>
          </div>

          <div className="d-inline-block p-3">
            <FontAwesomeIcon icon={faN} className="h1" />
            <p className="small" >Next.js</p>
          </div>

          <div className="d-inline-block p-3">
            <FontAwesomeIcon icon={faReact} className="h1" />
            <p className="small" >React.js</p>
          </div>

          <div className="d-inline-block p-3">
            <FontAwesomeIcon icon={faGoogle} className="h1" />
            <p className="small" >Tag Manager</p>
          </div>

          <div className="d-inline-block p-3">
            <FontAwesomeIcon icon={faMagnifyingGlassChart}  className="h1"/>
            <p className="small" >SEO</p>
          </div>

          <div className="d-inline-block p-3">
            <FontAwesomeIcon icon={faHubspot}  className="h1"/>
            <p className="small" >Hubspot</p>
          </div>

          <div className="d-inline-block p-3">
            <FontAwesomeIcon icon={faChartSimple} className="h1"/>
            <p className="small" >GA4</p>
          </div>

          <div className="d-inline-block p-3">
            <FontAwesomeIcon icon={faBootstrap} className="h1"/>
            <p className="small" >Bootstrap</p>
          </div>

          <div className="d-inline-block p-3">
            <FontAwesomeIcon icon={faSquareJs} className="h1"/>
            <p className="small" >Javascipt</p>
          </div>

          <div className="d-inline-block p-3">
            <FontAwesomeIcon icon={faFigma} className="h1"/>
            <p className="small" >Figma</p>
          </div>

          <div className="d-inline-block p-3">
            <FontAwesomeIcon icon={faDatabase} className="h1"/>
            <p className="small" >SQL</p>
          </div>

     
        </div>
      </div>
    </section>    
  )
}