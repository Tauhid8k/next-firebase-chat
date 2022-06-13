import { Flex, Avatar, Text } from "@chakra-ui/react";

const TopBar = ({ email }) => {
  return (
    <Flex
      p="2"
      borderBottom="1px solid"
      borderColor="gray.300"
      alignItems="center"
      gap="10px"
      bgColor="gray.100"
    >
      <Avatar />
      <Text fontWeight="medium">{email}</Text>
    </Flex>
  );
};

export default TopBar;
