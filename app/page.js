'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'

const LanguageRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    // Fai una richiesta a un servizio esterno che restituisce l'indirizzo IP
    fetch('https://api64.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => {
        const userIP = data.ip;
        console.log('debuggin default route /page - IP: ', userIP)

        // Sostituisci questa logica con la tua verifica dell'indirizzo IP
        const isItalian = userIP.startsWith('it');

        // Esegui il redirect in base alla lingua
        if (isItalian) {
          router.push('/it/home');
        } else {
          router.push('/en/home');
        }
      })
      .catch((error) => {
        console.error('Errore durante la richiesta IP:', error);
        // Tratta l'errore in base alle tue esigenze
      });
  }, [router]);

  // Ritorna null perché questa pagina/componente si occupa solo del redirect
  return null;
};

export default LanguageRedirect;
