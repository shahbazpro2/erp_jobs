import React from 'react'
import AuthWrapper from '../../../../../common/authWrapper/AuthWrapper'

const Step1 = () => {
    return (
        <div className="grid grid-cols-6 justify-center">
            <div className="col-start-3 col-span-2">
                <AuthWrapper>
                    login
                </AuthWrapper>
            </div>
        </div>
    )
}

export default Step1
