/* eslint-disable react-hooks/exhaustive-deps */
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Head from 'next/head'
import EmployerSignup from "@components/pages/register/employer/EmployerSignup";
import { useRouter } from "next/router";
import Spinner from "@components/common/spinner/Spinner";
import { url_pricing } from "@components/functions/pageUrls";

const Employer: NextPage = () => {
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        !router.query.plan ? router.push(url_pricing) : setLoading(false)
    }, [])

    return (<>
        <Head>
            <title>Register</title>
        </Head>
        {loading ? <Spinner /> :
            <EmployerSignup />}
    </>)
};

export default Employer;
