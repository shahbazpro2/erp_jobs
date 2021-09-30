import { Button } from '@mui/material'
import React from 'react'

const PopularSearches = () => {
    return (
        <div>
            <div className="text-base opacity-[0.7]">
                Popular Searches
            </div>
            <div className="d-flex mt-3 space-x-1 space-y-1">
                <Button variant="outlined">Work from home</Button>
                <Button variant="outlined">Part-time</Button>
                <Button variant="outlined">Administration</Button>
                <Button variant="outlined">Finance</Button>
                <Button variant="outlined">Retail</Button>
                <Button variant="outlined">IT</Button>
                <Button variant="outlined">Engineering</Button>
                <Button variant="outlined">Sales</Button>
                <Button variant="outlined">Manufacturing</Button>
            </div>
        </div>
    )
}

export default PopularSearches
