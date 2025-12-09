/* eslint-disable react/prop-types */
import React, { lazy, Suspense, useState} from 'react';
import { Box, SimpleGrid, Heading,Image, Flex, Button, Stack, StackDivider,Breadcrumb, BreadcrumbItem, BreadcrumbLink, useMediaQuery } from '@chakra-ui/react';
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

const Typed = lazy(() => import('react-typed'));

const Portfolio = lazy(() => import('./homeComp/Portfolio'));
const About = lazy(() => import('./homeComp/About'));
const Contact = lazy(() => import('./homeComp/Contact'));
const Experience = lazy(() => import('./homeComp/Experience'));
const Education = lazy(() => import('./homeComp/Education'));
const Certifications = lazy(() => import('./homeComp/Certifications'));
const Volunteering = lazy(() => import('./homeComp/Volunteering'));


const Home = ({isMobile, isDesktop, show}, ref) => {

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

  const navBoxStyles = {
    
  }

  const mobileBarLinkStyles = {
    textDecoration: 'none'
  }

  return (
    <div>
      {show && isLessThan400 ? (
        <Flex  justify={"center"} backgroundColor={"#191919"} color={"white"} boxShadow={'0px 2px 10px 10px black'}>
          <Stack width={'100%'} divider={<StackDivider borderColor={'black'}/>} alignItems={'center'}> 
            <Box style={navBoxStyles}>
              <Breadcrumb>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    sx={mobileBarLinkStyles}
                    onClick={() => {
                      portfolioRef.current.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    Portfolio
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Box>
            <Box style={navBoxStyles}>
              <Breadcrumb>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    sx={mobileBarLinkStyles}
                    onClick={() => {
                      aboutRef.current.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    About
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Box>
            <Box style={navBoxStyles}>
              <Breadcrumb>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    sx={mobileBarLinkStyles}
                    onClick={() => {
                      contactRef.current.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Contact
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Box>
          </Stack>
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
                      style={btnStyles}
                      onMouseLeave={() => {
                        setOnHover(false);
                      }}
                      onMouseEnter={() => {
                        setOnHover(true);
                      }}
                      onClick={() => {
                        contactRef.current.scrollIntoView({
                          behavior: "smooth",
                        });
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
