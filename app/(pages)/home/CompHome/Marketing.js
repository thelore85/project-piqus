import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple, faMagnifyingGlassChart, faNewspaper, faPaperPlane, faRectangleAd } from '@fortawesome/free-solid-svg-icons'

export default function Marketing() {
  return (
    <section id="marketing" className="bg-light d-flex justify-content-center align-items-center py-5 px-4">
      <div className="container text-dark pt-4" style={{maxWidth:'1000px'}}>

      <h2 className="text-center text-decoration-underline small mb-4">Online Marketing</h2>
      <h2 className="text-center h1 fw-bolder mb-5">Develop with <span className="text-secondary">Marketing</span> in mind</h2>

      <div className="mb-5">

        <div className="row align-items-center g-3">
          <div className="col-9">
            <h3 className="h5">Why you should consider it</h3>
            <p className="text-secondary">A good website is necessary, but it is not enough! To reach your business goals, you need to draw your audience in and convert their behavior into sales or contacts. 
            This is where marketing comes into play.</p>
          </div>
          <div className="col-3 text-end">
            <img src='img/home/customer.jpeg' width="150" />
          </div>
        </div>
      
      </div>


      <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h4 className="accordion-header">
              <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#seo" aria-expanded="false" aria-controls="collapseOne">
              <FontAwesomeIcon icon={faMagnifyingGlassChart}  className="h4 my-0 me-3"/>SEO and Content
              </button>
            </h4>
            <div id="seo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
              <div className="accordion-body small">
                <p>In the world of digital marketing, content is king. To thrive online, you need not just any content, but content that engages, educates, and converts. Our Content Creation and SEO Strategy service is your key to dominating the digital landscape.</p>
                <p><strong>High-Quality Content</strong></p>
                <p>Our team of skilled content creators excels at crafting content that resonates with your audience. Whether it&apos;s blog posts, articles, infographics, or video scripts, we develop content that leaves a lasting impression and keeps your audience coming back for more.</p>
                <p><strong>Optimized for Search Engines</strong></p>
                <p>Creating outstanding content is just one piece of the puzzle. To ensure your content reaches its full potential, we incorporate a robust SEO strategy. We identify the right keywords, optimize meta tags, and structure your content to rank high on search engine results pages. Our goal is to boost your visibility and drive organic traffic to your website.</p>
                <p><strong>Conversion-Focused Approach</strong></p>
                <p>It&apos;s not just about driving traffic; it&apos;s about turning that traffic into paying customers. We tailor our content to lead your audience seamlessly through the conversion funnel, ultimately increasing your sales and leads.</p>
                <p>With our Content Creation and SEO Strategy service, you&apos;ll witness a tangible impact on your online presence. Elevate your brand, drive organic traffic, and achieve your business goals with persuasive, search-engine-optimized content. Contact us today to embark on a content-driven journey to online success!</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h4 className="accordion-header">
              <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#adv" aria-expanded="false" aria-controls="adv">
              <FontAwesomeIcon icon={faRectangleAd}  className="h4 my-0 me-3" />Online Advertising
              </button>
            </h4>
            <div id="adv" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
              <div className="accordion-body small">
                <p>In the dynamic digital landscape, Online Advertising and Search Engine Marketing (ADV and SEM) play a pivotal role in driving targeted traffic to your website and achieving your business objectives.</p>
                <p><strong>Strategic Advertising Campaigns</strong></p>
                <p>Our team specializes in creating and executing strategic advertising campaigns that reach your target audience. We leverage platforms like Google Ads, Bing Ads, and social media advertising to maximize your online visibility.</p>
                <p><strong>Keyword Optimization and Ad Copywriting</strong></p>
                <p>We conduct in-depth keyword research to identify the most relevant and high-converting keywords for your business. Our expert copywriters craft compelling ad copy that entices users to click and take action.</p>
                <p><strong>Conversion Tracking and Optimization</strong></p>
                <p>It&apos;s not just about clicks; it&apos;s about conversions. We implement conversion tracking to measure the effectiveness of your campaigns. Continual optimization ensures that your budget is spent wisely to achieve the best return on investment.</p>
                <p>With our Online Advertising and Search Engine Marketing (ADV and SEM) service, you&apos;ll witness a significant boost in website traffic, leads, and sales. Take your digital advertising to the next level and achieve tangible results. Contact us today to launch your journey toward online success!</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h4 className="accordion-header">
              <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#analytics" aria-expanded="false" aria-controls="analytics">
              <FontAwesomeIcon icon={faChartSimple}  className="h4 my-0 me-3" />Analytics Tools
              </button>
            </h4>
            <div id="analytics" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
              <div className="accordion-body small">
                <p>In the data-driven digital era, understanding your website&apos;s performance is paramount. Our Analytics Configuration service empowers you to harness the power of data to monitor, analyze, and monetize your website traffic effectively.</p>
                <p><strong>Comprehensive Tracking Setup</strong></p>
                <p>We implement advanced analytics tools, such as Google Analytics and custom solutions, to provide you with a complete picture of your website&apos;s traffic. From user behavior to traffic sources, we track it all to help you make informed decisions.</p>
                <p><strong>Data-Driven Insights</strong></p>
                <p>Data is only as valuable as the insights it provides. Our team of experts will help you extract actionable insights from your analytics data. We&apos;ll identify strengths, weaknesses, and opportunities to optimize your online presence.</p>
                <p><strong>Monetization Strategies</strong></p>
                <p>Turning insights into revenue is where our service truly shines. We collaborate with you to develop monetization strategies based on your analytics data. Whether it&apos;s through advertising, product recommendations, or content optimization, we&apos;ll help you make the most of your traffic.</p>
                <p>With our Analytics Configuration service, you&apos;ll have the tools and insights you need to enhance your online presence and boost your bottom line. Don&apos;t just collect data; make data work for you. Contact us today to embark on your journey to data-driven success!</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h4 className="accordion-header">
              <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#crm" aria-expanded="false" aria-controls="crm">
              <FontAwesomeIcon icon={faPaperPlane}  className="h4 my-0 me-3" />CRM and Email marketing
              </button>
            </h4>
            <div id="crm" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
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
          <div className="accordion-item">
            <h4 className="accordion-header">
              <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#pr" aria-expanded="false" aria-controls="pr">
              <FontAwesomeIcon icon={faNewspaper}  className="h4 my-0 me-3" />Press and PR
              </button>
            </h4>
            <div id="pr" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
              <div className="accordion-body small">
                <p>In today&apos;s competitive market, building a strong brand presence is vital. Our Press Engagement and PR service is designed to elevate your brand by securing placements in relevant publications, arranging interviews with industry journalists, and facilitating participation in industry events.</p>
                <p><strong>Strategic Media Outreach</strong></p>
                <p>Our experienced team specializes in strategic media outreach, identifying the right publications, journalists, and events that align with your brand and objectives. We&apos;ll help you craft compelling stories that resonate with your target audience.</p>
                <p><strong>Interviews with Industry Experts</strong></p>
                <p>We&apos;ll connect you with influential journalists in your industry, ensuring that your brand&apos;s message reaches the right audience. Interviews and features in respected publications will enhance your credibility and authority in your field.</p>
                <p><strong>Industry Event Participation</strong></p>
                <p>Participation in industry events and conferences can be a game-changer for your brand. We&apos;ll assist in identifying and securing opportunities for your brand to shine on a broader stage, establishing your presence as an industry leader.</p>
                <p>With our Press Engagement and PR service, you&apos;ll gain a competitive edge by positioning your brand in the limelight. Elevate your brand&apos;s visibility, credibility, and influence within your industry. Contact us today to embark on your journey to brand success!</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
