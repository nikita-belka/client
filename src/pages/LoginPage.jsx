import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = () => {
        setError('')

        if (!username || !password) {
            setError('Заполните оба поля')
            return
        }

        if (password === 'secret') {
            navigate('/users')
        } else {
            setError('Неверный логин или пароль')
        }
    }

    return (
        <div>
            <h1>Вход в систему</h1>

            <div>
                <label>
                    Логин:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
            </div>

            <div>
                <label>
                    Пароль:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <button onClick={handleLogin}>Войти</button>

            <p>
                <button onClick={() => navigate('/')}>← На главную</button>
            </p>
        </div>
    )
}

export default LoginPage