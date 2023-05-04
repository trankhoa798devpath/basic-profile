import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack borderRadius="lg" bg="white">
      <Image src={imageSrc} borderRadius="lg" />
      <VStack alignItems="flex-start" spacing={4} padding={4}>
        <Text as="b" color="black">
          {title}
        </Text>
        <Text color="gray.600">{description}</Text>
        <HStack spacing={2}>
          <Text color="black" fontSize="xs">
            See more
          </Text>
          <FontAwesomeIcon size="1x" icon={faArrowRight} color="black" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
