import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple, faMagnifyingGlassChart, faNewspaper, faPaperPlane, faRectangleAd, faUser } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import customer from '@/public/img/home/customer.jpeg';
import scale from '@/public/img/home/scale.png';
import Link from 'next/link';

export default function Marketing() {
  return (
    <section id="marketing" className="bg-light d-flex justify-content-center align-items-center py-5 px-4">
      <div className="container text-dark pt-4" style={{maxWidth:'1000px'}}>

      <h2 className="text-center text-decoration-underline small mb-4">Marketing Online</h2>
      <h2 className="text-center h1 fw-bolder mb-5">Web con il <span className="text-secondary">Marketing</span> in mente</h2>

      <div className="">
        <div className="row g-3 border-top py-3">

          <div className="col-12 col-md-9">
            <h3 className="h5 fw-bolder">Fatti notare dal tuo pubblico <Link href="/it/marketing-online" className="text-primary">&gt; Scopri di più</Link></h3>
            <p className="text-secondary small">Un buon sito web è necessario, ma non è sufficiente! Per raggiungere gli obiettivi aziendali, devi <strong>attirare il tuo pubblico e convertire</strong> il loro comportamento in vendite.</p>
          </div>

          <div className="col-12 col-md-3 text-center d-none d-md-block">
            <Image src={customer} alt="Acquisizione clienti" width="100"/>
          </div>

        </div>
      </div>



      <div className="accordion mb-5" id="marketingServices">
        <div className="accordion-item">
          <h4 className="accordion-header">
            <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#seo" aria-expanded="false" aria-controls="collapseOne">
            <FontAwesomeIcon icon={faMagnifyingGlassChart}  className="h4 my-0 me-3"/>SEO and Content
            </button>
          </h4>
          <div id="seo" className="accordion-collapse collapse" data-bs-parent="#marketingServices">
            <div className="accordion-body small">
              <p>Nel mondo del marketing digitale, il contenuto è il re. Per prosperare online, non hai bisogno solo di un qualsiasi contenuto, ma di contenuto che coinvolga, educi e converta. Il nostro servizio di Creazione di Contenuti e Strategia SEO è la tua chiave per dominare il panorama digitale.</p>
              <p><strong>Contenuto di Alta Qualità</strong></p>
              <p>Il nostro team di creatori di contenuti esperti eccelle nella creazione di contenuti che risuonano con il tuo pubblico. Che si tratti di post sul blog, articoli, infografiche o script video, sviluppiamo contenuti che lasciano un&#39;impressione duratura e mantengono il tuo pubblico che torna per altro.</p>
              <p><strong>Ottimizzato per i Motori di Ricerca</strong></p>
              <p>Creare contenuti eccezionali è solo un pezzo del puzzle. Per garantire che il tuo contenuto raggiunga il suo pieno potenziale, incorporiamo una robusta strategia SEO. Identifichiamo le parole chiave giuste, ottimizziamo i tag meta e strutturiamo il tuo contenuto per posizionarsi in alto nelle pagine dei risultati dei motori di ricerca. Il nostro obiettivo è aumentare la tua visibilità e generare traffico organico al tuo sito web.</p>
              <p><strong>Approccio Focalizzato sulla Conversione</strong></p>
              <p>Non si tratta solo di generare traffico; si tratta di trasformare quel traffico in clienti paganti. Adattiamo i nostri contenuti per guidare il tuo pubblico in modo fluido attraverso il funnel di conversione, aumentando così le tue vendite e i lead.</p>
              <p>Con il nostro servizio di Creazione di Contenuti e Strategia SEO, vedrai un impatto tangibile sulla tua presenza online. Eleva il tuo brand, genera traffico organico e raggiungi i tuoi obiettivi aziendali con contenuti persuasivi e ottimizzati per i motori di ricerca. Contattaci oggi per intraprendere un viaggio guidato dal contenuto verso il successo online!</p>
            </div>
          </div>

        </div>
        <div className="accordion-item">
          <h4 className="accordion-header">
            <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#adv" aria-expanded="false" aria-controls="adv">
            <FontAwesomeIcon icon={faRectangleAd}  className="h4 my-0 me-3" />Online Advertising
            </button>
          </h4>
          <div id="adv" className="accordion-collapse collapse" data-bs-parent="#marketingServices">
            <div className="accordion-body small">
              <p>Nel dinamico panorama digitale, la Pubblicità Online e il Marketing sui Motori di Ricerca (ADV e SEM) svolgono un ruolo fondamentale nel guidare traffico mirato al tuo sito web e nel raggiungere gli obiettivi aziendali.</p>
              <p><strong>Campagne Pubblicitarie Strategiche</strong></p>
              <p>Il nostro team è specializzato nella creazione ed esecuzione di campagne pubblicitarie strategiche che raggiungono il tuo pubblico target. Sfruttiamo piattaforme come Google Ads, Bing Ads e la pubblicità sui social media per massimizzare la tua visibilità online.</p>
              <p><strong>Ottimizzazione delle Parole Chiave e Copywriting degli Annunci</strong></p>
              <p>Conduciamo approfondite ricerche di parole chiave per identificare le parole chiave più pertinenti e ad alto tasso di conversione per la tua attività. I nostri copywriter esperti creano annunci persuasivi che invitano gli utenti a fare clic e intraprendere un&#39;azione.</p>
              <p><strong>Tracciamento e Ottimizzazione delle Conversioni</strong></p>
              <p>Non si tratta solo di clic; si tratta di conversioni. Implementiamo il tracciamento delle conversioni per misurare l&#39;efficacia delle tue campagne. Un&#39;ottimizzazione continua garantisce che il tuo budget venga speso saggiamente per ottenere il miglior rendimento dell&#39;investimento.</p>
              <p>Con il nostro servizio di Pubblicità Online e Marketing sui Motori di Ricerca (ADV e SEM), vedrai un significativo aumento del traffico sul sito web, dei lead e delle vendite. Porta la tua pubblicità digitale al livello successivo e ottieni risultati tangibili. Contattaci oggi per avviare il tuo percorso verso il successo online!</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h4 className="accordion-header">
            <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#influencer" aria-expanded="false" aria-controls="influencer">
            <FontAwesomeIcon icon={faUser}  className="h4 my-0 me-3" />Influencer Marketing
            </button>
          </h4>
          <div id="influencer" className="accordion-collapse collapse" data-bs-parent="#marketingServices">
            <div className="accordion-body small">
              <p>Il Marketing degli Influencer è una strategia potente per connettersi con pubblici mirati e generare ritorni diretti in termini di traffico e conversioni. Il nostro servizio è progettato per coinvolgere influencer attentamente selezionati per attivare specifici pubblici allineati ai tuoi obiettivi.</p>
              <p><strong>Selezione Strategica degli Influencer</strong></p>
              <p>Curiamo attentamente una rete di influencer i cui follower sono in linea con il demografico target del tuo brand. Collaborando con gli influencer giusti, garantiamo che il tuo messaggio raggiunga il pubblico più ricettivo.</p>
              <p><strong>Collaborazione Coinvolgente nella Campagna</strong></p>
              <p>Collaboriamo con gli influencer per creare contenuti autentici e coinvolgenti che risuonano con i loro follower. Questo approccio assicura che il messaggio del tuo brand sia ricevuto con fiducia e autenticità, aumentando la probabilità di conversione.</p>
              <p><strong>Risultati Misurabili</strong></p>
              <p>Le nostre campagne di Marketing degli Influencer sono progettate per il successo, con chiari KPI per misurare le performance. Forniremo insights su copertura, coinvolgimento e conversioni, consentendoti di valutare l&#39;impatto diretto sul tuo business.</p>
              <p>Con il nostro servizio di Marketing degli Influencer, avrai i mezzi per sfruttare il potere influente delle personalità online e indirizzarlo verso gli obiettivi aziendali. Raggiungi un pubblico altamente coinvolto e mirato e convertilo in clienti fedeli. Contattaci oggi per sbloccare il potenziale del marketing degli influencer per il tuo brand!</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h4 className="accordion-header">
            <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#pr" aria-expanded="false" aria-controls="pr">
            <FontAwesomeIcon icon={faNewspaper}  className="h4 my-0 me-3" />Press and PR
            </button>
          </h4>
          <div id="pr" className="accordion-collapse collapse" data-bs-parent="#marketingServices">
            <div className="accordion-body small">
              <p>Nel mercato competitivo di oggi, è fondamentale costruire una presenza di marca forte. Il nostro servizio di Coinvolgimento Stampa e PR è progettato per elevare la tua marca ottenendo spazi in pubblicazioni rilevanti, organizzando interviste con giornalisti del settore e facilitando la partecipazione a eventi del settore.</p>
              <p><strong>Strategica Comunicazione con i Media</strong></p>
              <p>Il nostro team esperto si specializza nella comunicazione strategica con i media, identificando le giuste pubblicazioni, giornalisti ed eventi che si allineano con la tua marca e i tuoi obiettivi. Ti aiuteremo a creare storie accattivanti che risuonano con il tuo pubblico target.</p>
              <p><strong>Interviste con Esperti del Settore</strong></p>
              <p>Ti metteremo in contatto con giornalisti influenti nel tuo settore, garantendo che il messaggio della tua marca raggiunga il pubblico giusto. Interviste e pubblicazioni su riviste rispettate aumenteranno la tua credibilità e autorità nel tuo campo.</p>
              <p><strong>Partecipazione a Eventi del Settore</strong></p>
              <p>La partecipazione a eventi e conferenze del settore può fare la differenza per la tua marca. Ti aiuteremo a identificare e garantire opportunità per far brillare la tua marca su un palcoscenico più ampio, stabilendo la tua presenza come leader del settore.</p>
              <p>Con il nostro servizio di Coinvolgimento Stampa e PR, otterrai un vantaggio competitivo posizionando la tua marca sotto i riflettori. Eleva la visibilità, la credibilità e l&#39;influenza della tua marca nel tuo settore. Contattaci oggi per intraprendere il tuo percorso verso il successo del brand!</p>
            </div>
          </div>
        </div>
      </div>


      <div className="">
        <div className="row g-3 border-top py-3">

          <div className="col-12 col-md-9">
            <h3 className="h5 fw-bolder">Potenzia il Tuo Potenziale di Marketing</h3>
            <p className="text-secondary small">Aumenta i volumi di vendita con <strong>implementazione di analytics e CRM</strong>. Attiva i contatti in ogni fase del ciclo di vita e ottieni conversioni.</p>
          </div>

          <div className="col-12 col-md-3 text-center d-none d-md-block">
            <Image src={scale} alt="scale your volume" width="90" />
          </div>

        </div>
      </div>

      <div className="accordion" id="marketingServices">
        <div className="accordion-item">
        <h4 className="accordion-header">
          <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#analytics" aria-expanded="false" aria-controls="analytics">
            <FontAwesomeIcon icon={faChartSimple} className="h4 my-0 me-3" />Strumenti di Analisi
          </button>
        </h4>
        <div id="analytics" className="accordion-collapse collapse" data-bs-parent="#marketingServices">
          <div className="accordion-body small">
            <p>Nell&#39;era digitale basata sui dati, comprendere le prestazioni del tuo sito web è fondamentale. Il nostro servizio di Configurazione Analitica ti permette di sfruttare il potere dei dati per monitorare, analizzare e monetizzare efficacemente il traffico del tuo sito web.</p>
            <p><strong>Configurazione di Tracciamento Completa</strong></p>
            <p>Implementiamo strumenti di analisi avanzati, come Google Analytics e soluzioni personalizzate, per fornirti una visione completa del traffico del tuo sito web. Dal comportamento degli utenti alle fonti di traffico, tracciamo tutto per aiutarti a prendere decisioni informate.</p>
            <p><strong>Insight Basati sui Dati</strong></p>
            <p>I dati hanno valore solo se forniscono insight. Il nostro team di esperti ti aiuterà a estrarre insight operativi dai tuoi dati analitici. Identificheremo punti di forza, debolezze e opportunità per ottimizzare la tua presenza online.</p>
            <p><strong>Strategie di Monetizzazione</strong></p>
            <p>Trasformare gli insight in entrate è dove il nostro servizio brilla davvero. Collaboriamo con te per sviluppare strategie di monetizzazione basate sui tuoi dati analitici. Che sia attraverso la pubblicità, le raccomandazioni di prodotti o l&#39;ottimizzazione dei contenuti, ti aiuteremo a sfruttare al massimo il tuo traffico.</p>
            <p>Con il nostro servizio di Configurazione Analitica, avrai gli strumenti e gli insight necessari per migliorare la tua presenza online e potenziare i tuoi profitti. Non limitarti a raccogliere dati; fai in modo che i dati lavorino per te. Contattaci oggi per intraprendere il tuo percorso verso il successo basato sui dati!</p>
          </div>
        </div>
        </div>
        <div className="accordion-item">
          <h4 className="accordion-header">
            <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#crm" aria-expanded="false" aria-controls="crm">
            <FontAwesomeIcon icon={faPaperPlane}  className="h4 my-0 me-3" />CRM and Email marketing
            </button>
          </h4>
          <div id="crm" className="accordion-collapse collapse" data-bs-parent="#marketingServices" >
            <div className="accordion-body small">
              <p>In the world of modern business, managing and engaging your customer base is essential for success. Our CRM Tool Configuration service equips you with the tools to effectively manage contacts and activate your customer base through targeted email marketing campaigns.</p>
              <p><strong>Streamlined Contact Management</strong></p>
              <p>We set up and configure powerful CRM tools that enable you to centralize and manage your customer and lead data. Keep track of interactions, gather valuable insights, and ensure a seamless customer experience.</p>
              <p><strong>Email Marketing Expertise</strong></p>
              <p>Email marketing remains a highly effective way to reach and engage your audience. Our team of email marketing experts will help you create and execute targeted email campaigns that drive conversions, build brand loyalty, and increase revenue.</p>
              <p><strong>Automation and Personalization</strong></p>
              <p>We&apos;ll implement automation and personalization strategies to ensure your messages are relevant and timely. From welcome emails to re-engagement campaigns, we&apos;ll help you nurture your customer relationships.</p>
              <p>With our CRM Tool Configuration service, you&apos;ll have the tools and expertise to take your customer relationships to the next level. Maximize your customer base&apos;s potential with efficient contact management and impactful email marketing. Contact us today to start enhancing your customer engagement and boosting your business growth!</p>
            </div>
          </div>
        </div>
      </div>




      </div>
    </section>
  )
}
