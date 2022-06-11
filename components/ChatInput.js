import { FormControl, Input, IconButton } from "@chakra-ui/react";
import { IoSend } from "react-icons/io5";

const ChatInput = () => {
  return (
    <FormControl
      p="2"
      py="3"
      alignItems="center"
      display="flex"
      gap="10px"
      bgColor="gray.100"
    >
      <Input placeholder="Text here..." bgColor="white" size="lg" />
      <IconButton
        size="lg"
        colorScheme="teal"
        aria-label="send message"
        icon={<IoSend />}
      />
    </FormControl>
  );
};

export default ChatInput;
