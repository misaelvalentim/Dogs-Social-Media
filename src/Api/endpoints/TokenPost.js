import React from 'react'

const TokenPost = () => {

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [token, setToken] = React.useState('')

    function handleSubmit(e) {
        e.preventDefault();
        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            }),
        }).then(response => {
            console.log(response)
            return response.json()
        }).then(json => {
            console.log(json)
            setToken(json);
            return json;
        });
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} placeholder="username" onChange={({ target }) => setUsername(target.value)} />
            <input type="text" value={password} placeholder="password" onChange={({ target }) => setPassword(target.value)} />
            <button>Enviar</button>
            <p>{token.token}</p>
        </form>
    )
}

export default TokenPost