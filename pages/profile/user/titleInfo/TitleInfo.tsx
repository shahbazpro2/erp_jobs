import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import Container from '@components/common/container/Container'
import React from 'react'

const TitleInfo = () => {
    return (
        <div className="bg-[#F2F2F2]">
            <Container>
                <div className="grid grid-flow-col gap-4 py-16">
                    <div className="col-span-8">
                        <BoxWrapper>
                            <div className="text-3xl font-bold">
                                Muhammad Arslan Ali
                            </div>
                        </BoxWrapper>
                    </div>
                    <BoxWrapper>
                        <div className="text-3xl">
                            Muhammad Arslan Ali
                        </div>
                    </BoxWrapper>
                </div>

            </Container>
        </div>

    )
}

export default TitleInfo
