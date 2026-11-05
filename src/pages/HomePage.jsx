import { useNavigate } from "react-router-dom"

function HomePage() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Добро пожаловать</h1>
            <p>Пожалуйста, авторизуйтесь</p>
            <button onClick={() => navigate('/login')}>
                Войти по логину
            </button>

            <button onClick={() => navigate('/users')}>
                Войти в систему (демо)
            </button>
        </div>
    )
}

export default HomePage
