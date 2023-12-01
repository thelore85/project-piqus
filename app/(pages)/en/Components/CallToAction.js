import StartNow from '@/app/Components/CallToAction/StartNow'
import Whatsap from '@/app/Components/CallToAction/Whatsap'
import React from 'react'

export default function CallToAction() {
  return (
    <section className="d-flex justify-content-center align-items-center h-25 " style={{ backgroundColor: 'rgb(2, 13, 29)'}}>
      <div className="container text-white border-white border-bottom border-opacity-25 " >

        <div className="row text-center text-md-start align-items-center py-4">
          <div className="col-md-8 ">
            <h3>Looking for a Web Specialist?</h3>
            <p className="fw-lighter small ">Send a message or open an account to start a project</p>
          </div>

          <div className="col-md-4 text-md-end">
            <StartNow />
            <Whatsap />
          </div>

        </div>

      </div>
    </section>
  )
}
