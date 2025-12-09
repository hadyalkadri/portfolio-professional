/* eslint-disable react/prop-types */
import React from 'react';
import {Box, Flex, Stack, Heading, Text, Link, Center, VStack} from '@chakra-ui/react';
import ImgOne from '../assets/landing_page.png';
import ImgTwo from '../assets/Amazon.png';
import ImgThree from '../assets/chat_app.png';
// import portfolioBg from '../assets/portfolio_background.jpg';
import starryBg from '../assets/starry-bg.jpg';
import "../homeComp/Portfolio.css";
import { FaCode, FaGithub } from 'react-icons/fa';

function Portfolio({isMobile, isLessThan400}, ref) {

    const containerStyles = {
        backgroundImage: `url(${starryBg}) `,
        backgroundRepeat: 'repeat-y',
        // backgroundColor: 'black',
        backgroundSize: 'cover',
        webkitFilter: 'blur(70%)',
        // backgroundColor: '#6E2ED6',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        padding: '30px',
    }

    const boxStyles = {
        textAlign: 'center',
        marginTop: '50px'
      
    }

    const textStyles = {
        fontStyle: 'italic',
        padding: '10px',
    }

    const linkStyles = {
        color: 'white',
        
    }

  return (
    
        <Flex style={containerStyles} ref={ref}>
            
            <Box>
                <Stack direction={['column', 'row']}>
                    <Flex justify={'center'} padding={'4em'} 
                        borderRight={isMobile ? '1px solid purple' : null} 
                        borderBottom={isMobile ? null : '3px solid purple'}
                        marginRight={isMobile ? '5px' : null}
                    >
                        <VStack>
                            <Heading color={'purple'}>Portfolio</Heading>
                            <FaCode color={'purple'} fontSize={'6em'} />
                        </VStack>
                    </Flex>
                    <Box style={boxStyles}>
                        <Box>
                            <img className='imageStyles' src={ImgOne} width={isLessThan400 ? '390px' : '600px'} height={isLessThan400 ? '390px' : '600px'}/>
                        </Box>
                        <Text style={textStyles}>Wireframe design for the landing page of one of my clients.</Text>
                        <Center>
                            <Link href='https://github.com/hadyalkadri/vite-chakra-landing-page' target='_blank'  style={linkStyles}><FaGithub /></Link>
                        </Center>
                    </Box>
                    <Box style={boxStyles}>
                        <Box>
                            <img className='imageStyles' src={ImgTwo} width={isLessThan400 ? '390px' : '600px'} height={isLessThan400 ? '300px' : '600px'}/>
                        </Box>
                        <Text style={textStyles}>Fully fledged Amazon E-commerce Web Application Clone.</Text>
                        <Center>
                            <Link href='https://github.com/hadyalkadri/e-commerce-web-app' target='_blank' style={linkStyles}><FaGithub /></Link>
                        </Center>
                    </Box>
                    <Box style={boxStyles}>
                        <Box>
                            <img className='imageStyles' src={ImgThree} width={isLessThan400 ? '390px' : '600px'} height={isLessThan400 ? '390px' : '600px'}/>
                        </Box>
                        <Text style={textStyles}>Next.js real-time chating app using Web Sockets.</Text>
                        <Center>
                            <Link href='https://github.com/hadyalkadri/chat-app-nextjs' target='_blank' style={linkStyles}><FaGithub /></Link>
                        </Center>
                    </Box>
                </Stack>
            </Box>
        </Flex>

  )
}

export default React.forwardRef(Portfolio)