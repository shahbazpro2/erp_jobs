const EmptyFieldCheck = (data: any) => {
    for (const key in data) {
        if (data[key] === null) return true
        if (data[key].toString().replace(/ /g, '') === "") {
            return true
        }
    }

    return false
}

export default EmptyFieldCheck