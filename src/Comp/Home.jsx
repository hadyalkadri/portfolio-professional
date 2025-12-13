/* eslint-disable react/prop-types */
import React, { lazy, Suspense, useState} from 'react';
import { Box, SimpleGrid, Heading,Image, Flex, Button, Stack,  useMediaQuery } from '@chakra-ui/react';
import Photo from './assets/portait.jpg'
// import Circle from './assets/bg-circle.png';
// import Typed from "react-typed";
import './Home.css';
// import {Routes, Route} from 'react-router-dom';
// import Portfolio from './homeComp/Portfolio';
// import About from './homeComp/About';
// import Contact from './homeComp/Contact';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './homeComp/ErrorBoundary';
import { FaTimes } from 'react-icons/fa';

const Typed = lazy(() => import('react-typed'));

const Portfolio = lazy(() => import('./homeComp/Portfolio'));
const About = lazy(() => import('./homeComp/About'));
const Contact = lazy(() => import('./homeComp/Contact'));
const Experience = lazy(() => import('./homeComp/Experience'));
const Education = lazy(() => import('./homeComp/Education'));
const Certifications = lazy(() => import('./homeComp/Certifications'));
const Volunteering = lazy(() => import('./homeComp/Volunteering'));


// Accept onClose as a prop
const Home = ({isMobile, isDesktop, show, onClose}, ref) => {

  const {contactRef, aboutRef, portfolioRef, experienceRef, educationRef, certificationsRef, volunteeringRef} = ref;

  const [onHover, setOnHover] = useState(false);

  const [isLessThan400] = useMediaQuery("(max-width: 450px)")


  const introHeaderStyles = {
    fontSize: isMobile ? '3.2em' : '2.7em',
    fontStyle: 'italic'
  }

  const btnStyles = {
    backgroundColor: onHover ? 'white' : 'purple',
    color: onHover ? 'purple' : 'white',
    border: onHover ? '3px solid purple' : '1px solid white'
  }

  // const navBoxStyles = {
    
  // }

  // const mobileBarLinkStyles = {
  //   textDecoration: 'none'
  // }

  return (
    <div>
      {show && isLessThan400 ? (
        <Flex justify="center" align="center" position="fixed" top="0" left="0" width="100vw" height="100vh" zIndex={1000} backgroundColor="rgba(25,25,25,0.95)">
          <Box
            backgroundColor="#232136"
            borderRadius="2xl"
            boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)"
            padding="2em 1.5em"
            minWidth="80vw"
            maxWidth="95vw"
            style={{
              animation: 'slideDown 0.4s cubic-bezier(0.4,0,0.2,1)',
              position: 'relative',
            }}
          >
            <Box position="absolute" top="1em" right="1em" cursor="pointer" onClick={onClose}>
              <FaTimes size={28} color="#fff" />
            </Box>
            <Stack spacing={5} align="center" mt={8}>
              <Button variant="ghost" className="mobile-nav-btn" onClick={() => { onClose && onClose(); portfolioRef.current.scrollIntoView({ behavior: 'smooth' }); }}>Portfolio</Button>
              <Button variant="ghost" className="mobile-nav-btn" onClick={() => { onClose && onClose(); aboutRef.current.scrollIntoView({ behavior: 'smooth' }); }}>About</Button>
              <Button variant="ghost" className="mobile-nav-btn" onClick={() => { onClose && onClose(); experienceRef.current.scrollIntoView({ behavior: 'smooth' }); }}>Experience</Button>
              <Button variant="ghost" className="mobile-nav-btn" onClick={() => { onClose && onClose(); educationRef.current.scrollIntoView({ behavior: 'smooth' }); }}>Education</Button>
              <Button variant="ghost" className="mobile-nav-btn" onClick={() => { onClose && onClose(); certificationsRef.current.scrollIntoView({ behavior: 'smooth' }); }}>Certifications</Button>
              <Button variant="ghost" className="mobile-nav-btn" onClick={() => { onClose && onClose(); volunteeringRef.current.scrollIntoView({ behavior: 'smooth' }); }}>Volunteering</Button>
              <Button variant="ghost" className="mobile-nav-btn" onClick={() => { onClose && onClose(); contactRef.current.scrollIntoView({ behavior: 'smooth' }); }}>Contact</Button>
            </Stack>
          </Box>
        </Flex>
      ) : null}

      <Flex  justifyContent={"center"} h={"100vh"} paddingTop={'70px'}>
        <Box>
          {isMobile ? (
            <SimpleGrid columns={2} spacing={"50px"}>
              {/* <span id='headerSymbol'>!</span> */}
              <Box padding={[["5px", "10px", "70px"]]}>
                <Heading as="h1" style={introHeaderStyles}>
                  Hello, <br />
                  Welcome to <br />
                  my portfolio!
                </Heading>
                <ErrorBoundary
                  FallbackComponent={ErrorFallback}
                  onReset={() => {
                    window.location.reload();
                  }}
                >
                  <Suspense fallback={<div>Loading...</div>}>
                    <Typed
                      className="typed-text"
                      strings={[
                        "Services: ",
                        "Web Development",
                        "SEO optimization",
                        "Web Design",
                        "DB management",
                      ]}
                      typeSpeed={40}
                      backSpeed={60}
                      loop
                    />
                  </Suspense>
                </ErrorBoundary>
                <Flex justify={"center"}>
                  <Box as="div">
                    <Button
                      className="hero-contact-btn"
                      style={btnStyles}
                      onMouseLeave={() => {
                        setOnHover(false);
                      }}
                      onMouseEnter={() => {
                        setOnHover(true);
                      }}
                      onClick={e => {
                        // Ripple effect
                        const btn = e.currentTarget;
                        const circle = document.createElement('span');
                        const diameter = Math.max(btn.clientWidth, btn.clientHeight);
                        const radius = diameter / 2;
                        circle.style.width = circle.style.height = `${diameter}px`;
                        circle.style.left = `${e.clientX - btn.getBoundingClientRect().left - radius}px`;
                        circle.style.top = `${e.clientY - btn.getBoundingClientRect().top - radius}px`;
                        circle.className = 'ripple';
                        btn.appendChild(circle);
                        setTimeout(() => circle.remove(), 600);
                        contactRef.current.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Contact Me
                    </Button>
                  </Box>
                </Flex>
              </Box>

              {isDesktop ? (
                <Box className='header-box' padding={[["0px", "20px", "50px"]]} align={"center"} >
                  <Image
                    src={Photo}
                    borderRadius="50%"
                    border={"5px solid #6A1D70"}
                    alt="my_photo"
                    boxSize={"300px"}
                    objectFit={"cover"}
                    // boxShadow={'70px 15px 90px 45px rgb(128, 0, 128, 0.5)'}
                    
                  ></Image>
                  {/* <img id='bg-circle' src={Circle} alt='bg-purple'></img> */}
                </Box>
              ) : null}
            </SimpleGrid>
          ) : (
            <Box padding={[["5px", "10px", "70px"]]} >
              <Heading as="h1" style={introHeaderStyles}>
                Hello, <br />
                Welcome to <br />
                my portfolio!
              </Heading>
              <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onReset={() => {
                  window.location.reload();
                }}
              >
                <Suspense fallback={<div>Loading...</div>}>
                  <Typed
                    className="typed-text"
                    strings={[
                      "Services: ",
                      "Web Development",
                      "SEO optimization",
                      "Web Design",
                      "DB management",
                    ]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                    color={"purple"}
                  />
                </Suspense>
              </ErrorBoundary>
              <Flex justify={"center"}>
                <Box as="div">
                  <Button
                    id='contact-btn'
                    style={btnStyles}
                    onClick={() => {
                      contactRef.current.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Contact Me
                  </Button>
                </Box>
              </Flex>
            </Box>
          )}
        </Box>
      </Flex>
      <Flex justify={"center"} marginTop="3em">
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            window.location.reload();
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Portfolio
              id="Portfolio"
              isMobile={isMobile}
              isLessThan400={isLessThan400}
              ref={portfolioRef}
            />
          </Suspense>
        </ErrorBoundary>
      </Flex>

      <Flex>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            window.location.reload();
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <About isLessThan400={isLessThan400} isMobile={isMobile} ref={aboutRef} />
          </Suspense>
        </ErrorBoundary>
      </Flex>
      <Flex>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            window.location.reload();
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Experience ref={experienceRef} />
          </Suspense>
        </ErrorBoundary>
      </Flex>
      <Flex>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            window.location.reload();
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Education ref={educationRef} />
          </Suspense>
        </ErrorBoundary>
      </Flex>
      <Flex>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            window.location.reload();
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Certifications ref={certificationsRef} />
          </Suspense>
        </ErrorBoundary>
      </Flex>
      <Flex>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            window.location.reload();
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Volunteering ref={volunteeringRef} />
          </Suspense>
        </ErrorBoundary>
      </Flex>
      <Flex>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            window.location.reload();
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Contact isMobile={isMobile} ref={contactRef} />
          </Suspense>
        </ErrorBoundary>
      </Flex>
    </div>
  );
}

export default React.forwardRef(Home)
