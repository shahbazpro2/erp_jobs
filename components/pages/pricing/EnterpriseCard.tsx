import { Button, Divider, List, ListItem } from '@mui/material'
import React from 'react'

interface Props {
    list: string[]
}

const EnterpriseCard = ({ list }: Props) => {
    return (
        <div className="primary-bg px-5 md:px-7 py-8 rounded-[7px] text-white">
            <div className="relative min-h-[550px]">
                <div className="text-sm uppercase tracking-widest">
                    ENTERPRISE
                </div>
                <div className="my-5 opacity-70">
                    Advanced features for large teams with complex projects.
                </div>
                <List >
                    {
                        list.map((l) => <>
                            <Divider />
                            <ListItem>
                                <div className="text-lg m-auto py-4">
                                    {l}
                                </div>
                            </ListItem>
                        </>
                        )
                    }
                </List>
                <div className="absolute bottom-0 left-0 right-0">
                    <Button variant="contained" color="success" sx={{ color: 'white' }}>Contact Sales</Button>
                </div>
            </div>
        </div>
    )
}

export default EnterpriseCard
