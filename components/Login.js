import Head from "next/head";
import LoginStyles from "../styles/Login.module.css";
import { Button } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";
import { auth } from "../config/firebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

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
            onClick={() => signInWithGoogle()}
          >
            Sign In With Google
          </Button>
        </div>
      </div>
    </>
  );
};

export default Login;
