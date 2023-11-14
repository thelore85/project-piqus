import Image from 'next/image'
import React from 'react'
import bg from '@/public/img/partners/generali.png'
import pp from '@/public/img/partners/pubblicita-progresso.png'
import webank from '@/public/img/partners/webank.png'
import bpm from '@/public/img/partners/bpm.png'
import saxo from '@/public/img/partners/saxo.png'
import medicilio from '@/public/img/partners/medicilio.png'

export default function Partners() {
  return (
    <section className=" bg-white d-flex justify-content-center align-items-center">
      <div className="container text-center py-5 opacity-50">
        {/* <h5 className="text-black-50 small text-decoration-underline mb-4">Worked with</h5> */}
        <Image alt="Banca Generali" width="70" src={bg} className="mx-4" style={{filter:"grayscale(100%)"}}/>
        <Image alt="Pubblicita Progresso" width="70" src={pp} className="mx-4 mx-md-5 " style={{filter:"grayscale(100%)"}} />
        <Image alt="Webank" width="70" src={webank} className="mx-3 mx-md-5" style={{filter:"grayscale(100%)"}} />
        <Image alt="Banco BPM" width="70" src={bpm} className="mx-3 mx-md-5" style={{filter:"grayscale(100%)"}} />
        <Image alt="Saxo Bank" width="70" src={saxo} className="mx-3 mx-md-5" style={{filter:"grayscale(100%)"}} />
        <Image alt="Saxo Bank" width="70" src={medicilio} className="mx-3 mx-md-5" style={{filter:"grayscale(100%)"}} />
      </div>
    </section>
  )
}
