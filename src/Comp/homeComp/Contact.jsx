/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import {
  Flex,
  Button,
  Input,
  Textarea,
  Stack,
  SimpleGrid,
  Text,
  Container,
  Heading,
  Box,
  HStack,
  Center,
  FormControl,
  FormLabel,
  useToast
} from "@chakra-ui/react";

import {FaEnvelope, FaLocationArrow, FaPhone, FaUser} from 'react-icons/fa';
import emailjs from "@emailjs/browser";

function Contact(props, ref) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");


  
  const toast = useToast();
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const tempParams = {
      user_name: name,
      to_name: 'Hady Alkadri',
      user_email: email,
      subject: subject,
      message: message
    }
    
    


    if (name === "" || email === "" || subject === "" || message === ""){

      toast({
        title: 'Error: message is empty!',
        description: 'You have missing a field.',
        duration: 3000,
        isClosable: true,
        colorScheme: 'red',
        position: 'top'
      })
    }
    else{
      emailjs.send('service_ll45ihc', 'template_bvfa6pl', tempParams, 'e6PbAj2qrbE9oWA43')
      .then((result) => {
        alert(result.text);
      }, (err) => {
        alert(err.text);
      });
    }


  

  }

  const contactContainerStyles = {
    background: 'linear-gradient(135deg, #232946 60%, #6A1D70 100%)',
    width: '100%',
    padding: '5vw 2vw', // Responsive padding
    // borderRadius: 'max(16px, 2vw)', // Responsive border radius
    boxShadow: '0 8px 32px rgba(106,29,112,0.18)',
    margin: '0 auto',
    borderTop: '1px solid black',
    paddingTop: '4vw', // Responsive top padding
    paddingBottom: '8vw', // Increased bottom padding for mobile
    color: '#F5F6FA',
  }

  const detailStyles = {
    marginTop: 'max(20px, 3vw)' // Responsive margin
  }

  const contactFormStyles = {
    marginTop: '0.5vw', // Reduced top margin
    color: '#F5F6FA',
    background: '#232946',
    borderRadius: 'max(12px, 1vw)',
    boxShadow: '0 2px 16px rgba(106,29,112,0.10)',
    padding: '1vw', // Reduced padding
    width: '100%',
    maxWidth: '700px', // Make form even wider
  }

  const inputStyles = {
    border: '1px solid #6A1D70',
    color: '#F5F6FA',
    background: '#191919',
    borderRadius: 'max(8px, 1vw)',
    fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', // Responsive font size
  }

  const textAreaStyles = {
    border: '1px solid #6A1D70',
    resize: 'none',
    width: '100%',
    height: 'min(120px, 20vw)', // Responsive height
    color: '#F5F6FA',
    background: '#191919',
    borderRadius: 'max(8px, 1vw)',
    fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
  }

  return (
    <Flex style={contactContainerStyles} ref={ref} position="relative">
      <Container centerContent maxWidth={{ base: '100%', md: '1400px' }} zIndex={1}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: '2em', md: '4em' }} alignItems="stretch">
          <Box width={{ base: '100%', md: '100%' }} mx="auto">
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <HStack style={contactFormStyles} mb={2}>
                <FaEnvelope color='purple' />
                <Heading size={'md'} color={'#7f2687'} fontSize={{ base: '1.1rem', md: '1.5rem' }}>Send me a message!</Heading>
              </HStack>
              <Stack style={contactFormStyles} spacing={2}>
                <SimpleGrid spacingY={'2px'}>
                  <FormControl>
                    <FormLabel fontSize={{ base: '0.95rem', md: '1.1rem' }}>Name:</FormLabel>
                    <Input sx={inputStyles} placeholder='John Doe' type='user_name' value={name} onChange={(e) => {setName(e.target.value)}}></Input>
                  </FormControl>
                </SimpleGrid>
              </Stack>
              <Stack style={contactFormStyles} spacing={2}>
                <SimpleGrid spacingY={'2px'}>
                  <FormControl>
                    <FormLabel fontSize={{ base: '0.95rem', md: '1.1rem' }}>Email:</FormLabel>
                    <Input sx={inputStyles} placeholder='yourName@email.com' type='email' value={email} onChange={(e) => {setEmail(e.target.value)}}></Input>
                  </FormControl>
                </SimpleGrid>
              </Stack>
              <Stack style={contactFormStyles} spacing={2}>
                <SimpleGrid spacingY={'2px'}>
                  <FormControl>
                    <FormLabel fontSize={{ base: '0.95rem', md: '1.1rem' }}>Subject:</FormLabel>
                    <Input sx={inputStyles} placeholder='Inquiry' type='subject' value={subject} onChange={(e) => {setSubject(e.target.value)}}></Input>
                  </FormControl>
                </SimpleGrid>
              </Stack>
              <Stack style={contactFormStyles} spacing={2}>
                <SimpleGrid spacingY={'4px'}>
                  <FormControl>
                    <FormLabel fontSize={{ base: '0.95rem', md: '1.1rem' }}>Message:</FormLabel>
                    <Textarea sx={textAreaStyles} type='message' value={message} onChange={(e) => {setMessage(e.target.value)}}></Textarea>
                  </FormControl>
                  <Button bg={'#af81de'} type='submit' value={'send'} mt={"10px"} fontSize={{ base: '1rem', md: '1.2rem' }}>Submit</Button>
                </SimpleGrid>
              </Stack>
            </form>
          </Box>
          <Center width="100%" justifyContent={{ base: 'center', md: 'flex-start' }}>
            <Box width={[null, "100%", "100%", "100%"]} textAlign={{ base: 'center', md: 'left' }}>
              <Stack marginBottom={'30px'}>
                <Heading size={'md'} color={'darkgray'} fontSize={{ base: '1.1rem', md: '1.5rem' }}>Contact Details</Heading>
              </Stack>
              <HStack style={detailStyles}>
                <FaUser />
                {/* so if you want to add responsive width to chakraUI comps this is the way   */}
                {/*width = {[base, sm, md, lg, xl]} width={["100%", null, null, null]} */}
                <Text  fontSize={{ base: 'sm', md: 'md' }}>&nbsp; Hady Alkadri</Text>
              </HStack>
              <HStack style={detailStyles}>
                <FaEnvelope />
                <Text  fontSize={{ base: 'sm', md: 'md' }}>&nbsp; hadyalkaderi@gmail.com</Text>
              </HStack>
              <HStack style={detailStyles}> 
                <FaLocationArrow />
                <Text fontSize={{ base: 'sm', md: 'md' }}>&nbsp; Al Maalla, Aden, Yemen</Text>
              </HStack>
              <HStack style={detailStyles}>
                <FaPhone />
                <Text fontSize={{ base: 'sm', md: 'md' }}>&nbsp; (+967) &nbsp; 774 585 750</Text>
              </HStack>
            </Box>
          </Center>
        </SimpleGrid>
      </Container>
    </Flex>
  )
}

export default React.forwardRef(Contact)