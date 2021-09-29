interface Props {
    pathname: string
}

export const isProtectedRoute = ({ pathname }: Props) => {
    return ["/test", "",].includes(pathname)
}

// Determines whether the route is a login route
export const isGuestRoute = ({ pathname }: Props) => {
    return ["/login/user",].includes(pathname)
};

