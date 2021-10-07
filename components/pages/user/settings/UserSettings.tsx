import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import ShrinkContainer from '@components/common/container/ShrinkContainer'
import React from 'react'
import ChangeEmail from './changeEmail/ChangeEmail'

const UserSettings = () => {
    return (
        <div className="gray-bg min-h-[100vh]">
            <ShrinkContainer>
                <div className="text-3xl font-bold">
                    Setting
                </div>
                <div className="grid grid-cols-6 gap-3 py-7">
                    <div className="col-span-4">
                        <BoxWrapper>
                            <ChangeEmail />
                        </BoxWrapper>
                    </div>
                    <div className="col-span-2">
                        <BoxWrapper>
                            <div className="space-y-3 font-bold">
                                <div className="cursor-pointer primary-clr-hover">Change Email</div>
                                <div className="cursor-pointer primary-clr-hover">Change Password</div>
                                <div className="cursor-pointer primary-clr-hover">Notification Setting</div>
                                <div className="cursor-pointer primary-clr-hover">Other Setting</div>
                            </div>
                        </BoxWrapper>
                    </div>
                </div>
            </ShrinkContainer>
        </div>
    )
}

export default UserSettings
