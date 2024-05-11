
import { Box, Heading, Text } from '@chakra-ui/react';
import { FaLock } from 'react-icons/fa';








const PrivacyPolicy = () => {
  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        <FaLock /> Privacy Policy
      </Heading>
      <Text>
        At Magendo Tours, Hotels, and Travelling, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose your personal information.
      </Text>
      <Text mt={4}>
        <strong>Information We Collect:</strong><br/>
        - Personal information (e.g., name, email, phone number) provided by you during registration or booking.<br/>
        - Non-personal information (e.g., IP address, browser type) automatically collected when you visit our website.<br/>
      </Text>
      <Text mt={4}>
        <strong>How We Use Your Information:</strong><br/>
        - To provide and improve our services.<br/>
        - To communicate with you about your bookings and inquiries.<br/>
        - To personalize your experience and offer tailored recommendations.<br/>
      </Text>
      <Text mt={4}>
        <strong>Disclosure of Information:</strong><br/>
        - We may share your information with third-party service providers for the purpose of fulfilling your bookings.<br/>
        - We may disclose your information in response to legal requests or to protect our rights.<br/>
      </Text>
      <Text mt={4}>
        <strong>Security:</strong><br/>
        - We implement appropriate security measures to protect your information against unauthorized access and misuse.<br/>
      </Text>
      <Text mt={4}>
        <strong>Changes to this Privacy Policy:</strong><br/>
        - We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page.<br/>
      </Text>
      <Text mt={4}>
        If you have any questions or concerns about our Privacy Policy, please contact us at privacy@magendo.com.
      </Text>
    </Box>
  );
}

export default PrivacyPolicy;
