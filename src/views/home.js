import React from 'react'

import { Helmet } from 'react-helmet'

import Card from '../components/card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Energy Xtra Website</title>
        <meta property="og:title" content="Energy Xtra Website" />
      </Helmet>
      <div className="navbar-container">
        <div className="max-width">
          <div className="home-logo">
            <img
              alt="image"
              src="/playground_assets/group%202.svg"
              className="home-image"
            />
            <span className="brand-Name">
              <span className="home-text001">Energy-</span>
              <span> xtra</span>
            </span>
          </div>
          <div className="home-links">
            <a href="#works" className="home-text003 navbar-Link">
              How it works
            </a>
            <a
              href="https://energy-xtra.com/services"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link navbar-Link"
            >
              Services
            </a>
            <a
              href="https://energy-xtra.com/blog"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link1 navbar-Link"
            >
              Blog
            </a>
            <a href="#services" className="home-link2 navbar-Link">
              Pricing
            </a>
            <a
              href="https://energy-xtra.com/login"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link3 button button-primary"
            >
              Get started
            </a>
          </div>
          <div className="home-burger-menu navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="hero-container section-container">
        <div className="home-max-width1 max-width">
          <div className="home-content">
            <span className="home-subtitle before-Heading">
              EnergyXtra - Energy saving service for future!
            </span>
            <h1 className="home-title">
              <span>Reduce inefficiency </span>
              <br className="home-text005"></br>
              <span className="home-text006">Save Earth</span>
            </h1>
            <span className="home-description">
              Consulting service that looks to reduce energy consumption and
              improve inefficiencies.
            </span>
            <div className="home-container01">
              <button className="button button-gradient">Get started</button>
            </div>
          </div>
          <div className="home-image1">
            <img
              alt="image"
              src="/playground_assets/banner-sustainable-energy-1150x650-400h.webp"
              className="home-hero-image"
            />
            <img
              alt="image"
              src="/playground_assets/union-400w.png"
              className="home-graphic-top"
            />
            <img
              alt="image"
              src="/playground_assets/group%2018-1200w.png"
              className="home-image2"
            />
          </div>
        </div>
      </div>
      <div id="works" className="section-container">
        <div className="home-max-width2 max-width">
          <div className="home-image3">
            <img
              alt="image"
              src="/playground_assets/how-to-lower-your-electric-bill-1200w.jpg"
              className="home-hero-image1"
            />
          </div>
          <div className="home-content1">
            <span className="home-text007 before-Heading">how it works</span>
            <h1 className="home-text008">
              <span>
                Stay carefree, Our specialized R&amp;D team will take care of
                everything .
              </span>
              <span></span>
            </h1>
            <span className="home-text011">
              Once you sign the contract, our specialized R&amp;D team will come
              to the location to survey and make a roadmap to energy efficiency.
              We will only charge you a percentage of the reduced electricity
              bill. So, it&apos;s a win-win situation for all!
            </span>
            <div className="home-container02">
              <button className="button-secondary button bg-transparent">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section1 section-container">
        <div className="home-max-width3 max-width">
          <div className="home-content2">
            <span className="home-text012 before-Heading">
              reduce energy bill, Increase efficiency 
            </span>
            <h1 id="services" className="home-text013">
              <span className="home-text014">Upgrade, Renovate</span>
              <br></br>
              <span className="home-text016">
                or Simply Change Your Lifestyle!
              </span>
            </h1>
            <span className="home-text017">
              <span>
                We offer B2B, B2C, and B2G services. There are three types of
                services:
              </span>
              <br></br>
              <br></br>
              <span className="home-text021">
                Renovate &amp; Save:
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                We will recommend a dynamic renovation plan. Once the energy
                bill gets reduced, we will charge only 35% of the reduced
                electricity bill.
              </span>
              <br></br>
              <br></br>
              <span className="home-text025">Upgrade &amp; Save: </span>
              <span>
                Sign a long-term contract with us. We will upgrade your
                home/workplace by using appropriate Smart home technology. We
                will charge only 60% of the reduced electricity bill.
              </span>
              <br></br>
              <br></br>
              <span className="home-text029">Auditing: </span>
              <span>A perfect audit/survey on your energy consumption. </span>
              <br></br>
              <br></br>
              <br></br>
            </span>
          </div>
          <div className="home-image4">
            <img
              alt="image"
              src="/playground_assets/our-top-18-movies-about-freedom-of-all-time-2022-800x400-1200w.jpg"
              className="home-hero-image2"
            />
          </div>
        </div>
      </div>
      <div className="home-section2 section-container">
        <div className="home-max-width4 max-width">
          <div className="home-image5">
            <img
              alt="image"
              src="/playground_assets/jc-gellidon-fnc3yctccoi-unsplash%2014%20%5B1%5D-1200w.png"
              className="home-hero-image3"
            />
          </div>
          <div className="home-content3">
            <span className="home-text034 before-Heading">get started</span>
            <h1 className="home-text035">Open your account today</h1>
            <div className="home-step">
              <div className="home-number">
                <span className="home-text036">1</span>
              </div>
              <div className="home-container03">
                <span className="home-title1">Download Energy-Xtra App</span>
              </div>
            </div>
            <div className="home-step1">
              <div className="home-number1">
                <span className="home-text037">2</span>
              </div>
              <div className="home-container04">
                <span className="home-title2">Create your free account</span>
              </div>
            </div>
            <div className="home-step2">
              <div className="home-number2">
                <span className="home-text038">3</span>
              </div>
              <div className="home-container05">
                <span className="home-title3">
                  Link your existing credit cards
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="home-max-width5 max-width">
          <span className="home-text039 before-Heading">get started</span>
          <h1 className="home-text040">
            <span>No matter what you do, Energy-Xtra</span>
            <span> will save you money</span>
          </h1>
          <div className="home-cards-container">
            <Card rootClassName="card-root-class-name2"></Card>
            <Card text="Personal" rootClassName="card-root-class-name"></Card>
            <Card text="Family" rootClassName="card-root-class-name1"></Card>
          </div>
        </div>
      </div>
      <div className="home-section4 section-container">
        <div className="home-max-width6 max-width">
          <div className="home-f-a-q">
            <div className="home-questions">
              <span className="home-text043 before-Heading">faq</span>
              <h1 className="home-text044">
                <span className="home-text045">
                  Frequently Asked
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span className="home-text047">Questions</span>
              </h1>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger">
                  <span className="home-text048">
                    Is this a Free or Paid service?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text049">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger1">
                  <span className="home-text050">
                    Do you operate in United Stated?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon04">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text051">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger2">
                  <span className="home-text052">
                    Is this a globally available?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon06">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text053">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger3">
                  <span className="home-text054">
                    Do you have an iOS or Android app?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text055">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/playground_assets/group%202-1200w.png"
              className="home-image6"
            />
          </div>
          <div className="home-banner">
            <span className="home-text056 before-Heading">get started</span>
            <h1 className="home-text057">
              <span>Push your efficiency to</span>
              <br></br>
              <span></span>
              <span></span>
              <span> the next level.</span>
            </h1>
            <div className="home-btns">
              <button className="home-button2 button button-transparent">
                See all plans
              </button>
              <button className="home-button3 button button-gradient">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-links-container">
          <div className="home-container06">
            <div className="footer-column">
              <span className="home-text063">Product</span>
              <span className="home-text064">How it works</span>
              <span className="home-text065">Features</span>
              <span className="home-text066">Pricing</span>
              <span className="home-text067">Blog</span>
              <span>FAQ</span>
            </div>
            <div className="footer-column">
              <span className="home-text069">App</span>
              <span className="home-text070">Download iOS app</span>
              <span className="home-text071">Download Android app</span>
              <span className="home-text072">Log in to Portal</span>
              <span className="home-text073">Administrative</span>
              <span>Legal</span>
            </div>
            <div className="footer-column">
              <span className="home-text075">Company</span>
              <span className="home-text076">About us</span>
              <span className="home-text077">Culture</span>
              <span className="home-text078">Code of conduct</span>
              <span className="home-text079">Careers</span>
              <span className="home-text080">News</span>
              <span>Contact</span>
            </div>
            <div className="footer-column">
              <span className="home-text082">Invest</span>
              <span className="home-text083">Commodity</span>
              <span className="home-text084">Savings</span>
              <span className="home-text085">
                <span>Taxes and fees</span>
                <br></br>
                <span></span>
              </span>
              <span className="home-text088">
                <span>Currency exchange</span>
              </span>
              <span>Community</span>
            </div>
            <div className="footer-column">
              <span className="home-text091">Security</span>
              <span className="home-text092">Security status</span>
              <span className="home-text093">ISO</span>
              <span className="home-text094">System status</span>
              <span>Customer Help</span>
            </div>
            <div className="footer-column">
              <span className="home-text096">Follow</span>
              <span className="home-text097">Instagram</span>
              <span className="home-text098">Twitter</span>
              <span className="home-text099">Facebook</span>
              <span className="home-text100">Tik Tok</span>
              <span className="home-text101">Linkedln</span>
              <span>Youtube</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
