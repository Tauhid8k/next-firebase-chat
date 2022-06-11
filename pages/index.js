import Head from "next/head";
import Sidebar from "../components/Sidebar";
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Head>
        <title>Chat</title>
      </Head>
      <Box h="100vh">
        <Sidebar />
      </Box>
    </>
  );
};

export default Home;
