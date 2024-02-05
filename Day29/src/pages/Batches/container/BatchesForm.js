import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import NativeSelect from "@mui/material/NativeSelect";
import { addBatch } from '../Action';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'; 
import {
    FormGroup,
    FormControl,
    InputLabel,
    Input,
    Button,
    styled,
    Typography,
    FormHelperText,
    } from "@mui/material";
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
const FormInput = styled(FormControl)`
  margin-top: 20px;
`;
const SubmitButton = styled(Button)`
  margin-top: 20px;
`;
const initialValue = {
    batchcode: "",
    batchname: "",
    coursename: "",
    batchtime: "",
    startdate: "",
    enddate: "",
    batchsize: "",
    trainername: "",
    batchstatus: "",
    addedby: "",
    batchmode: "",
    batchtype:""
};
const BatchesForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState(initialValue);
    const [errors, setErrors] = useState({});
 //==============================   form validation part Start================================//
    const coursename = [
        "",
        "ReactJs",
        "Data Science",
        "Graphic Design",
        "MERN stack",
        "MEAN stack",
        "Cloud Computing",
        "Marketing",
        "Full Stack",
        "Angular12+",
        "Python",
        "C and C++",
        "Web Development",
        "software testing",
     ];
    const statusOptions = ["", "Inprogress", "Completed", "Delayed"];
    const batchmodes = ["", "Online", "Offline", "Hybrid"];
    const addedby = ["", "Admin"];
    const batchtype =['','Weekdays','Weekend']
     useEffect(() => {
        calculateBatchTime();
    }, [user.start, user.end]);
    const calculateBatchTime = () => {
        const startTime = user.start;
        const endTime = user.end;
        if (startTime && endTime) {
            // // Perform any desired time format manipulation or calculation here
            const formattedStartTime = new Date(`2000-01-01T${startTime}`);
            const formattedEndTime = new Date(`2000-01-01T${endTime}`);
            const options = { hour: 'numeric', minute: 'numeric', hour12: true };
            const batchTime = `${formattedStartTime.toLocaleTimeString([], options)} to ${formattedEndTime.toLocaleTimeString([], options)}`;
            setUser((prevUser) => ({
                ...prevUser, batchtime: batchTime
            }));
        }
    }
    const validateForm = () => {
        let isValid = true;
        const newErrors = {};
        Object.keys(initialValue).forEach((field) => {
            if (!user[field]) {
                isValid = false;
                newErrors[field] = "This field is required";
            }
        });
         setErrors(newErrors);
        return isValid;
    };
    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
        if (e.target.name === 'start' || e.target.name === 'end') {
            calculateBatchTime();
        }
     };
   //======================================= form Validation part end========================================//
    const onSubmit = () => {
        if (validateForm()) {
            dispatch(addBatch(user));
            navigate("/dashboard/batch");
            window.alert("Batch Added Successfully!");
    }
    };
    return (
        <div>
            <Container>
                <Typography variant="h4">Add Batch</Typography>
                <FormInput>
                    <InputLabel htmlFor="name-input">Batch code</InputLabel>
                    <Input
                        onChange={(e) => onValueChange(e)}
                        name="batchcode"
                        value={user.batchcode}
                        id="name-input"
                        required
                    />
                    <FormHelperText error>{errors.batchcode}</FormHelperText>
                </FormInput>
                <FormInput>
                    <InputLabel htmlFor="name-input">Batch Name</InputLabel>
                    <Input
                        onChange={(e) => onValueChange(e)}
                        name="batchname"
                        value={user.batchname}
                        id="name-input"
                        required
                    />
                    <FormHelperText error>{errors.batchname}</FormHelperText>
                </FormInput>
                <FormInput>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel variant="standard" htmlFor=" course">
                                Select Your Course
                            </InputLabel>
                            <NativeSelect
                                defaultValue={user.course}
                                onChange={(e) => onValueChange(e)}
                                inputProps={{
                                    name: "coursename",
                                }}
                                value={user.coursename}
                            >
                                {coursename.map((val, index) => {
                                    return (
                                        <option key={index} value={val}>
                                            {val}
                                        </option>
                                    );
                                })}
                            </NativeSelect>
                        </FormControl>
                    </Box>
                    <FormHelperText error>{errors.coursename}</FormHelperText>
                </FormInput>
                <FormInput> Batch Time
                    <Input
                        onChange={(e) => onValueChange(e)}
                        type=""
                        name="batchtime"
                        value={user.batchtime}
                        id="batchTime"
                        readOnly
                    />
                    <FormInput>
                        <InputLabel htmlFor="batchtime-input">Start Time</InputLabel>
                        <Input
                            onChange={(e) => onValueChange(e)}
                            type="time"
                            name="start"
                            value={user.start}
                            id="name-input"
                        />
                    </FormInput>
                </FormInput>
                <FormInput>
                    <InputLabel htmlFor="batchtime-input">End Time</InputLabel>
                    <Input
                        onChange={(e) => onValueChange(e)}
                        type="time"
                        name="end"
                        value={user.end}
                        id="name-input"
                    />
                </FormInput>
                <FormInput>
                    <InputLabel htmlFor="startdate-input">Starting Date</InputLabel>
                    <Input
                        onChange={(e) => onValueChange(e)}
                        type="date"
                        name="startdate"
                        value={user.startdate}
                        id="name-input"
                    />
                </FormInput>
                <FormInput>
                    <InputLabel htmlFor="enddate-input"> Ending Date</InputLabel>
                    <Input
                        onChange={(e) => onValueChange(e)}
                        type="date"
                        name="enddate"
                        value={user.enddate}
                        id="name-input"
                    />
                </FormInput>
                <FormInput>
                    <InputLabel htmlFor="batchsize-input">Batchsize</InputLabel>
                    <Input
                        onChange={(e) => onValueChange(e)}
                        type="number"
                        name="batchsize"
                        value={user.batchsize}
                        id="name-input"
                    />
                    <FormHelperText error>{errors.batchsize}</FormHelperText>
                </FormInput>
                <FormInput>
                    <InputLabel htmlFor="name-input">Trainer Name</InputLabel>
                    <Input
                        onChange={(e) => onValueChange(e)}
                        type="text"
                        name="trainername"
                        value={user.trainername}
                        id="name-input"
                    />
                    <FormHelperText error>{errors.trainername}</FormHelperText>
                </FormInput>
                <FormInput>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel variant="standard" htmlFor="batchstatus">
                                Batch  Status
                            </InputLabel>
                            <NativeSelect
                                defaultValue={user.batchstatus}
                                onChange={(e) => onValueChange(e)}
                                inputProps={{
                                    name: "batchstatus",
                                }}
                                value={user.batchstatus}
                            >
                                {statusOptions.map((val, index) => {
                                    return (
                                        <option key={index} value={val}>
                                            {val}
                                        </option>
                                    );
                                })}
                            </NativeSelect>
                        </FormControl>
                    </Box>
                    <FormHelperText error>{errors.batchstatus}</FormHelperText>
                </FormInput>
                <FormInput>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel variant="standard" htmlFor="Input">
                                Added By
                            </InputLabel>
                            <NativeSelect
                                defaultValue={user.addedby}
                                onChange={(e) => onValueChange(e)}
                                inputProps={{
                                    name: "addedby",
                                }}
                                value={user.addedby}
                            >
                                {addedby.map((val, index) => {
                                    return (
                                        <option key={index} value={val}>
                                            {val}
                                        </option>
                                    );
                                })}
                            </NativeSelect>
                        </FormControl>
                    </Box>
                    <FormHelperText error>{errors.addedby}</FormHelperText>
                </FormInput>
                <FormInput>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel variant="standard" htmlFor="batchmode">
                                Batchmode
                            </InputLabel>
                            <NativeSelect
                                defaultValue={user.batchmode}
                                onChange={(e) => onValueChange(e)}
                                inputProps={{
                                    name: "batchmode",
                                }}
                                value={user.batchmode}
                            >
                                {batchmodes.map((val, index) => {
                                    return (
                                        <option key={index} value={val}>
                                            {val}
                                        </option>
                                    );
                                })}
                            </NativeSelect>
                        </FormControl>
                    </Box>
                    <FormHelperText error>{errors.batchmode}</FormHelperText>
                </FormInput>

                <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel variant="standard" htmlFor="batchtype">
                                Batch Type
                            </InputLabel>
                            <NativeSelect
                                defaultValue={user.batchtype}
                                onChange={(e) => onValueChange(e)}
                                inputProps={{
                                    name: "batchtype",
                                }}
                                value={user.batchtype}
                            >
                                {batchtype.map((val, index) => {
                                    return (
                                        <option key={index} value={val}>
                                            {val}
                                        </option>
                                    );
                                })}
                            </NativeSelect>
                        </FormControl>
                    </Box>
                <SubmitButton
                    variant="contained"
                    color="primary"
                    onClick={onSubmit}
                >
                    Add Batch
                </SubmitButton>
                <Button><Link className='btn' to='/batchlist'>Back</Link>
                 </Button>
            </Container>
        </div>
    )
}

export default BatchesForm
