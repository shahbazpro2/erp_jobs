import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import router from 'next/router';



interface Props {
    image: string,
    content: string,
    active?: boolean,
    list: { url: string, title: string }[]
}

const MenuCard = ({ content, image, list, active = false }: Props) => {
    const Router: any = router
    const [open, setOpen] = useState(active)
    return (
        <div>
            <BoxWrapper className={`px-4 py-5 cursor-pointer`} >
                <div className={`flex items-center justify-between primary-clr-hover ${active || open ? 'primary-clr' : ''}`} onClick={() => setOpen(!open)}>
                    <div className="flex flex-grow-1 items-center space-x-3">
                        <Image src={image} width="40%" height="40%" alt="file" />
                        <div className="sm:text-base text-sm font-bold">
                            {content}
                        </div>
                    </div>
                    {
                        open ?
                            <ArrowUpwardIcon /> :
                            <ArrowForwardIcon />
                    }
                </div>
                {open &&
                    <div className="pt-5 pb-3 px-14 space-y-5 text-gray-600">
                        {list.map((l, index) => (
                            <div key={index} className={`text-base hover:text-gray-900 font-semibold ${Router?.router?.route === l.url ? 'text-gray-900' : ''}`} onClick={() => router.push(l.url)}>
                                {l.title}
                            </div>
                        ))}
                    </div>
                }
            </BoxWrapper>
        </div>

    )
}

export default MenuCard
