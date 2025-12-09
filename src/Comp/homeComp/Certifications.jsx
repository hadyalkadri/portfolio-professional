import React from 'react';
import { Box, Heading, Text, SimpleGrid, Icon } from '@chakra-ui/react';
import { certificationData } from '../../data';
import { FaAward } from 'react-icons/fa';
import { SiCoursera, SiLinkedin } from 'react-icons/si';
import { FaUniversity } from 'react-icons/fa';
import PropTypes from 'prop-types';
import logoWatermark from '../assets/logo.png';

const icons = {
    Coursera: SiCoursera,
    Linkedin: SiLinkedin,
    University: FaUniversity,
    Default: FaAward
};

const CertificationItem = ({ name, issuer, date, icon }) => {
    const IconComponent = icons[icon] || icons.Default;

    return (
        <Box className="cert-card" position="relative" p={6} borderRadius="16px" boxShadow="0 4px 24px rgba(106,29,112,0.12)" bg="#232946" minW="220px" maxW="320px" m="auto">
            <Box className="cert-badge">✔</Box>
            <Icon as={IconComponent} w={10} h={10} color="#e333bd" mb={3} display="block" mx="auto" />
            <Heading as="h4" size="md" color="#F5F6FA" textAlign="center">{name}</Heading>
            <Text fontSize="md" fontStyle="italic" color="#6A1D70" textAlign="center">{issuer}</Text>
            <Text fontSize="sm" color="#fff800" textAlign="center">{date}</Text>
        </Box>
    );
};

CertificationItem.propTypes = {
    name: PropTypes.string.isRequired,
    issuer: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

function Certifications(props, ref) {
    return (
        <Box ref={ref} w="100%" py="100px" px="30px" position="relative">
            {/* Center watermark logo graphic */}
            <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" zIndex={0} opacity={0.13} pointerEvents="none">
                <img src={logoWatermark} alt="logo watermark" style={{ width: '220px', height: '220px', objectFit: 'contain', filter: 'grayscale(1) brightness(0.5)', backgroundColor: '#4F4D3E', borderRadius: '50%' }} />
            </Box>
            <Box maxW="1000px" mx="auto" zIndex={1} position="relative">
                <Heading as="h2" size="xl" textAlign="center" mb={12} className="about-heading">
                    Certifications
                </Heading>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
                    {certificationData.map((item, index) => (
                        <CertificationItem
                            key={index}
                            name={item.name}
                            issuer={item.issuer}
                            date={item.date}
                            icon={item.icon}
                        />
                    ))}
                </SimpleGrid>
            </Box>
        </Box>
    );
}

export default React.forwardRef(Certifications);
