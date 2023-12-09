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
      <h2 className="text-center h1 fw-bolder mb-5">Web con el <span className="text-secondary">Marketing</span> en mente</h2>

      <div className="">
        <div className="row g-3 border-top py-3">

          <div className="col-12 col-md-9">
            <h3 className="h5 fw-bolder">Destácate ante tu audiencia <Link href="/es/marketing-online" className="text-primary">&gt; Descubre más</Link></h3>
            <p className="text-secondary small">Un buen sitio web es necesario, ¡pero no es suficiente! Para alcanzar los objetivos comerciales, debes <strong>atraer a tu audiencia y convertir</strong> su comportamiento en ventas.</p>
          </div>

          <div className="col-12 col-md-3 text-center d-none d-md-block">
            <Image src={customer} alt="Adquisición de clientes" width="100"/>
          </div>

        </div>
      </div>

      <div className="accordion mb-5" id="marketingServices">
        <div className="accordion-item">
          <h4 className="accordion-header">
            <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#seo" aria-expanded="false" aria-controls="collapseOne">
            <FontAwesomeIcon icon={faMagnifyingGlassChart}  className="h4 my-0 me-3"/>SEO y Contenido
            </button>
          </h4>
          <div id="seo" className="accordion-collapse collapse" data-bs-parent="#marketingServices">
            <div className="accordion-body small">
              <p>En el mundo del marketing digital, el contenido es el rey. Para prosperar en línea, no necesitas solo cualquier contenido, sino contenido que involucre, eduque y convierta. Nuestro servicio de Creación de Contenidos y Estrategia SEO es tu clave para dominar el panorama digital.</p>
              <p><strong>Contenido de Alta Calidad</strong></p>
              <p>Nuestro equipo de creadores de contenido expertos se destaca en la creación de contenido que resuena con tu audiencia. Ya sea publicaciones en el blog, artículos, infografías o guiones de video, desarrollamos contenido que deja una impresión duradera y mantiene a tu audiencia regresando por más.</p>
              <p><strong>Optimizado para Motores de Búsqueda</strong></p>
              <p>Crear contenido excepcional es solo una parte del rompecabezas. Para asegurar que tu contenido alcance su máximo potencial, incorporamos una robusta estrategia SEO. Identificamos las palabras clave correctas, optimizamos las etiquetas meta y estructuramos tu contenido para posicionarse en la parte superior de las páginas de resultados de los motores de búsqueda. Nuestro objetivo es aumentar tu visibilidad y generar tráfico orgánico a tu sitio web.</p>
              <p><strong>Enfoque Centrado en la Conversión</strong></p>
              <p>No se trata solo de generar tráfico; se trata de convertir ese tráfico en clientes que pagan. Adaptamos nuestro contenido para guiar a tu audiencia de manera fluida a través del embudo de conversión, aumentando así tus ventas y leads.</p>
              <p>Con nuestro servicio de Creación de Contenidos y Estrategia SEO, verás un impacto tangible en tu presencia en línea. Eleva tu marca, genera tráfico orgánico y alcanza tus objetivos comerciales con contenido persuasivo y optimizado para motores de búsqueda. ¡Contáctanos hoy para emprender un viaje guiado por el contenido hacia el éxito en línea!</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h4 className="accordion-header">
            <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#adv" aria-expanded="false" aria-controls="adv">
            <FontAwesomeIcon icon={faRectangleAd}  className="h4 my-0 me-3" />Publicidad en Línea
            </button>
          </h4>
          <div id="adv" className="accordion-collapse collapse" data-bs-parent="#marketingServices">
            <div className="accordion-body small">
              <p>En el dinámico panorama digital, la Publicidad en Línea y el Marketing en Motores de Búsqueda (ADV y SEM) desempeñan un papel fundamental en dirigir tráfico objetivo a tu sitio web y alcanzar los objetivos comerciales.</p>
              <p><strong>Campañas Publicitarias Estratégicas</strong></p>
              <p>Nuestro equipo se especializa en la creación y ejecución de campañas publicitarias estratégicas que llegan a tu público objetivo. Aprovechamos plataformas como Google Ads, Bing Ads y la publicidad en redes sociales para maximizar tu visibilidad en línea.</p>
              <p><strong>Optimización de Palabras Clave y Redacción de Anuncios</strong></p>
              <p>Realizamos investigaciones exhaustivas de palabras clave para identificar las palabras clave más relevantes y con mayor tasa de conversión para tu negocio. Nuestros redactores expertos crean anuncios persuasivos que invitan a los usuarios a hacer clic y tomar medidas.</p>
              <p><strong>Seguimiento y Optimización de Conversiones</strong></p>
              <p>No se trata solo de clics; se trata de conversiones. Implementamos el seguimiento de conversiones para medir la efectividad de tus campañas. Una optimización continua garantiza que tu presupuesto se gaste sabiamente para obtener el mejor retorno de inversión.</p>
              <p>Con nuestro servicio de Publicidad en Línea y Marketing en Motores de Búsqueda (ADV y SEM), verás un aumento significativo en el tráfico del sitio web, leads y ventas. Lleva tu publicidad digital al siguiente nivel y obtén resultados tangibles. ¡Contáctanos hoy para iniciar tu camino hacia el éxito en línea!</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h4 className="accordion-header">
            <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#influencer" aria-expanded="false" aria-controls="influencer">
            <FontAwesomeIcon icon={faUser}  className="h4 my-0 me-3" />Marketing de Influencers
            </button>
          </h4>
          <div id="influencer" className="accordion-collapse collapse" data-bs-parent="#marketingServices">
            <div className="accordion-body small">
              <p>El Marketing de Influencers es una estrategia poderosa para conectarse con audiencias específicas y generar retornos directos en términos de tráfico y conversiones. Nuestro servicio está diseñado para involucrar a influencers cuidadosamente seleccionados para activar audiencias específicas alineadas con tus objetivos.</p>
              <p><strong>Selección Estratégica de Influencers</strong></p>
              <p>Cuidamos cuidadosamente una red de influencers cuyos seguidores están alineados con el demográfico objetivo de tu marca. Colaborando con los influencers adecuados, garantizamos que tu mensaje llegue a la audiencia más receptiva.</p>
              <p><strong>Colaboración Involucrante en la Campaña</strong></p>
              <p>Colaboramos con los influencers para crear contenido auténtico e involucrante que resuene con sus seguidores. Este enfoque asegura que el mensaje de tu marca sea recibido con confianza y autenticidad, aumentando la probabilidad de conversión.</p>
              <p><strong>Resultados Medibles</strong></p>
              <p>Nuestras campañas de Marketing de Influencers están diseñadas para el éxito, con claros KPI para medir el rendimiento. Proporcionaremos información sobre cobertura, participación y conversiones, permitiéndote evaluar el impacto directo en tu negocio.</p>
              <p>Con nuestro servicio de Marketing de Influencers, tendrás los medios para aprovechar el poder influyente de las personalidades en línea y dirigirlo hacia los objetivos comerciales. Alcanza a una audiencia altamente comprometida y específica y conviértela en clientes leales. ¡Contáctanos hoy para desbloquear el potencial del marketing de influencers para tu marca!</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h4 className="accordion-header">
            <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#pr" aria-expanded="false" aria-controls="pr">
            <FontAwesomeIcon icon={faNewspaper}  className="h4 my-0 me-3" />Prensa y Relaciones Públicas
            </button>
          </h4>
          <div id="pr" className="accordion-collapse collapse" data-bs-parent="#marketingServices">
            <div className="accordion-body small">
              <p>En el mercado competitivo actual, es fundamental construir una presencia de marca sólida. Nuestro servicio de Participación en Prensa y Relaciones Públicas está diseñado para elevar tu marca obteniendo espacios en publicaciones relevantes, organizando entrevistas con periodistas de la industria y facilitando la participación en eventos del sector.</p>
              <p><strong>Comunicación Estratégica con los Medios</strong></p>
              <p>Nuestro equipo experto se especializa en la comunicación estratégica con los medios, identificando las publicaciones correctas, periodistas y eventos que se alinean con tu marca y tus objetivos. Te ayudaremos a crear historias cautivadoras que resuenen con tu audiencia objetivo.</p>
              <p><strong>Entrevistas con Expertos de la Industria</strong></p>
              <p>Te pondremos en contacto con periodistas influyentes en tu sector, asegurando que el mensaje de tu marca llegue a la audiencia adecuada. Entrevistas y publicaciones en revistas respetadas aumentarán tu credibilidad y autoridad en tu campo.</p>
              <p><strong>Participación en Eventos de la Industria</strong></p>
              <p>La participación en eventos y conferencias de la industria puede marcar la diferencia para tu marca. Te ayudaremos a identificar y asegurar oportunidades para que tu marca brille en un escenario más amplio, estableciendo tu presencia como líder en la industria.</p>
              <p>Con nuestro servicio de Participación en Prensa y Relaciones Públicas, obtendrás una ventaja competitiva posicionando tu marca bajo los reflectores. Eleva la visibilidad, la credibilidad y la influencia de tu marca en tu industria. ¡Contáctanos hoy para emprender tu camino hacia el éxito de la marca!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="row g-3 border-top py-3">

          <div className="col-12 col-md-9">
            <h3 className="h5 fw-bolder">Aprovecha tu Potencial de Marketing</h3>
            <p className="text-secondary small">Aumenta los volúmenes de venta con <strong>implementación de análisis y CRM</strong>. Activa los contactos en cada fase del ciclo de vida y obtén conversiones.</p>
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
            <FontAwesomeIcon icon={faChartSimple} className="h4 my-0 me-3" />Herramientas de Análisis
          </button>
        </h4>
        <div id="analytics" className="accordion-collapse collapse" data-bs-parent="#marketingServices">
          <div className="accordion-body small">
            <p>En la era digital basada en datos, entender el rendimiento de tu sitio web es fundamental. Nuestro servicio de Configuración Analítica te permite aprovechar el poder de los datos para monitorear, analizar y rentabilizar eficazmente el tráfico de tu sitio web.</p>
            <p><strong>Configuración de Seguimiento Completa</strong></p>
            <p>Implementamos herramientas de análisis avanzadas, como Google Analytics y soluciones personalizadas, para brindarte una visión completa del tráfico de tu sitio web. Desde el comportamiento de los usuarios hasta las fuentes de tráfico, rastreamos todo para ayudarte a tomar decisiones informadas.</p>
            <p><strong>Información basada en Datos</strong></p>
            <p>Los datos solo tienen valor si proporcionan información. Nuestro equipo de expertos te ayudará a extraer información operativa de tus datos analíticos. Identificaremos puntos fuertes, debilidades y oportunidades para optimizar tu presencia en línea.</p>
            <p><strong>Estrategias de Rentabilización</strong></p>
            <p>Transformar la información en ingresos es donde realmente destaca nuestro servicio. Colaboramos contigo para desarrollar estrategias de rentabilización basadas en tus datos analíticos. Ya sea a través de publicidad, recomendaciones de productos o la optimización de contenidos, te ayudaremos a aprovechar al máximo tu tráfico.</p>
            <p>Con nuestro servicio de Configuración Analítica, contarás con las herramientas e información necesarias para mejorar tu presencia en línea y potenciar tus beneficios. No te limites a recopilar datos; haz que los datos trabajen para ti. ¡Contáctanos hoy para emprender tu camino hacia el éxito basado en datos!</p>
          </div>
        </div>
        </div>
        <div className="accordion-item">
          <h4 className="accordion-header">
            <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#crm" aria-expanded="false" aria-controls="crm">
            <FontAwesomeIcon icon={faPaperPlane}  className="h4 my-0 me-3" />CRM y Email Marketing
            </button>
          </h4>
          <div id="crm" className="accordion-collapse collapse" data-bs-parent="#marketingServices" >
            <div className="accordion-body small">
              <p>En el mundo de los negocios modernos, gestionar y conectar con tu base de clientes es esencial para el éxito. Nuestro servicio de Configuración de Herramientas CRM te proporciona las herramientas para gestionar eficazmente los contactos y activar tu base de clientes mediante campañas de email marketing dirigidas.</p>
              <p><strong>Gestión de Contactos Simplificada</strong></p>
              <p>Configuramos y ajustamos potentes herramientas CRM que te permiten centralizar y gestionar tus datos de clientes y clientes potenciales. Realiza un seguimiento de las interacciones, recopila información valiosa y garantiza una experiencia del cliente sin problemas.</p>
              <p><strong>Experiencia en Email Marketing</strong></p>
              <p>El email marketing sigue siendo una forma altamente efectiva de llegar y conectar con tu audiencia. Nuestro equipo de expertos en email marketing te ayudará a crear y ejecutar campañas de email dirigidas que impulsen conversiones, construyan lealtad a la marca e incrementen los ingresos.</p>
              <p><strong>Automatización y Personalización</strong></p>
              <p>Implementaremos estrategias de automatización y personalización para asegurar que tus mensajes sean relevantes y oportunos. Desde emails de bienvenida hasta campañas de reenganche, te ayudaremos a nutrir tus relaciones con los clientes.</p>
              <p>Con nuestro servicio de Configuración de Herramientas CRM, contarás con las herramientas y la experiencia para llevar tus relaciones con los clientes al siguiente nivel. Maximiza el potencial de tu base de clientes con una gestión eficiente de contactos y un impactante email marketing. ¡Contáctanos hoy para empezar a mejorar tu participación con los clientes y potenciar el crecimiento de tu negocio!</p>
            </div>
          </div>
        </div>
      </div>

      </div>
    </section>
  )
}
