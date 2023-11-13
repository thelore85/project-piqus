import StartNow from '@/app/Components/CallToAction/StartNow'
import Whatsap from '@/app/Components/CallToAction/Whatsap'
import React from 'react'

export default function CallToAction() {
  return (
    <section className="d-flex justify-content-center align-items-center bg-dark h-25 ">
      <div className="container text-white border-white border-bottom border-opacity-25 " style={{maxWidth:'1000px'}}>

        <div className="row align-items-center  py-4">
          <div className="col-md-8 col-6 ">
            <h3>Start your web project now</h3>
            <p className="fw-lighter small ">Open your free account or contact me directly</p>
          </div>

          <div className="col-md-4 col-6 text-end">
            <StartNow />
            <Whatsap />
          </div>

        </div>

      </div>
    </section>
  )
}
