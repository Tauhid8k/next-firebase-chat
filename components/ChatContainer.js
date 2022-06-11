import { Flex, Text } from "@chakra-ui/react";

const ChatContainer = () => {
  return (
    <Flex
      p="3"
      flex={1}
      direction="column"
      gap="0.5rem"
      overflowX="scroll"
      sx={{ scrollbarWidth: "none" }}
    >
      <Flex
        width="fit-content"
        py="2"
        px="3"
        bgColor="blue.100"
        borderRadius="sm"
      >
        <Text>This is a Received Message</Text>
      </Flex>
      <Flex
        width="fit-content"
        py="2"
        px="3"
        bgColor="green.100"
        borderRadius="sm"
        alignSelf="flex-end"
      >
        <Text>This is a Sender Message</Text>
      </Flex>
    </Flex>
  );
};

export default ChatContainer;
