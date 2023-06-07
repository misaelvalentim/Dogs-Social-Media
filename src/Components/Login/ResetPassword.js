import React from 'react'
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { PASSWORD_RESET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import { useNavigate } from 'react-router-dom';
import Head from '../Helper/Head'

const ResetPassword = () => {
    const [login, setLogin] = React.useState('');
    const [key, setKey] = React.useState('');
    const password = useForm();
    const { error, loading, request } = useFetch();

    const navigate = useNavigate();

    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const key = params.get('key');
        const login = params.get('login');

        if (key) setKey(key);
        if (login) setLogin(login);
    }, [])

    async function handleSubmit(e) {
        e.preventDefault();
        if (password.validate()) {
            const { url, options } = PASSWORD_RESET({
                login,
                key,
                password: password.value
            });

            console.log(url)
            console.log(options)
            const { response } = await request(url, options);
            console.log(response);
            if (response.ok) navigate('/login')
        }
    }
    return (
        <section className='animeLeft'>
            <Head title="Resete a senha" />
            <h1 className='title'>Reset your password</h1>
            <form onSubmit={handleSubmit}>
                <Input label="New password" type="password" name="password" {...password} />
                {loading ? <Button disabled>Reseting...</Button> : <Button>Reset</Button>}
            </form>
            <Error error={error} />
        </section>
    )
}

export default ResetPassword