const graphqlRes = async (api: any) => {
    try {
        const res = await api
        if (res.data) {
            return { error: false, data: res.data }
        } else {
            if (res.errors.graphQLErrors.length) {
                let graphqlErr: any = [];
                res.errors.graphQLErrors.map((err: any) => graphqlErr.push(err.message))
                return { error: true, data: graphqlErr }
            } else {
                return { error: true, data: ['There is something went wrong!'] }
            }
        }
    } catch (err) {
        return { error: true, data: ['There is something went wrong!'] }
    }
}

export default graphqlRes