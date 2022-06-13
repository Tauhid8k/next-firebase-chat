import { FormControl, Input, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { firestore } from "../config/firebase";

const ChatInput = ({ id, user }) => {
  const [input, setInput] = useState("");

  const submitMessage = async (e) => {
    e.preventDefault();
    await addDoc(collection(firestore, `chats/${id}/messages`), {
      text: input,
      sender: user.email,
      timestamp: serverTimestamp(),
    });
    setInput("");
  };

  return (
    <FormControl
      p="2"
      py="3"
      alignItems="center"
      display="flex"
      gap="10px"
      bgColor="gray.100"
      as="form"
      onSubmit={submitMessage}
    >
      <Input
        placeholder="Text here..."
        bgColor="white"
        size="lg"
        name="message"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <IconButton
        size="lg"
        colorScheme="teal"
        aria-label="send message"
        icon={<IoSend />}
        type="submit"
      />
    </FormControl>
  );
};

export default ChatInput;
