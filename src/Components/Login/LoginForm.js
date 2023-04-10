import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../Context/UserContext';
import Error from '../Helper/Error';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.css'

const LoginForm = () => {
    const username = useForm('');
    const password = useForm('');

    const { userLogin, error, loading } = React.useContext(UserContext);

    async function handleSubmit(e) {
        e.preventDefault();

        if (username.validate() && password.validate()) {
            userLogin(username.value, password.value);
        }
    }
    return (
        <div>
            <section className='anime-left'>
                <h1 className='title'>Login</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Input label="User" type="text" name="username" {...username} />
                    <Input label="Password" name="password" type="password" {...password} />
                    {loading ? <Button disabled>Loading</Button> : <Button>Sign in</Button>}
                    <Error error={error} />
                </form>

                <Link className={styles.forgot} to="/login/forgotpassword">Forgot password?</Link>

                <div className={styles.signup}>
                    <h2 className={styles.subtitle}>Sign up</h2>
                    <p>Not signed yet? Sign up now.</p>
                    <Link className={stylesBtn.button} to="/login/signup">Sign up</Link>

                </div>
            </section>

            {/* <Link to="/login/resetpassword">Reset</Link> */}
        </div>
    )
}

export default LoginForm