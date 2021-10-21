import { Drawer } from "@mui/material";
import React, { useState } from "react";
import Link from 'next/link'
import { useAppSelector } from "@redux/Store";
import objectIsEmpty from "@components/functions/objectIsEmpty";
import { url_careerAdvice, url_pricing, } from "@components/functions/pageUrls";
import Image from 'next/image'
import Container from '@components/common/container/Container'
import SideDrawer from "../SideDrawer";
import WithUser from "./WithUser";
import WithoutUser from "./WithoutUser";


interface Props {
    bg: string,
    boxShadow: string
}

export const withoutUserList = [
    { url: '/', title: 'Products' },
    { url: url_pricing, title: 'Pricing' },
    { url: url_careerAdvice, title: 'Resources' },
]
export const withUserList = [
    { url: '/', title: 'CV Search' },
    { url: url_pricing, title: 'Dashboard' },
    { url: url_careerAdvice, title: 'Company Details' },
]

const EmployerHeader = ({ bg, boxShadow }: Props) => {
    const { user } = useAppSelector(state => state.authReducer)
    const [open, setOpen] = useState(false)



    return (
        <div className={`${bg} ${boxShadow} absolute w-full ${bg.search('transparent') !== -1 ? 'text-white' : ''}`}>
            <Container>
                <div className="flex h-[80px]">
                    <div className="rounded-lg gray-bg w-12 h-8 my-auto md:hidden flex justify-center cursor-pointer " onClick={() => setOpen(!open)}>
                        <Image src="/assets/images/2lines.svg" width="35%" height="35%" alt="lines" />
                    </div>
                    <Drawer
                        anchor={"left"}
                        open={open}
                        onClose={() => setOpen(false)}
                    >
                        <SideDrawer />
                    </Drawer>
                    <div className="ml-5 md:ml-0">
                        <div className="logo text-base md:text-2xl flex items-center h-full">
                            <h2><Link href="/"><a href="#">Erp jobs</a></Link></h2>
                        </div>
                    </div>

                    {objectIsEmpty(user) ?
                        <WithoutUser bg={bg} />
                        :
                        <WithUser />
                    }
                </div>
            </Container>
        </div>
    );
};

export default EmployerHeader;
