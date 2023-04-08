import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import ForgotPassword from './ForgotPassword'
import ResetPassword from './ResetPassword'
import Signup from './Signup'

const Login = () => {
    return (
        <div>
            <h1>Login page</h1>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="signup" element={<Signup />} />
                <Route path="forgotpassword" element={<ForgotPassword />} />
                <Route path="resetpassword" element={<ResetPassword />} />
            </Routes>
        </div>
    )
}

export default Login