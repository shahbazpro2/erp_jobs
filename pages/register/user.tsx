import UserSignup from "@components/pages/register/user/UserSignup";
import { NextPage } from "next";
import React from "react";
import Head from 'next/head'

const user: NextPage = () => {
  return (<>
    <Head>
      <title>Register</title>
    </Head>
    <UserSignup />
  </>)
};

export default user;
