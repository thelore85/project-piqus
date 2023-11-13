import StartNow from '@/app/Components/CallToAction/StartNow'
import Whatsap from '@/app/Components/CallToAction/Whatsap'
import React from 'react'

export default function CallToAction() {
  return (
    <section className="d-flex justify-content-center align-items-center bg-dark h-25">
      <div className="container text-white">

        <div className="row align-items-center border-bottom">
          <div className="col-md-8 col-6">
            <h3>Start your web project in seconds</h3>
            <p>Open you account or contact me directly</p>
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
