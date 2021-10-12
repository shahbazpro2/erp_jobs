import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link'
import classNames from 'classnames'
import { url_loginUser, url_registerUser } from '@components/functions/pageUrls';
import { useRouter } from 'next/router';
import { linkList } from './Header';
import { Button } from '@mui/material';
import objectIsEmpty from '@components/functions/objectIsEmpty';
import { useAppSelector } from '@redux/Store';
const SideDrawer = () => {
    const router = useRouter()
    const path = router.asPath
    const { user } = useAppSelector(state => state.authReducer)
    return (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                {linkList.map((link, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={<Link href={link.link}><a className={classNames("user-links", { "active-links": path === link.link })}>{link.title}</a></Link>} />
                    </ListItem>
                ))}
            </List>
            {console.log(objectIsEmpty(user))}
            {objectIsEmpty(user) && <>
                <ListItem>
                    <ListItemText primary={<Link href={url_loginUser}><a className={classNames("user-links", { "active-links": path === url_loginUser })}>Login</a></Link>} />
                </ListItem>
                <ListItem>
                    <ListItemText primary={<Link href={url_registerUser}><a className={classNames("user-links", { "active-links": path === url_registerUser })}>Sign up</a></Link>} />
                </ListItem>
                <ListItem>
                    <Button variant="contained" fullWidth color="secondary" disableElevation>
                        Post a Job
                    </Button>
                </ListItem>
            </>}
        </Box>
    )
}

export default SideDrawer
