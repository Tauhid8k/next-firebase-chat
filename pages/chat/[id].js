import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import { collection, query, orderBy, doc } from "firebase/firestore";
import ChatContainer from "../../components/ChatContainer";
import { useAuthState } from "react-firebase-hooks/auth";
import { firestore, auth } from "../../config/firebase";
import getOtherUsers from "../../utils/getOtherUsers";
import ChatInput from "../../components/ChatInput";
import Sidebar from "../../components/Sidebar";
import TopBar from "../../components/TopBar";
import { useRouter } from "next/router";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";

const Chat = () => {
  const router = useRouter();
  const { id } = router.query;
  const q = query(
    collection(firestore, `chats/${id}/messages`),
    orderBy("timestamp")
  );

  const [messages] = useCollectionData(q);
  const [chat] = useDocumentData(doc(firestore, "chats", id));
  const [user] = useAuthState(auth);

  return (
    <>
      <Head>
        <title>Chat</title>
      </Head>
      <Flex height="100vh">
        <Sidebar />
        <Flex flex="1" direction="column">
          <TopBar email={getOtherUsers(chat?.users, user.email)} />
          <ChatContainer messages={messages} />
          <ChatInput />
        </Flex>
      </Flex>
    </>
  );
};

export default Chat;
