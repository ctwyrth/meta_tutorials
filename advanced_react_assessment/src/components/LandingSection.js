import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import userImg from "../images/me_memoji.jpg";

const greeting = "Hi, I'm Thomas!";
const bio1 = "A frontend developer";
const bio2 = "specialized in Javascript and React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={10}>
      <VStack spacing={3}>
        <Avatar size="xl" name="Thomas Wyrth" src={userImg} />
        <Heading as="h4" size="sm">{greeting}</Heading>
      </VStack>
      <VStack spacing={3}>
        <Heading as="h3" size="xl">{bio1}</Heading>
        <Heading as="h3" size="xl">{bio2}</Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
