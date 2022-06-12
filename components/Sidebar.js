import { Flex, Box, Avatar, IconButton, Button, Text } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";
import { auth, firestore } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, addDoc } from "firebase/firestore";
import SidebarStyles from "../styles/Sidebar.module.css";
import getOtherUsers from "../utils/getOtherUsers";
import { useRouter } from "next/router";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [user] = useAuthState(auth);
  const [snapshot] = useCollection(collection(firestore, "chats"));

  const chats = snapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  const router = useRouter();

  const handleToggleSidebar = () => {
    if (showSidebar) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  };

  const redirect = (id) => {
    router.push(`/chat/${id}`);
  };

  const signOutGoogle = () => {
    signOut(auth);
    router.push("/");
  };

  const chatExists = (email) =>
    chats?.find(
      (chat) => chat.users.includes(user.email) && chat.users.includes(email)
    );

  const newChat = async () => {
    const input = prompt("Enter email to chat");

    if (input === "") return;

    if (input === null) return;

    if (!chatExists(input) && input !== user.email) {
      await addDoc(collection(firestore, "chats"), {
        users: [user.email, input],
      });
    }
  };

  return (
    <Flex
      width="300px"
      height="100%"
      borderEnd="1px solid"
      borderColor="gray.300"
      direction="column"
      className={`${SidebarStyles.sidebar} ${
        showSidebar ? "" : SidebarStyles.show
      }`}
    >
      {/* Sidebar hide/show button */}
      <div className={SidebarStyles.sidebarBtn} onClick={handleToggleSidebar}>
        {showSidebar ? <span>&raquo;</span> : <span>&laquo;</span>}
      </div>
      {/* Top Header */}
      <Flex
        height="70px"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        borderBottom="1px solid"
        borderColor="gray.300"
        p="2"
      >
        <Flex alignItems="center" gap="10px">
          <Avatar src={user.photoURL} />
          <Text fontWeight="medium">{user.displayName}</Text>
        </Flex>
        <IconButton
          aria-label="hamburger"
          icon={<FiLogOut />}
          isRound
          onClick={signOutGoogle}
        />
      </Flex>

      {/* Chat List */}
      <Box p="3">
        <Button width="100%" onClick={() => newChat()}>
          Add New Chat
        </Button>
      </Box>
      {/* Chat Contacts */}
      <Flex
        overflowX="scroll"
        direction="column"
        sx={{ scrollbarWidth: "none" }}
      >
        {chats
          ?.filter((chat) => chat.users.includes(user.email))
          .map((contact) => (
            <Flex
              key={contact.id}
              alignItems="center"
              gap="10px"
              p="3"
              _hover={{ bg: "gray.100", cursor: "pointer" }}
              onClick={() => redirect(contact.id)}
            >
              <Avatar size="sm" />
              <Text fontWeight="medium">
                {getOtherUsers(contact.users, user)}
              </Text>
            </Flex>
          ))}
      </Flex>
    </Flex>
  );
};

export default Sidebar;
