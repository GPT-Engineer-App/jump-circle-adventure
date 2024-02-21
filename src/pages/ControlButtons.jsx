import React from "react";
import { HStack, Button } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ControlButtons = () => {
  return (
    <HStack spacing={4} justifyContent="center" paddingTop="20px">
      <Button colorScheme="blue" leftIcon={<FaArrowLeft />}>
        Left
      </Button>
      <Button colorScheme="blue" rightIcon={<FaArrowRight />}>
        Right
      </Button>
    </HStack>
  );
};

export default ControlButtons;
