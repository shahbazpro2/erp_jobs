import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import ShrinkContainer from '@components/common/container/ShrinkContainer'
import React, { useState } from 'react'
import ChangeEmail from './changeEmail/ChangeEmail'
import classNames from 'classnames'
import ChangePassword from './changePassword/ChangePassword'
import Notification from './notification/Notification'
import OtherSettings from './otherSettings/OtherSettings'


const menuItems = [['Change Password', 'changePassword'], ['Notification', 'notification'], ['Deactivate Account', 'deactivateAccount']]

const UserSettings = () => {
    const [currentSetting, setCurrentSetting] = useState('changePassword')

    const getContent = () => {
        switch (currentSetting) {
            /*  case menuItems[0][1]:
                 return <ChangeEmail /> */
            case menuItems[0][1]:
                return <ChangePassword />
            case menuItems[1][1]:
                return <Notification />
            case menuItems[2][1]:
                return <OtherSettings />
            default:
                break;
        }
    }

    return (
        <div className="gray-bg min-h-[100vh]">
            <ShrinkContainer>
                <div className="text-3xl font-bold">
                    Setting
                </div>
                <div className="grid md:grid-cols-12 grid-cols-1 gap-3 py-7">
                    <div className="md:col-span-9">
                        <BoxWrapper>
                            {getContent()}
                        </BoxWrapper>
                    </div>
                    <div className="md:col-span-3 md:order-last order-first">
                        <BoxWrapper>
                            <div className="space-y-3 font-bold">
                                {menuItems.map((item, index) => (
                                    <div key={index} className={classNames("cursor-pointer primary-clr-hover", { 'primary-clr': currentSetting === item[1] })} onClick={() => setCurrentSetting(item[1])}>{item[0]}</div>
                                ))}
                            </div>
                        </BoxWrapper>
                    </div>
                </div>
            </ShrinkContainer>
        </div>
    )
}

export default UserSettings
