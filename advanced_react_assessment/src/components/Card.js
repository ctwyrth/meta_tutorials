import { Heading, HStack, Image, Text, VStack,  } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack bg="white" overflow="hidden" borderRadius="xl" key={title}>
      <Image src={imageSrc} alt={title} borderRadius="xl" />
      <VStack bg="white" p={4} align="left">
        <Heading as="h4" size="md" color="black">{title}</Heading>
        <Text color="gray">{description}</Text>
        <HStack>
          <Text color="black">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} color="black" size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
