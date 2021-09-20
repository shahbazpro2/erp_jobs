interface Props {
    pathname: string
}
export const isProtectedRoute = ({ pathname }: Props) => {
    console.log('oat', pathname)
    if (
        [
            "/test",
            "",
        ].includes(pathname)
    )
        return true;
    return false;
};
export const isLoggedInRoute = ({ pathname }: Props) => {
    console.log('oat', pathname)
    if (
        [
            "/login/user",
        ].includes(pathname)
    )
        return true;
    return false;
};
/* export const isOnlyGuestRoute = ({pathname}:Props) => {
    if (pathname === "/" || pathname === "/login" || pathname === "/reset") return true;
    return false;
}; */

export const isPublicRoute = ({ pathname }: Props) => {
    if (
        [
            "/register/user",
            "/login/user",
        ].includes(pathname)
    )
        return true;
    return false;
};
