import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHEader = () => {
    const [title, setTitle] = React.useState("");
    const location = useLocation();

    React.useEffect(() => {
        const { pathname } = location;

        switch (pathname) {
            case '/account/post':
                setTitle("Post your photo")
                break

            case '/account/statistics':
                setTitle("Statistics")
                break
            default:
                setTitle("My account")
        }
        if ("/account/statistics" === location.pathname) setTitle("Statistics")
    }, [location, location.pathname])
    return (
        <header className={styles.header}>
            <h1 className='title'>{title}</h1>
            <UserHeaderNav />
        </header>
    )
}

export default UserHEader