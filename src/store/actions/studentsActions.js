import { createAsyncThunk } from '@reduxjs/toolkit'
import students from '../../students'

export const showStudents = createAsyncThunk(
    'students/showStudents',
    async () => students
)
export const createStudent = createAsyncThunk(
    'students/createStudent',
    async (studentData) => {
        return studentData
    }
)
export const deleteStudent = createAsyncThunk(
    'students/deleteStudent',
    async (id) => {
        return id
    }
)
