import { Button } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";
import Head from "next/head";
import LoginStyles from "../styles/Login.module.css";

const Login = () => {
  return (
    <>
      <Head>
        <title>Chat Login</title>
      </Head>
      <div className={LoginStyles.container}>
        <div className={LoginStyles.card}>
          <Button
            leftIcon={<FaGoogle />}
            colorScheme="red"
            variant="solid"
            size="lg"
            boxShadow="lg"
          >
            Sign In With Google
          </Button>
        </div>
      </div>
    </>
  );
};

export default Login;
