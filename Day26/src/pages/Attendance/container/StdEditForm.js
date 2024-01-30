import React, { useEffect, useState } from 'react'
import './StudentForm.css'
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { NativeSelect } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleStudent, getEditStudents } from '../Action';

const StdEditForm = () => {
    const AttendStatus = [" ", "Present", "Absent"]
    const nav = useNavigate()
    const { id } = useParams()
    const dispatch = useDispatch()
    const [student, setStudent] = useState({ id: "", studentname: "", attendance: "" })

    useEffect(() => {
        dispatch(getSingleStudent(id));  
    }, [dispatch, id])

    const singleStudent = useSelector((state) => state.studentStore.singleStudent)

    useEffect(() => {
        if (singleStudent) {
            setStudent(singleStudent);
        }
    },[singleStudent]);

    const inputChangeHandler = (event) => {
        const {name, value } = event.target;
        setStudent({ ...student, [name]: value })
    };

    const onsubmit = () => {
        dispatch(getEditStudents(student, id))
        window.alert("Student Detail edited SuccessFully");
        nav("/dashboard/studentatte")
    }


    return (
        <div className='body'>
            <h1 className='text-center pt-4'>Student Attendance Edit Form</h1>
            <div className='formBody mt-5'>
                <form>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '30ch' },
                        }}
                        noValidate
                        autoComplete="off">

                        <FormControl className='mt-4'>
                            <TextField name='studentname' onChange={inputChangeHandler} value={student.studentname} label="Student Name" variant="standard" />
                            <FormLabel id="demo-radio-buttons-group-label" className='mt-4'><b>Attendance</b></FormLabel>
                            <NativeSelect
                                defaultValue={student.attendance}
                                onChange={(event) => inputChangeHandler(event)}
                                inputProps={{
                                    name: "attendance",
                                }}
                                value={student.attendance}
                            >

                                {AttendStatus.map((val, index) => {
                                    return (
                                        <option key={index} value={val}>
                                            {val}
                                        </option>
                                    )
                                })}

                            </NativeSelect>
                        </FormControl>
                    </Box>
                    <button type='submit' onClick={onsubmit} className='btn btn-primary mt-4 ms-0'>Submit</button>
                    <Link to="/studentatten"><button type='submit' className='btn btn-success mt-4 ms-5'>Back</button></Link>
                </form>
            </div>
        </div>

    )
}

export default StdEditForm;
