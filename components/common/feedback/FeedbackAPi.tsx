import React, { ReactNode } from 'react'
import SnakbarAlert from '../snakbarAlert/SnakbarAlert'

interface Props {
    apiError?: string[],
    apiSuccess?: string[],
    setApiError?: ([]) => void,
    setApiSuccess?: ([]) => void,
}

const FeedbackApi = ({ apiError, apiSuccess, setApiError, setApiSuccess }: Props) => {
    return (
        <div>
            {(apiError && setApiError) && <SnakbarAlert open={apiError.length ? true : false} handleClose={() => setApiError([])} message={apiError} type="error" />}
            {(apiSuccess && setApiSuccess) && <SnakbarAlert open={apiSuccess.length ? true : false} handleClose={() => setApiSuccess([])} message={apiSuccess} type="success" />}
        </div>
    )
}

export default FeedbackApi
