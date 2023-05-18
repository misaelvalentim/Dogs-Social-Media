import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { ReactComponent as MyPhotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../Assets/adicionar.svg';
import { ReactComponent as LogOut } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';

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
                <NavLink to="/account" end><MyPhotos />{mobile && "My Photos"}</NavLink>
                <NavLink to="/account/statistics"><Estatisticas />{mobile && "Statistics"}</NavLink>
                <NavLink to="/account/post"><AddPhoto /> {mobile && "Add photo"}</NavLink>
                <button onClick={userLogOut}><LogOut />{mobile && "Log out"}</button>
            </nav>
        </>
    )
}

export default UserHeaderNav