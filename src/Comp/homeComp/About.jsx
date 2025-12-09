import React, {useState} from 'react';
import { Flex, Container, Text, Heading, Box, Button, HStack, VStack, Image, Modal, ModalOverlay, ModalContent, ModalBody, IconButton } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { CloseIcon } from '@chakra-ui/icons';
import IMG from '../assets/about-me.jpeg';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function About({isLessThan400, isMobile}, ref) {
    const [resumeModalOpen, setResumeModalOpen] = useState(false);

    const containerStyles = {
       
        // borderRadius: '0 25% 0 25%',
        // border: '3px solid white',
        borderRadius: '15px 15px 15px 15px',
        padding: isLessThan400 ? '30px' : '70px',
        paddingTop: '140px',
        paddingBottom: '150px',
        maxWidth: '1200px' 
    }

    // const imageStyles = {
    //     borderRadius: '15px 15px 15px 15px',
    //     padding: isLessThan400 ? '30px' : '70px',
    //     marginTop: '100px'
         
    // }

    const socialMediaLinks = {
        padding: '20px',
        marginTop: '90px',
        
    }

    // const pdfStyles = {
    //     paddingTop: '50px',
    //     border: '3px solid black',
    //     borderRadius: '10px',
    //     boxShadow: '3px 0px 25px 3px black'
    // }

    const iconStyles = {
        fontSize: '25px'  
    }


    const closeBtnStyles = {
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        padding: '5px'

    }

    const ResumeModal = ({ isOpen, onClose }) => (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
            <ModalOverlay bg="rgba(0,0,0,0.75)" />
            <ModalContent bg="transparent" boxShadow="none">
                <ModalBody display="flex" justifyContent="center" alignItems="center" p={0}>
                    <Box position="relative" mx="auto" my={8}>
                        <Box
                            bg="white"
                            borderRadius="xl"
                            boxShadow="0 8px 32px rgba(0,0,0,0.25)"
                            border="8px solid #d4af37"
                            p={8}
                            minW="360px"
                            maxW="640px"
                            minH="320px"
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            position="relative"
                        >
                            <iframe src="https://drive.google.com/file/d/12MxhauurRyp83GJQaZzaWF4L3Yqy87Ij/preview" width="560" height="480" allow="autoplay" style={{ borderRadius: '12px', boxShadow: '0 2px 12px #d4af37', border: 'none' }} />
                        </Box>
                        <Box position="absolute" top={-24} right={-24}>
                            <IconButton
                                aria-label="Close resume preview"
                                icon={<Box bg="red.500" borderRadius="full" w="48px" h="48px" display="flex" alignItems="center" justifyContent="center"><CloseIcon color="white" boxSize={8} /></Box>}
                                onClick={onClose}
                                bg="transparent"
                                _hover={{ bg: 'transparent' }}
                                size="lg"
                            />
                        </Box>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    );

    ResumeModal.propTypes = {
        isOpen: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired,
    };

  return (
    <Flex bgColor={'#191919'} w='100%' ref={ref} >
    
        <Container  style={containerStyles} centerContent>
            <Heading className='about-heading'>
                About Me
            </Heading>
            {/* <Text className='about-text' fontSize={['0.8em','1.125em']}>
                I am a Web developer with an eye for details and the will to continuously 
                improve. Experienced in full-stack development using the MERN/ 
                MEAN stack, along with other technologies that enables me to 
                create powerful and unique web applications
            </Text> */}
            <VStack>
                <Text className='about-text' fontSize={['2em','2.45em']}>
                &quot; I found my pleasure in desgining and coding tasteful and powerful applications for my clients. &quot; 
                </Text>
             
                <HStack w={'100%'} spacing={'20px'} mt={'30px'} pl={'25px'}>
                    <Image
                        src={IMG}
                        borderRadius="50%"
                        alt="my_photo"
                        boxSize={"30px"}
                        
                    ></Image>
                    <Text><span id='aboutTitle'>Hady Alkadri</span></Text>
                </HStack>
            </VStack>
            <Box sx={socialMediaLinks} >
                <HStack direction={['column', 'row']} >
                    <a href='https://github.com/hadyalkadri' target='_blank' rel="noreferrer">
                        <FaGithub style={iconStyles} />
                    </a>
                    <a href='https://www.instagram.com/hadyalkaderi/' target='_blank' rel="noreferrer">
                        <FaInstagram style={iconStyles} />
                    </a>
                    <a href='https://www.linkedin.com/in/hady-alkadri-7813ab18b/' target='_blank' rel="noreferrer">
                        <FaLinkedin style={iconStyles} />
                    </a>
                    <Box marginLeft={'30px'} >
                    {
                        isMobile ? 
                        <>
                            <Button sx={resumeModalOpen ? closeBtnStyles : null} fontSize={['0.5em','1em']} onClick={() => setResumeModalOpen(true)}>{resumeModalOpen ? "Close" : "Preview Resume"}</Button>
                            <ResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
                        </>
                        :
                        <a href='https://drive.google.com/file/d/1wtbKzO12Ukjt5Ok0NZK9m-MJYd-xVnE_/view?usp=share_link' target='_blank' rel="noreferrer">
                            <Button fontSize={['0.5em','1em']} >Download Resume</Button>
                        </a>
                    }  
                    </Box>
                </HStack>
            </Box>
            
        </Container>
    </Flex>
  )
}

export default React.forwardRef(About)