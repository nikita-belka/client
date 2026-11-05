import { useSelector, useDispatch } from 'react-redux'
import Spinner from './Spinner'
import { deleteStudent } from '../store/actions/studentsActions'

function StudentTable() {
    const students = useSelector((state) => state.students.students)
    const loading = useSelector((state) => state.students.loading)
    const dispatch = useDispatch()

    if (loading) {
        return <Spinner />
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Имя</th>
                    <th>Статус</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.job}</td>
                        <td>
                            <button onClick={() => dispatch(deleteStudent(student.id))}>
                                Удалить
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default StudentTable