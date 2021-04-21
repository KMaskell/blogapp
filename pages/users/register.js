import { useState } from 'react';
import fire from '../../config/fire-config';
import { useRouter } from 'next/router';

const Register = () => {

    const router = useRouter();

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [notification, setNotification] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        fire.auth()
        .createUserWithEmailAndPassword(userName, password)
        .catch((err) => {
            console.log(err.code, err.message)
        });

        setTimeout(() => {
            setNotification('')
        }, 2000)

        setUsername('')
        setPassword('')
        router.push("/")
    }

    return (
        <div>
            <h1>Create new user</h1>

            {notification}
            <form onSubmit={handleLogin}>
                Email: <input type="text" value={userName}
                onChange={({target}) => setUsername(target.value)} />
                <br />
                Password: <input type="text" value={password}
                onChange={({target}) => setPassword(target.value)} />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    )

}

export default Register;
