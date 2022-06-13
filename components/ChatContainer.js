import { Flex, Text } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useRef } from "react";

const ChatContainer = ({ messages }) => {
  const [user] = useAuthState(auth);
  const scrollToBottom = useRef();

  useEffect(() => {
    setTimeout(() => {
      scrollToBottom.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }, [messages]);

  return (
    <Flex
      p="3"
      flex={1}
      direction="column"
      gap="0.5rem"
      overflowX="scroll"
      sx={{ scrollbarWidth: "none" }}
    >
      {messages?.map((msg) => {
        const sender = msg.sender === user.email;

        return (
          <Flex
            width="fit-content"
            py="2"
            px="3"
            bgColor={sender ? "green.100" : "blue.100"}
            borderRadius="sm"
            key={uuidv4()}
            alignSelf={sender ? "flex-end" : "flex-start"}
          >
            <Text>{msg.text}</Text>
          </Flex>
        );
      })}
      <div ref={scrollToBottom}></div>
    </Flex>
  );
};

export default ChatContainer;
