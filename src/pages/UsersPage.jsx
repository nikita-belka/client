import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import StudentForm from '../components/StudentForm'
import StudentTable from '../components/StudentTable'
import { showStudents } from '../store/actions/studentsActions'

function UsersPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(showStudents())
    }, [dispatch])

    return (
        <div>
            <h1>Учёт успеваемости студентов</h1>

            <StudentForm />
            <StudentTable />

            <button onClick={() => navigate('/')}>
                ← На главную
            </button>
        </div>
    )
}

export default UsersPage