const getDropdownKey = (value: string, options: any): string => {
    let keyVal = ''
    for (var key in options) {
        if (options.hasOwnProperty(key)) {
            if (options[key] === value) {
                keyVal = key
                break
            }
        }
    }
    return keyVal
}

export default getDropdownKey