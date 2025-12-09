import React from 'react';
import {Flex, Box, Text, HStack, Button, VStack} from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaLinkedin, FaArrowUp} from 'react-icons/fa';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Optional: Smooth scrolling behavior
    });
  };

  const scrollBtn = {
    borderRadius: '0 0 50% 50%',
    width: '100%',
    backgroundColor: 'grey',
    height: '22px'

  }

  return (
    <div>
      <Flex justify={'center'} padding={'30px'} bg={'black'}>

        <VStack>
          
          <Box>
              <HStack spacing={'40px'}>
              <a href='https://github.com/hadyalkadri' target='_blank' rel='noreferrer'>
                <FaGithub color='#4F4D3E' fontSize={'3em'} />
              </a>
              
              <a href='https://www.instagram.com/hadyalkaderi/' target='_blank' rel='noreferrer'>
                <FaInstagram color='#4F4D3E' fontSize={'3em'} />
              </a>

              <a href='https://www.linkedin.com/in/hady-alkadri-7813ab18b/' target='_blank' rel='noreferrer'>
                <FaLinkedin color='#4F4D3E' fontSize={'3em'} />
              </a>  
              </HStack>
              
              <Text align={'center'} paddingTop={'35px'}>Made By <span className='footerTxt'> Hady Alkadri</span></Text>
          </Box>
          <Box width={'100%'} paddingTop={'15px'}>   
            <Button sx={scrollBtn} onClick={scrollToTop}><FaArrowUp /></Button>
          </Box>
        </VStack>
      </Flex>
      <VStack></VStack>
    </div>
  )
}

export default Footer