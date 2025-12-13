/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Box, Button } from '@chakra-ui/react';
import { FaBars, FaCross } from 'react-icons/fa';
import './NavBar.css';
import Logo from './assets/logo.png';

const NavBar = ({ isDesktop, show, setShow }, ref) => {
  const navRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { contactRef, aboutRef, portfolioRef, experienceRef, educationRef, certificationsRef, volunteeringRef } = ref;

  const boxStyles = {
    textDecoration: 'none',
    color: '#F5F6FA',
    fontSize: '1.1em',
    fontWeight: 500,
    margin: '0 18px',
    transition: 'color 0.3s, border-bottom 0.2s',
    borderBottom: '2px solid transparent',
    background: 'transparent !important',
    backgroundColor: 'transparent !important',
    backgroundImage: 'none !important',
  };

  const barBtn = {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: '24px',
  };

  const handleButton = () => {
    setShow(!show);
  };

  const handleNavLinkHover = (event) => {
    event.target.style.color = '#444B53';
    event.target.style.transition = 'color 0.3s';
  };
  const handleNavLinkMouseOut = (event) => {
    event.target.style.color = '#F5F6FA';
    event.target.style.transition = 'color 0.3s';
  };

  return (
    <Flex
      as="nav"
      ref={navRef}
      className={isScrolled ? 'scrolled' : ''}
      align="center"
      justify={isDesktop ? 'space-between' : 'space-between'}
      w="100%"
      p="0"
      style={{ position: 'relative' }}
      sx={{
        // Aggressively force all children to be transparent
        '& *': {
          background: 'transparent !important',
          backgroundColor: 'transparent !important',
          backgroundImage: 'none !important',
        },
      }}
    >
      {/* .navbar-bg overlay removed */}
      <Box
        as="div"
        className="nav-container"
        flex={isDesktop ? 'none' : 1}
        display="flex"
        alignItems="center"
        justifyContent={isDesktop ? 'flex-start' : 'flex-start'}
        style={{ background: 'transparent', position: 'relative', zIndex: 1, padding: '20px' }}
      >
        <Breadcrumb separator={" "}>
          <BreadcrumbItem isCurrentPage>
            <img
              src={Logo}
              width={"43px"}
              height={"43px"}
              style={{ verticalAlign: 'middle', background: 'transparent', backgroundColor: 'transparent', backgroundImage: 'none' }}
              alt="Logo"
            />
            <BreadcrumbLink
              href="#"
              fontWeight={"bold"}
              ml={"5px"}
              fontSize={"20px"}
              sx={{ background: 'transparent !important', backgroundColor: 'transparent !important', backgroundImage: 'none !important' }}
            >
              Hady Alkadri
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box
        flex={isDesktop ? 'none' : 1}
        className="nav-container"
        display="flex"
        alignItems="center"
        justifyContent={isDesktop ? 'flex-end' : 'flex-end'}
        style={{ background: 'transparent', position: 'relative', zIndex: 1, padding: '20px' }}
      >
        {isDesktop ? (
          <Breadcrumb separator={" "}>
            <BreadcrumbItem>
              <BreadcrumbLink
                sx={boxStyles}
                onClick={() => {
                  portfolioRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
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
                    behavior: 'smooth',
                    block: 'center',
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
                    behavior: 'smooth',
                    block: 'center',
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
                    behavior: 'smooth',
                    block: 'center',
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
                    behavior: 'smooth',
                    block: 'center',
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
                    behavior: 'smooth',
                    block: 'center',
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
                  contactRef.current.scrollIntoView({ behavior: 'smooth' });
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
            {show ? <FaCross /> : <FaBars />}
          </Button>
        )}
      </Box>
    </Flex>
  );
};

export default React.forwardRef(NavBar);