/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink,Flex, Box,  Button } from '@chakra-ui/react';
// import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {FaBars, FaCross} from 'react-icons/fa'
import './NavBar.css';
import Logo from './assets/logo.png';



const NavBar = ({isDesktop, show, setShow}, ref) => {
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let opacity = 0;
      if (scrollY > 0) {
        opacity = Math.min(scrollY / 300, 1);
      }
      const isScrolled = scrollY > 40;
      navRef.current.classList.toggle('scrolled', isScrolled);
      // Toggle .scrolled on navbar-bg
      const navbarBg = navRef.current.querySelector('.navbar-bg');
      if (navbarBg) {
        navbarBg.classList.toggle('scrolled', isScrolled);
        if (isScrolled) {
          navbarBg.style.background = `rgba(0,0,0,${opacity})`;
          navbarBg.style.backgroundImage = 'none';
        } else {
          navbarBg.style.background = 'linear-gradient(90deg, #232946 60%, #6A1D70 100%)';
          navbarBg.style.backgroundImage = '';
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const {contactRef, aboutRef, portfolioRef, experienceRef, educationRef, certificationsRef, volunteeringRef} = ref


  const boxStyles = {
    textDecoration: "none",
    color: "#F5F6FA",
    fontSize: "1.1em",
    fontWeight: 500,
    margin: "0 18px",
    transition: "color 0.3s, border-bottom 0.2s",
    borderBottom: "2px solid transparent",
  }

  const barBtn = {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: '24px'
  }


  const handleButton = () => {

    if (show === false){
      setShow(true)
    }
    else{
      setShow(false)
    }
  }

  const handleNavLinkHover = (event) => {
    event.target.style.color = "#444B53";
    event.target.style.transition = "color 0.3s";
  };
  const handleNavLinkMouseOut = (event) => {
    event.target.style.color = "#F5F6FA";
    event.target.style.transition = "color 0.3s";
  };


  return (
    <Flex
      as="nav"
      ref={navRef}
      align="center"
      justify={isDesktop ? "space-between" : "space-between"}
      w="100%"
      p="0"
      style={{ position: "relative" }}
    >
      <div className="navbar-bg" style={{ width: "100%", position: "absolute", top: 0, left: 0, height: "100%", zIndex: 0 }}></div>
      <Box as="div" className="nav-container" flex={isDesktop ? "none" : 1} display="flex" alignItems="center" justifyContent={isDesktop ? "flex-start" : "flex-start"} style={{ background: "transparent", position: "relative", zIndex: 1, padding: "20px" }}>
        <Breadcrumb separator={" "}>
          <BreadcrumbItem isCurrentPage>
            <img src={Logo} width={"43px"} height={"43px"} style={{ verticalAlign: 'middle' }} />
            <BreadcrumbLink
              href="#"
              fontWeight={"bold"}
              ml={"5px"}
              fontSize={"20px"}
            >
              Hady Alkadri
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box flex={isDesktop ? "none" : 1} className="nav-container" display="flex" alignItems="center" justifyContent={isDesktop ? "flex-end" : "flex-end"} style={{ background: "transparent", position: "relative", zIndex: 1, padding: "20px" }}>
        {isDesktop ? (
          <Breadcrumb separator={" "}>
            <BreadcrumbItem>
              <BreadcrumbLink
                sx={boxStyles}
                onClick={() => {
                  portfolioRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                onMouseEnter={handleNavLinkHover}
                onMouseLeave={handleNavLinkMouseOut}
              >
                Portfolio
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink
                sx={boxStyles}
                onClick={() => {
                  aboutRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                onMouseEnter={handleNavLinkHover}
                onMouseLeave={handleNavLinkMouseOut}
              >
                About
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink
                sx={boxStyles}
                onClick={() => {
                  experienceRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                onMouseEnter={handleNavLinkHover}
                onMouseLeave={handleNavLinkMouseOut}
              >
                Experience
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink
                sx={boxStyles}
                onClick={() => {
                  educationRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                onMouseEnter={handleNavLinkHover}
                onMouseLeave={handleNavLinkMouseOut}
              >
                Education
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink
                sx={boxStyles}
                onClick={() => {
                  certificationsRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                onMouseEnter={handleNavLinkHover}
                onMouseLeave={handleNavLinkMouseOut}
              >
                Certifications
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink
                sx={boxStyles}
                onClick={() => {
                  volunteeringRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                onMouseEnter={handleNavLinkHover}
                onMouseLeave={handleNavLinkMouseOut}
              >
                Volunteering
              </BreadcrumbLink>
            </BreadcrumbItem>
                   <BreadcrumbItem>
              <BreadcrumbLink
                sx={boxStyles}
                onClick={() => {
                  contactRef.current.scrollIntoView({ behavior: "smooth" });
                }}
                onMouseEnter={handleNavLinkHover}
                onMouseLeave={handleNavLinkMouseOut}
              >
                Contact
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        ) : (
          <Button style={barBtn} onClick={handleButton} ml={isDesktop ? 0 : 'auto'}>
            {show ? <FaCross /> : <FaBars></FaBars>}
          </Button>
        )}
      </Box>
    </Flex>
  );
}

export default React.forwardRef(NavBar)