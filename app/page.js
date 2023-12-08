'use client'
import { useEffect} from 'react';
import { useRouter } from 'next/navigation'

const LanguageRedirect = () => {

  const router = useRouter();
  const lang = JSON.parse(localStorage.getItem("languageSelected"))

  
  useEffect(() => {
    const apiToken = process.env.NEXT_PUBLIC_IPINFO;
  
      fetch(`https://ipinfo.io?token=${apiToken}`)  // Assicurati di sostituire 'TUO_TOKEN_API' con il tuo token ipinfo.io
        .then((response) => response.json())
        .then((data) => {
          console.log('Informazioni sulla geolocalizzazione IP:', data);
  
          // Esempio: verifica se il paese è Italia
          const isItalian = data.country === 'IT';
          const isSpanish = data.country === 'ES';
  
          // Esegui il redirect in base alla lingua
          if (isItalian || isSpanish) {
            router.push('/it/home');
          } else {
            router.push('/en/home');
          }
        })
        .catch((error) => {
          console.error('Errore durante la richiesta di geolocalizzazione IP:', error);
        });

  }, []);

  return null;
};

export default LanguageRedirect;
