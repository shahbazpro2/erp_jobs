interface Props {
    pathname: string
}

export const isProtectedRoute = ({ pathname }: Props) => {
    return ["/test", "/profile/user", "/profile/user/personal-information"].includes(pathname)
}

// Determines whether the route is a login route
export const isGuestRoute = ({ pathname }: Props) => {
    return ["/login/user", "/register/user"].includes(pathname)
};

