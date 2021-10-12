import React from 'react'
import Image from 'next/image'
import Container from '@components/common/container/Container'

const Footer = () => {
    return (
        <div className="bg-[#161C2D] md:py-32 py-20 text-white">
            <Container>
                <div className="grid grid-cols-8 md:grid-cols-6 md:grid-rows-1 grid-rows-2 gap-4">
                    <div className="lg:col-span-2 col-span-8">
                        <div className="text-3xl font-bold logo">
                            ERP Jobs
                        </div>
                        <div className="mt-5 text-base opacity-[0.6]">
                            Millions of people are searching for jobs, salary information, company reviews, and interview questions on this website.
                        </div>
                        <div className="flex md:mt-10 mt-5  space-x-5">
                            <div className="cursor-pointer">
                                <Image src="/assets/images/twitter.svg" width="18" height="18" alt="facebook" />
                            </div>
                            <div className="cursor-pointer">

                                <Image src="/assets/images/facebook.svg" width="18" height="18" alt="facebook" />
                            </div>
                            <div className="cursor-pointer">
                                <Image src="/assets/images/instagram.svg" width="18" height="18" alt="facebook" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-2 lg:col-auto">
                        <div className="text-base opacity-[0.6]">
                            Company
                        </div>
                        <div className="mt-5 space-y-3">
                            <div>About us</div>
                            <div>Contact us</div>
                            <div>Careers us</div>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-1 lg:col-auto">
                        <div className="text-base opacity-[0.6]">
                            Product
                        </div>
                        <div className="mt-5 space-y-3">
                            <div>Features</div>
                            <div>Pricing</div>
                            <div>News</div>
                            <div>Support</div>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-3 lg:col-auto block justify-center md:flex mt-5 md:mt-0">
                        <div>
                            <div className="text-base opacity-[0.6]">
                                Services
                            </div>
                            <div className="mt-5 space-y-3">
                                <div>Candidates hiring</div>
                                <div>Advance search</div>
                                <div>Employers</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-2 lg:col-auto mt-5 md:mt-0">
                        <div className="text-base opacity-[0.6]">
                            Company
                        </div>
                        <div className="mt-5 space-y-3">
                            <div>Privacy Policy</div>
                            <div>Terms & Conditions</div>
                            <div>Return Policy</div>
                        </div>
                    </div>
                </div>
            </Container >
        </div >
    )
}

export default Footer
