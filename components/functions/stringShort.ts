const stringShort = (string: string, length = 120) => {
    if (string.length > 25) {
        return string = string.substring(0, length) + "...";
    } else return string
}

export default stringShort