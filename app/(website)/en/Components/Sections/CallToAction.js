
import React from 'react'
import StartNow from '../Buttons/StartNow'
import Whatsapp from '../Buttons/Whatsapp'

export default function CallToAction() {
  return (
    <section className="d-flex justify-content-center align-items-center h-25 p-3 " style={{ backgroundColor: 'rgb(2, 13, 29)'}}>
      <div className="container text-white border-white border-bottom border-opacity-25 p-0" >

        <div className="row text-center text-md-start align-items-center py-4">
          <div className="col-md-8 ">
            <h3>Looking for a Web Specialist?</h3>
            <p className="fw-lighter small ">Send a message or open an account to start a project</p>
          </div>

          <div className="col-md-4 text-md-end">
            <StartNow />
            <Whatsapp />
          </div>

        </div>

      </div>
    </section>
  )
}
