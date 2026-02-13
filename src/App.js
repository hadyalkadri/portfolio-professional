import React, {useState, useRef, useEffect} from 'react';
import { ChakraProvider, useMediaQuery } from '@chakra-ui/react';
import NavBar from './Comp/NavBar';
import Home from './Comp/Home';
import Footer from './Comp/Footer';
import '../src/Comp/Home.css';
import { Analytics, track } from "@vercel/analytics/react"


function App() {

  const [show, setShow] = useState(false);
  

  const homeRef = {
    contactRef: useRef(),
    aboutRef: useRef(),
    portfolioRef: useRef(),
    experienceRef: useRef(),
    educationRef: useRef(),
    certificationsRef: useRef(),
    volunteeringRef: useRef()
  }
 

  const [isMobile, isDesktop] = useMediaQuery(
    [
      '(min-width: 1100px)',
      '(min-width: 800px)'
    ]
   )

   useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get('utm_source');
    if (source) {
      track(`Visitor From ${source}`);
    }
  }, []);

  return (
    <ChakraProvider>
      <div>
        <nav>
          <NavBar
            isMobile={isMobile}
            isDesktop={isDesktop}
            show={show}
            setShow={setShow}

            ref={homeRef}
          />
        </nav>
        <section className={isMobile ? 'header-container-desktop' : 'header-container-mobile'}>
          <Home
            isMobile={isMobile}
            isDesktop={isDesktop}
            show={show}
            onClose={() => setShow(false)}
            ref={homeRef}
          />
        </section>
        <footer>
          <Footer />
        </footer>
        <Analytics />
      </div>
    </ChakraProvider>
  );
}

export default App;
