import React from 'react';
import { Box, Heading, Text, Flex, useColorModeValue, Icon } from '@chakra-ui/react';
import { experienceData } from '../../data';
import { FaBriefcase } from 'react-icons/fa';
import PropTypes from 'prop-types';

const TimelineItem = ({ icon, period, role, company, description, align, isLatest }) => {
    const bg = useColorModeValue('#232946', '#232946');
    // Only the latest job gets the highlight color, all others use the neutral color
    const highlightColor = '#e333bd'; // Highlight for latest
    const neutralColor = '#6A1D70';   // Neutral for all others
    const borderColor = isLatest ? highlightColor : neutralColor;
    return (
        <Flex position="relative" mb={10} justify={align === 'left' ? 'flex-start' : 'flex-end'}>
            <Box
                className="timeline-dot"
                position="absolute"
                left={align === 'left' ? '-16px' : 'unset'}
                right={align === 'right' ? '-16px' : 'unset'}
                top="50%"
                transform="translateY(-50%)"
                bg={borderColor}
                borderRadius="full"
                w="16px"
                h="16px"
                zIndex={2}
                border={isLatest ? '3px solid #fff800' : '3px solid transparent'}
            />
            <Box
                className="timeline-card"
                borderLeft={align === 'left' ? `4px solid ${borderColor}` : 'none'}
                borderRight={align === 'right' ? `4px solid ${borderColor}` : 'none'}
                bg={bg}
                borderRadius="16px"
                boxShadow="0 4px 24px rgba(106,29,112,0.12)"
                p={6}
                minW="320px"
                maxW="420px"
                ml={align === 'left' ? 8 : 0}
                mr={align === 'right' ? 8 : 0}
            >
                <Flex align="center" mb={2}>
                    <Icon as={icon} color={borderColor} boxSize={6} mr={2} />
                    <Text fontSize="sm" color="#fff800">{period}</Text>
                </Flex>
                <Heading as="h4" size="md" color="#F5F6FA">{role}</Heading>
                <Text fontSize="md" fontStyle="italic" color="#e333bd">{company}</Text>
                <Text mt={2} color="#F5F6FA">{description}</Text>
            </Box>
        </Flex>
    );
};

TimelineItem.propTypes = {
    icon: PropTypes.elementType.isRequired,
    period: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    align: PropTypes.oneOf(['left', 'right']),
    isLatest: PropTypes.bool
};

function Experience(props, ref) {
    // Do NOT reverse the array, keep the order as in data
    return (
        <Box ref={ref} w="100%" py="100px" px="30px">
            <Box maxW="900px" mx="auto">
                <Heading as="h2" size="xl" textAlign="center" mb={12} className="about-heading">
                    Work Experience
                </Heading>
                <Box position="relative" _before={{content:'""', position:'absolute', left:'50%', top:0, bottom:'-25px', width:'4px', bg:'#6A1D70', transform:'translateX(-50%)', zIndex:1}}>
                    {experienceData.map((item, index) => (
                        <TimelineItem
                            key={index}
                            icon={FaBriefcase}
                            period={item.period}
                            role={item.role}
                            company={item.company}
                            description={item.description}
                            align={index % 2 === 0 ? 'left' : 'right'}
                            isLatest={index === experienceData.length - 1}
                        />
                    ))}
                    {/* Pulsing circle at the end of the timeline */}
                    <Box
                        position="absolute"
                        left="50%"
                        bottom="-32px"
                        transform="translateX(-50%)"
                        zIndex={2}
                        w="32px"
                        h="32px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Box
                            as="span"
                            w="18px"
                            h="18px"
                            borderRadius="full"
                            bg="#6A1D70"
                            boxShadow="0 0 0 0 #fff800"
                            animation="pulse 2.2s cubic-bezier(0.4,0,0.2,1) infinite"
                        />
                    </Box>
                </Box>
            </Box>
            {/* Pulse animation keyframes */}
            <style>{`
                @keyframes pulse {
                  0% {
                    box-shadow: 0 0 0 0 rgba(106,29,112, 0.5);
                  }
                  70% {
                    box-shadow: 0 0 0 16px rgba(106,29,112, 0);
                  }
                  100% {
                    box-shadow: 0 0 0 0 rgba(106,29,112, 0);
                  }
                }
            `}</style>
        </Box>
    );
}

export default React.forwardRef(Experience);
