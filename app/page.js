'use client'
import { useEffect} from 'react';
import { useRouter } from 'next/navigation'

const LanguageRedirect = () => {

  const router = useRouter();

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
        if (isItalian) {
          router.push('/it/home');
        } else if(isSpanish){
          router.push('/es/home');
        }else {
          router.push('/en/home');
        }
      })
      .catch((error) => {
        console.error('Error: geolocalization IP: ', error);
      });

  }, []);

  return null;
};

export default LanguageRedirect;
