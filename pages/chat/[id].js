import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import ChatContainer from "../../components/ChatContainer";
import ChatInput from "../../components/ChatInput";
import Sidebar from "../../components/Sidebar";
import TopBar from "../../components/TopBar";

const Chat = () => {
  return (
    <>
      <Head>
        <title>Chat</title>
      </Head>
      <Flex height="100vh">
        <Sidebar />
        <Flex flex="1" direction="column">
          <TopBar />
          <ChatContainer />
          <ChatInput />
        </Flex>
      </Flex>
    </>
  );
};

export default Chat;
