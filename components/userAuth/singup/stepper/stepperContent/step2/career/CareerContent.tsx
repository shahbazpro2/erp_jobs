import React from 'react'
import BoxWrapper from '../../../../../../common/boxWrapper/BoxWrapper'
import ModalHeading from '../../../../../../common/modals/ModalHeading'
import ModalWrapper from '../../../../../../common/modals/ModalWrapper'

const CareerContent = () => {
    return (
        <>
            <ModalWrapper>

                <div className="w-[40%] absolute-center">
                    <BoxWrapper>
                        <ModalHeading title="Add Career" />
                    </BoxWrapper>
                </div>

            </ModalWrapper>
        </>
    )
}

export default CareerContent
