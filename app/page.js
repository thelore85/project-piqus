'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'

const LanguageRedirect = () => {
  const router = useRouter();
  const apiToken = process.env.NEXT_PUBLIC_IPINFO;

  useEffect(() => {
    fetch(`https://ipinfo.io?token=${apiToken}`)  // Assicurati di sostituire 'TUO_TOKEN_API' con il tuo token ipinfo.io
      .then((response) => response.json())
      .then((data) => {
        console.log('Informazioni sulla geolocalizzazione IP:', data);

        // Esempio: verifica se il paese è Italia
        const isItalian = data.country === 'IT';

        // Esegui il redirect in base alla lingua
        if (isItalian) {
          router.push('/it/home');
        } else {
          router.push('/en/home');
        }
      })
      .catch((error) => {
        console.error('Errore durante la richiesta di geolocalizzazione IP:', error);
      });
  }, [router]);

  return null;
};

export default LanguageRedirect;
