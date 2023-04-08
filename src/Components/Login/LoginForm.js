import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';

const LoginForm = () => {

    const username = useForm('');
    const password = useForm('');


    function handleSubmit(e) {
        e.preventDefault();

        if (username.validate() && password.validate()) {
            fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({}),
            }).then(response => {
                console.log(response);
                return response.json();
            }).then(json => {
                console.log(json)
                return json;
            })
        }
    }
    return (
        <div>
            <section>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <Input label="User" type="text" name="username" {...username} />
                    <Input label="Password" name="password" type="password" {...password} />
                    <Button>Sign in</Button>
                </form>

                <Link to="/login/forgotpassword">Forgot password?</Link>

                <div>
                    <h2>Sign up</h2>
                    <p>Not signed yet? Sign up now.</p>
                    <Link to="/login/signup">Sign up</Link>

                </div>
            </section>

            {/* <Link to="/login/resetpassword">Reset</Link> */}
        </div>
    )
}

export default LoginForm