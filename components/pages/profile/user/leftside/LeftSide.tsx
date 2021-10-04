import React from 'react'
import Summary from './Summary'
import TitleInfo from './TitleInfo'

const LeftSide = () => {
    let user = {
        name: "Muhammad Arslan Ali",
        subtitle: "UI/UX Designer"
    }

    return (
        <div className="space-y-5">
            <TitleInfo user={user} />
            <Summary />
        </div>
    )
}

export default LeftSide
