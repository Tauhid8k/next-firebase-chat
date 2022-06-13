import { Flex, Text } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { v4 as uuidv4 } from "uuid";

const ChatContainer = ({ messages }) => {
  const [user] = useAuthState(auth);

  return (
    <Flex
      p="3"
      flex={1}
      direction="column"
      gap="0.5rem"
      overflowX="scroll"
      sx={{ scrollbarWidth: "none" }}
    >
      {messages?.map((msg, index) => {
        const sender = msg.sender === user.email;

        return (
          <Flex
            width="fit-content"
            py="2"
            px="3"
            bgColor={sender ? "blue.100" : "green.100"}
            borderRadius="sm"
            key={uuidv4()}
            alignSelf={sender ? "flex-start" : "flex-end"}
          >
            <Text>{msg.text}</Text>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default ChatContainer;
