import React from 'react'
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { USER_POST } from '../../api';
import { UserContext } from '../../Context/UserContext';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

const Signup = () => {

    const username = useForm()
    const email = useForm('email')
    const password = useForm();

    const { userLogin } = React.useContext(UserContext);
    const { loading, error, request } = useFetch();

    async function handleSubmit(event) {
        event.preventDefault();
        const { url, options } = USER_POST({
            username: username.value,
            email: email.value,
            password: password.value
        });
        const { response } = await request(url, options);
        if (response.ok) userLogin(username.value, password.value)

    }
    return (
        <section className='anime-left'>
            <Head title="Crie sua conta" />
            <h1 className='title'>Sign up</h1>
            <form onSubmit={handleSubmit}>
                <Input label="User" type='text' name='username' {...username} />
                <Input label="Email" type='email' name='email' {...email} />
                <Input label="Password" type='password' name='password' {...password} />
                {loading ? (<Button>Cadastrando...</Button>) : (<Button>Sign up</Button>)}
                <Error error={error} />
            </form>
        </section>
    )
}

export default Signup