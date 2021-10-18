
import { NextPage } from "next";
import React from "react";
import Head from 'next/head'
import EmployerSignin from "@components/pages/login/employer/EmployerSignin";

const Employer: NextPage = () => {
    return (<>
        <Head>
            <title>Login</title>
        </Head>
        <EmployerSignin />
    </>)
};

export default Employer;
