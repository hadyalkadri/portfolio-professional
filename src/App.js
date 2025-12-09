import React, {useState, useRef} from 'react';
import { ChakraProvider, useMediaQuery } from '@chakra-ui/react';
import NavBar from './Comp/NavBar';
import Home from './Comp/Home';
import Footer from './Comp/Footer';
import '../src/Comp/Home.css';


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
            setShow={setShow}

            ref={homeRef}
          />
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </ChakraProvider>
  );
}

export default App;
