import { Flex, Avatar, Text } from "@chakra-ui/react";

const Contacts = () => {
  return (
    <Flex
      alignItems="center"
      gap="10px"
      p="3"
      _hover={{ bg: "gray.100", cursor: "pointer" }}
    >
      <Avatar size="sm" />
      <Text fontWeight="medium">Friend</Text>
    </Flex>
  );
};

export default Contacts;
