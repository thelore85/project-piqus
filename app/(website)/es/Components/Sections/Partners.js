import React from 'react';
import Image from 'next/image';
import bg from '@/public/img/partners/generali.png';
import pp from '@/public/img/partners/pubblicita-progresso.png';
import webank from '@/public/img/partners/webank.png';
import bpm from '@/public/img/partners/bpm.png';
import saxo from '@/public/img/partners/saxo.png';
import medicilio from '@/public/img/partners/medicilio.png';
import styles from '@/app/(website)/en/css/partner.module.scss';



export default function Partners() {
  return (

<section className={styles.slider}>
	<div className={styles.slideTrack}>
		<div className={styles.slide}>
      <Image alt="Banca Generali" height="70" width="70" src={bg} className="rounded opacity-50" style={{ filter: "grayscale(100%)" }} />
		</div>
		<div className={styles.slide}>
      <Image alt="Pubblicita Progresso" height="70" width="70" src={pp} className="rounded opacity-50" style={{ filter: "grayscale(100%)" }} />
		</div>
		<div className={styles.slide}>
      <Image alt="Webank" height="70" width="70" src={webank} className="rounded opacity-50" style={{ filter: "grayscale(100%)" }} />
		</div>
		<div className={styles.slide}>
      <Image alt="Banco BPM" height="70" width="70" src={bpm} className="rounded opacity-50" style={{ filter: "grayscale(100%)" }} />
		</div>
		<div className={styles.slide}>
      <Image alt="Saxo Bank" height="70" width="70" src={saxo} className="rounded opacity-50" style={{ filter: "grayscale(100%)" }} />
		</div>
		<div className={styles.slide}>
      <Image alt="Medicilio" height="70" width="70" src={medicilio} className="rounded opacity-50" style={{ filter: "grayscale(100%)" }} />
		</div>
		<div className={styles.slide}>
      <Image alt="Banca Generali" height="70" width="70" src={bg} className="rounded opacity-50" style={{ filter: "grayscale(100%)" }} />
		</div>
		<div className={styles.slide}>
      <Image alt="Pubblicita Progresso" height="70" width="70" src={pp} className="rounded opacity-50" style={{ filter: "grayscale(100%)" }} />
		</div>
		<div className={styles.slide}>
      <Image alt="Webank" height="70" width="70" src={webank} className="rounded opacity-50" style={{ filter: "grayscale(100%)" }} />
		</div>
		<div className={styles.slide}>
      <Image alt="Banco BPM" height="70" width="70" src={bpm} className="rounded opacity-50" style={{ filter: "grayscale(100%)" }} />
		</div>
		<div className={styles.slide}>
      <Image alt="Saxo Bank" height="70" width="70" src={saxo} className="rounded opacity-50" style={{ filter: "grayscale(100%)" }} />
		</div>
		<div className={styles.slide}>
      <Image alt="Medicilio" height="70" width="70" src={medicilio} className="rounded opacity-50" style={{ filter: "grayscale(100%)" }} />
		</div>
	</div>
</section>

  );
}
