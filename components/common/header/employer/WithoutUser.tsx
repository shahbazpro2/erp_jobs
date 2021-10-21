import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { url_registerEmp } from '@components/functions/pageUrls'
import { useRouter } from 'next/router'
import { Button } from '@mui/material'
import { withoutUserList } from './EmployerHeader'

interface Props {
    bg: string
}

const WithoutUser = ({ bg }: Props) => {
    const router = useRouter()
    const path = router.asPath
    return (
        <>
            <div className="hidden lg:block ml-16">
                <div className="links flex items-center h-full w-full xl:space-x-10 md:space-x-5">
                    {withoutUserList.map((link, index) => (
                        <Link key={index} href={link.url}><a className={classNames(`font-bold ${bg.search('transparent') !== -1 ? 'hover:text-gray-300' : 'primary-clr-hover'} `, { "active-links": path === link.url })}>{link.title}</a></Link>
                    ))}
                </div>

            </div>
            <div className="hidden sm:block ml-auto">
                <div className="auth-links flex items-center justify-end h-full space-x-5">
                    <Link href={url_registerEmp}><a className={classNames(`font-bold ${bg.search('transparent') !== -1 ? 'hover:text-gray-300' : 'primary-clr-hover'} `, { "active-links": path === url_registerEmp })}>Looking For Job?</a></Link>
                    <div>
                        <Button onClick={() => router.push(url_registerEmp)} variant="contained" color="primary" disableElevation>
                            Add Job
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WithoutUser
