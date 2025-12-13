import React from 'react';
import { Box, Heading, Text, Icon } from '@chakra-ui/react';
import { volunteeringData } from '../../data';
import { FaHandsHelping, FaHandHoldingHeart, FaLeaf } from 'react-icons/fa';
import PropTypes from 'prop-types';

const VolunteeringCard = ({ icon, period, role, organization, description }) => {
    return (
        <Box className="vol-card" position="relative" p={8} borderRadius="20px" boxShadow="0 4px 24px rgba(106,29,112,0.12)" bg="#232946" maxW="700px" mx="auto" mb={8} overflow="hidden">
            <Icon as={icon} className="vol-watermark" color="#6A1D70" boxSize={32} position="absolute" top="-20px" right="-20px" opacity={0.08} zIndex={1} />
            <Text fontSize="sm" color="#fff800" mb={2} position="relative" zIndex={2}>{period}</Text>
            <Heading as="h4" size="lg" color="#F5F6FA" mb={1} position="relative" zIndex={2}>{role}</Heading>
            <Text fontSize="md" fontStyle="italic" color="#e333bd" mb={2} position="relative" zIndex={2}>{organization}</Text>
            <Text color="#F5F6FA" position="relative" zIndex={2}>{description}</Text>
        </Box>
    );
};

VolunteeringCard.propTypes = {
    icon: PropTypes.elementType.isRequired,
    period: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

function Volunteering(props, ref) {
    // Choose icons for each volunteering experience
    const icons = [FaHandsHelping, FaHandHoldingHeart, FaLeaf];
    return (
        <Box ref={ref} w="100%" py="100px" px="30px" bg="#232946">
            <Box maxW="900px" mx="auto">
                <Heading as="h2" size="xl" textAlign="center" mb={12} className="about-heading">
                    Volunteering
                </Heading>
                {volunteeringData.map((item, index) => (
                    <VolunteeringCard
                        key={index}
                        icon={icons[index] || FaHandsHelping}
                        period={item.period}
                        role={item.role}
                        organization={item.organization}
                        description={item.description}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default React.forwardRef(Volunteering);
