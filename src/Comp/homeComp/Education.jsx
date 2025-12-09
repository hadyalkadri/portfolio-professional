import React, { useState } from 'react';
import { Box, Heading, Text, VStack, Flex, useColorModeValue, Button, Modal, ModalOverlay, ModalContent, ModalBody, IconButton } from '@chakra-ui/react';
import { educationData } from '../../data';
import { FaGraduationCap } from 'react-icons/fa';
import { CloseIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';
import Cert from '../assets/BSc_cert.png';

const CertificateModal = ({ isOpen, onClose }) => (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay bg="rgba(0,0,0,0.75)" />
        <ModalContent bg="transparent" boxShadow="none">
            <ModalBody display="flex" justifyContent="center" alignItems="center" p={0}>
                <Box position="relative" mx="auto" my={8}>
                    {/* Certificate Card */}
                    <Box
                        bg="white"
                        borderRadius="xl"
                        boxShadow="0 8px 32px rgba(0,0,0,0.25)"
                        border="8px solid #d4af37" // Ornate gold border
                        p={8}
                        minW="360px"
                        maxW="480px"
                        minH="320px"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        position="relative"
                    >
                        {/* Gold Seal */}
                        <Box
                            position="absolute"
                            left={6}
                            bottom={6}
                            w="56px"
                            h="56px"
                            borderRadius="full"
                            bgGradient="radial(gold 60%, #d4af37 100%)"
                            border="4px solid #bfa334"
                            boxShadow="0 0 12px 2px #d4af37"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            zIndex={2}
                        >
                            <Text fontWeight="bold" color="#fff" fontSize="lg">Seal</Text>
                        </Box>
                        {/* Certificate Image */}
                        <img src={Cert} alt="Certificate" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 2px 12px #d4af37' }} />
                    </Box>
                    {/* Close Button */}
                    <Box position="absolute" top={-24} right={-24}>
                        <IconButton
                            aria-label="Close certificate"
                            icon={<Box bg="red.500" borderRadius="full" w="28px" h="28px" display="flex" alignItems="center" justifyContent="center"><CloseIcon color="white" boxSize={4} /></Box>}
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

const TimelineItem = ({ icon, period, degree, institution, details, isLast }) => {
    const bg = useColorModeValue('gray.700', 'gray.900');
    const color = useColorModeValue('white', 'gray.200');
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <Flex>
            <Flex direction="column" alignItems="center" mr={4}>
                <Box
                    as={icon}
                    p={2}
                    borderRadius="full"
                    bg="purple.500"
                    color="white"
                    boxSize="40px"
                />
                <Flex
                    direction={"column"}
                    align={"center"}
                    h={"100%"}
                >
                    <Box w="1px" flexGrow={1} bg="gray.400" />
                    {isLast && (
                        <Box 
                            w="10px" 
                            h="10px" 
                            borderRadius="full" 
                            bg="white" 
                            border="2px solid" 
                            borderColor="gray.400"
                        />
                    )}
                </Flex>
            </Flex>
            <Box p={4} bg={bg} borderRadius="md" boxShadow="md" color={color} mb={6} width="100%">
                <Text fontSize="sm" color="gray.400">{period}</Text>
                <Heading as="h4" size="md" mt={1}>{degree}</Heading>
                <Text fontSize="md" fontStyle="italic" color="purple.300">{institution}</Text>
                <Text mt={2}>{details}</Text>
                <Box marginTop={4}>
                {isLast && (
                    <>
                        <Button onClick={() => setModalOpen(true)}>View Certificate</Button>
                        <CertificateModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
                    </>
                )}
                </Box>
            </Box>
        </Flex>
    );
};

CertificateModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

TimelineItem.propTypes = {
    icon: PropTypes.elementType.isRequired,
    period: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    isLast: PropTypes.bool,
};

function Education(props, ref) {
    return (
        <Flex ref={ref} w="100%" justify="center" py="100px" px="30px" bg="#232946">
            <Box maxW="800px" w="100%">
                <Heading as="h2" size="xl" textAlign="center" mb={12} className="about-heading">
                    Education
                </Heading>
                <VStack spacing={0} align="stretch">
                    {educationData.map((item, index) => (
                        <TimelineItem
                            key={index}
                            icon={FaGraduationCap}
                            period={item.period}
                            degree={item.degree}
                            institution={item.institution}
                            details={item.details}
                            isLast={index === educationData.length - 1}
                        />
                    ))}
                </VStack>
            </Box>
        </Flex>
    );
}

export default React.forwardRef(Education);
