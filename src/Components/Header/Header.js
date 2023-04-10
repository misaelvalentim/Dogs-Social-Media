import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { ReactComponent as Dogs } from '../../Assets/dogs.svg';
import { UserContext } from '../../Context/UserContext';

const Header = () => {
    const { data, userLogOut } = React.useContext(UserContext);

    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link className={styles.logo} to="/" aria-label="Dogs - Home"><Dogs /></Link>
                {data ? (
                    <Link to="/conta" className={styles.login}>
                        {data.nome}
                        <button onClick={userLogOut}>Sair</button>
                    </Link>) : (
                    <Link to="/login" className={styles.login}>
                        Sign in | Sign up
                    </Link>)}
            </nav>
        </header>
    )
}

export default Header