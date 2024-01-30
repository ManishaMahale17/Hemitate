import React, { useState } from 'react';
import './StudentForm.css';
import { Link, useNavigate } from 'react-router-dom';
import { NativeSelect } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { connect, useDispatch } from 'react-redux';
import { getAddStudents, getEditStudents } from '../Action';

const StdAddForm = () => {
    const AttendStatus = ["", "Present", "Absent"]
    const nav = useNavigate()
    const dispatch = useDispatch()
    const [student, setStudent] = useState({ id: "", studentname: "", attendance: "" })
    const inputChangeHandler = (event) => {
        const { name, value } = event.target;
        setStudent({ ...student, [name]: value })
    };

    const onsubmit = () => {
        dispatch(getAddStudents(student))
        nav("/dashboard/studentatte")
    }

    return (
        <div className='body'>
            <h1 className='text-center pt-4'>Student Attendance Add Form</h1>
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
const mapStateToProps = (state) => ({
    StudentAdd: state.studentStore.studentname
})

const mapDispatchToProps = (dispatch) => {
    return {
        getAddStudents: () => dispatch(getAddStudents()),
        getEditStudents: () => dispatch(getEditStudents())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(StdAddForm);
