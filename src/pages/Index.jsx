import React from "react";
import { Box, Select, Heading, Text, VStack, Code, Link } from "@chakra-ui/react";
import { FaHashtag, FaDotCircle, FaGreaterThan } from "react-icons/fa";

const SELECTORS = [
  { label: "Class Selector", value: ".class", icon: FaDotCircle },
  { label: "ID Selector", value: "#id", icon: FaHashtag },
  { label: "Element Selector", value: "element", icon: FaGreaterThan },
  {
    label: "Attribute Selector",
    value: '[attribute="value"]',
    icon: FaHashtag,
  },
  { label: "Descendant Selector", value: "ancestor descendant", icon: FaGreaterThan },
  { label: "Child Selector", value: "parent > child", icon: FaGreaterThan },
];

const Index = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="2xl" mb={8}>
        CSS Selector Reference
      </Heading>

      <Select placeholder="Select a CSS selector" mb={8}>
        {SELECTORS.map((selector) => (
          <option key={selector.value} value={selector.value}>
            {selector.label}
          </option>
        ))}
      </Select>

      <VStack align="start" spacing={8}>
        {SELECTORS.map((selector) => (
          <Box key={selector.value}>
            <Heading as="h2" size="lg" display="flex" alignItems="center" mb={2}>
              <Box as={selector.icon} mr={2} />
              {selector.label}
            </Heading>
            <Text mb={2}>{selector.description}</Text>
            <Code colorScheme="blue" children={selector.value} />
          </Box>
        ))}
      </VStack>

      <Text mt={12}>
        Learn more about{" "}
        <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" color="blue.500" isExternal>
          CSS Selectors on MDN
        </Link>
      </Text>
    </Box>
  );
};

export default Index;
