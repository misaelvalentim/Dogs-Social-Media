import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import ForgotPassword from './ForgotPassword'
import ResetPassword from './ResetPassword'
import Signup from './Signup'
import { UserContext } from '../../Context/UserContext'
import styles from './Login.module.css'

const Login = () => {
    const { login } = React.useContext(UserContext)

    if (login === true) return <Navigate to="/account" />
    return (
        <section className={styles.login}>
            <div className={styles.forms}>
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="forgotpassword" element={<ForgotPassword />} />
                    <Route path="resetpassword" element={<ResetPassword />} />
                </Routes>
            </div>
        </section>
    )
}

export default Login