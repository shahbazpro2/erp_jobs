import { NextPage } from "next";
import React from "react";
import Head from 'next/head'
import EmployerSignup from "@components/pages/register/employer/EmployerSignup";

const Employer: NextPage = () => {
    return (<>
        <Head>
            <title>Register</title>
        </Head>
        <EmployerSignup />
    </>)
};

export default Employer;
