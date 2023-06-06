import React from 'react'

const UserPost = () => {

    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    function handleSubmit(e) {
        e.preventDefault();
        fetch('https://dogsapi.origamid.dev/json/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                email,
                password,
            }),
        }).then(response => {
            return response.json(
            )
        }).then(json => {
            return json;
        });
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} placeholder="username" onChange={({ target }) => setUsername(target.value)} />
            <input type="text" value={password} placeholder="password" onChange={({ target }) => setPassword(target.value)} />
            <input type="text" value={email} placeholder="email" onChange={({ target }) => setEmail(target.value)} />
            <button>Enviar</button>
        </form>
    )
}

export default UserPost