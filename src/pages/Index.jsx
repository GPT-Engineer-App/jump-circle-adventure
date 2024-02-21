import React from "react";
import { Box, Center, VStack, Text, Divider } from "@chakra-ui/react";
import { FaCircle, FaChevronUp } from "react-icons/fa";

const GameObstacle = () => {
  return (
    <Center h="50px" color="red.500">
      <FaChevronUp size="2em" />
    </Center>
  );
};

const Player = () => {
  return (
    <Center h="50px" color="blue.500">
      <FaCircle size="2em" />
    </Center>
  );
};

const FinishLine = () => {
  return (
    <Box w="100%" bg="blackAlpha.500">
      <Divider borderColor="white" />
      <Text color="white" textAlign="center">
        Finish
      </Text>
      <Divider borderColor="white" />
    </Box>
  );
};

import ControlButtons from "./ControlButtons.jsx";

const Index = () => {
  return (
    <VStack spacing={4} p={4}>
      <Text fontSize="2xl">Circle Jump Game</Text>
      <Box w="100%" h="300px" bg="gray.100" position="relative">
        {/* Static Player */}
        <Player />

        {/* Static Obstacles */}
        <GameObstacle />
        <GameObstacle />
        <GameObstacle />

        {/* Static Finish Line */}
        <FinishLine />
      </Box>
      <Text>Use mobile touch controls to play</Text>
      {/* Control Buttons */}
      <ControlButtons />
    </VStack>
  );
};

export default Index;
