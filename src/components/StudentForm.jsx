import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createStudent } from '../store/actions/studentsActions'

function StudentForm() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [job, setJob] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !job) return

        dispatch(createStudent({ name, job }))
        setName('')
        setJob('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Имя:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>
                Роль:
                <input
                    type="text"
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                />
            </label>
            <button type="submit">Добавить</button>
        </form>
    )
}

export default StudentForm