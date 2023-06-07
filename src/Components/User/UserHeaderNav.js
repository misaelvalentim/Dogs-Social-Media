import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { ReactComponent as MyPhotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../Assets/adicionar.svg';
import { ReactComponent as LogOut } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';
import UserHeaderNavTooltip from './UserHeaderNavTooltip';

const UserHeaderNav = () => {
    const { userLogOut } = React.useContext(UserContext)
    const [mobileMenu, setMobileMenu] = React.useState(false);
    const mobile = useMedia('(max-width: 40rem)');
    const desktop = useMedia('(min-width: 40rem)');

    const { pathname } = useLocation();
    React.useEffect(() => {
        setMobileMenu(false);
    }, [pathname])
    return (
        <>
            {mobile &&
                <button
                    aria-label='Menu'
                    className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
                    onClick={() => { setMobileMenu(!mobileMenu) }}>
                </button>
            }

            <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && !desktop && styles.navMobileActive}`}>
                <NavLink to="/account" end className={styles.navItem}><MyPhotos />{mobile && "My Photos"} <UserHeaderNavTooltip text="My Photos" /></NavLink>
                <NavLink to="/account/statistics" className={styles.navItem}><Estatisticas />{mobile && "Statistics"} <UserHeaderNavTooltip text="Statistics" /></NavLink>
                <NavLink to="/account/post" className={styles.navItem}><AddPhoto /> {mobile && "Add photo"} <UserHeaderNavTooltip text="Add photo" /></NavLink>
                <button onClick={userLogOut} className={styles.navItem}><LogOut />{mobile && "Log out"} <UserHeaderNavTooltip text="Log out" /></button>
            </nav>
        </>
    )
}

export default UserHeaderNav