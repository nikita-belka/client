import { createSlice } from '@reduxjs/toolkit'
import { showStudents, createStudent, deleteStudent } from '../actions/studentsActions'

const studentsSlice = createSlice({
    name: 'students',
    initialState: {
        students: [],
        loading: false,
        loaded: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(showStudents.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(showStudents.fulfilled, (state, action) => {
                state.students = action.payload
                state.loading = false
                state.loaded = true
            })
            .addCase(showStudents.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message ?? 'Неизвестная ошибка'
            })
            .addCase(createStudent.fulfilled, (state, action) => {
                const maxId = state.students.reduce(
                    (max, student) => (student.id > max ? student.id : max),
                    0
                )

                state.students.push({
                    ...action.payload,
                    id: maxId + 1,
                })
            })
            .addCase(deleteStudent.fulfilled, (state, action) => {
                state.students = state.students.filter(
                    (student) => student.id !== action.payload
                )
            })
    }
})

export default studentsSlice.reducer