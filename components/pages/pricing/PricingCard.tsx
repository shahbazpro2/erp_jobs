import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import IncDecCounter from '@components/common/counters/IncDecCounter'
import { url_registerEmp } from '@components/functions/pageUrls'
import { Button, Divider, List, ListItem } from '@mui/material'
import router from 'next/router'
import React, { Fragment } from 'react'

interface Props {
    plan: string,
    btnColor: "secondary" | "inherit" | "error" | "primary" | "info" | "success" | "warning" | undefined,
    price: string,
    list: string[]
}
const PricingCard = ({ list, plan, price, btnColor }: Props) => {
    return (
        <BoxWrapper>
            <div className="relative min-h-[550px]">

                <div className="text-sm danger-clr uppercase tracking-widest">
                    {plan}
                </div>
                <div className="text-xl mt-5">
                    £<span className="font-bold text-5xl ml-1">{price}</span>
                </div>
                <div className="my-7">
                    <IncDecCounter onValueChange={(val) => console.log('vvl', val)} />
                </div>
                <List >
                    {
                        list.map((l, index) => <Fragment key={index}>
                            <Divider />
                            <ListItem>
                                <div className="text-lg m-auto py-4">
                                    {l}
                                </div>
                            </ListItem>
                        </Fragment>
                        )
                    }
                </List>
                <div className="absolute bottom-0 left-0 right-0" onClick={() => router.push(`${url_registerEmp}?plan=${plan}`)}>
                    <Button variant="contained" color={btnColor}>Get Started Now</Button>
                </div>

            </div>
        </BoxWrapper>
    )
}

export default PricingCard
