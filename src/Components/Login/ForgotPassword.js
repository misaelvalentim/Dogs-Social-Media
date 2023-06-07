import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import { PASSWORD_LOST } from '../../api'
import Error from '../Helper/Error'
import Head from '../Helper/Head'

const ForgotPassword = () => {
    const login = useForm();
    const { data, loading, error, request } = useFetch();

    async function handleSubmit(e) {
        e.preventDefault();

        if (login.validate()) {
            const { url, options } = PASSWORD_LOST(
                {
                    login: login.value,
                    url: window.location.href.replace('forgotpassword', 'resetpassword')
                }
            );
            const { json } = await request(url, options)
            console.log(json);
        }
    }

    return (
        <section className='animeLeft'>
            <Head title="Perdeu a senha" />
            <h1>Forgot your password?</h1>
            {data ? <p style={{ color: '#4C1' }}>{data}</p> :
                <form onSubmit={handleSubmit}>
                    <Input label="Email | User" type="text" name="email" {...login} />
                    {loading ? <Button>Sending...</Button> : <Button>Send email</Button>}
                </form>
            }

            <Error error={error} />
        </section>
    )
}

export default ForgotPassword