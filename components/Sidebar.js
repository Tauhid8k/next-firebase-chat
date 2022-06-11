import { Flex, Box, Avatar, IconButton, Button, Text } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import Contacts from "./Contacts";
import SidebarStyles from "../styles/Sidebar.module.css";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSidebar = () => {
    if (showSidebar) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
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
          <Avatar />
          <Text fontWeight="medium">Tauhid8k</Text>
        </Flex>
        <IconButton
          aria-label="hamburger"
          icon={<FiLogOut />}
          isRound
          onClick={() => signOut(auth)}
        />
      </Flex>

      {/* Chat List */}
      <Box p="3">
        <Button width="100%">Add New Chat</Button>
      </Box>
      {/* Chat Contacts */}
      <Flex
        overflowX="scroll"
        direction="column"
        sx={{ scrollbarWidth: "none" }}
      >
        <Contacts />
        <Contacts />
        <Contacts />
        <Contacts />
        <Contacts />
        <Contacts />
        <Contacts />
        <Contacts />
        <Contacts />
        <Contacts />
        <Contacts />
        <Contacts />
        <Contacts />
        <Contacts />
        <Contacts />
        <Contacts />
        <Contacts />
        <Contacts />
        <Contacts />
        <Contacts />
        <Contacts />
        <Contacts />
        <Contacts />
        <Contacts />
        <Contacts />
      </Flex>
    </Flex>
  );
};

export default Sidebar;
