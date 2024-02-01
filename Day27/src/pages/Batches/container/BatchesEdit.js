import React from 'react';
import Box from "@mui/material/Box";
import NativeSelect from "@mui/material/NativeSelect";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { editBatch, getSingleBatch } from '../Action';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { putBatch } from '../Action';
// import { useDispatch } from 'react-redux';
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
    batchtype: ""

};
const BatchesEdit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();
    const [user, setUser] = useState(initialValue);
    const [errors, setErrors] = useState({});
    // Fetch the single batch details when the component mounts
    useEffect(() => {
        dispatch(getSingleBatch(id));
    }, [dispatch, id]);
    // Access the singleBatch from the Redux store
    const singleBatch = useSelector((state) => state.BatchStore.singleBatch);
    // Update the local state when singleBatch changes
    useEffect(() => {
        if (singleBatch) {
            setUser(singleBatch);
        }
    }, [singleBatch]);
    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };
    const onSubmit = () => {
        // console.log(user); // Check if user contains the correct data
        dispatch(editBatch(user, id));
        window.alert("batches Updated Successfully");
        navigate("/dashboard/batch");
    };
    const coursename = [
        "",
        "ReactJs",
        "Java",
        "Graphic Design",
        "MERN stack ",
        "MEAN stack",
        "Cloud Computing",
        "Marketing",
        "Python",
        "C and C++",
        "PHP",
        "Angular12+",
        "Python",
        "C and C++",
        "Web Development",
        "software testing",

    ];
    const batchstatus = ["", "Inprogress", "Completed", "Delayed"];
    const batchmode = ["", "Online", "Offline", "Hybrid"];
    const addedby = ["", "Admin"];
    const batchtype = ["", "Weekend", "Weekdays"]
    return (
        <div>
            <Container>
                <Typography variant="h4">Edit Batch</Typography>
                <FormInput>
                    <InputLabel htmlFor="name-input">Batch code</InputLabel>
                    <Input
                        onChange={(e) => onValueChange(e)}
                        name="batchcode"
                        value={user.batchcode}
                        id="name-input"
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
                    />
                    <FormHelperText error>{errors.batchname}</FormHelperText>
                </FormInput>
                <FormInput>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel variant="standard" htmlFor=" coursename">
                                Select Your Course
                            </InputLabel>
                            <NativeSelect
                                defaultValue={user.coursename}
                                onChange={(e) => onValueChange(e)}
                                inputProps={{
                                    name: "coursename"
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
                        type="text"
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
                            id="batchtime-input"
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
                        id="batchtime-input"
                    />
                </FormInput>
                <FormInput>
                    <InputLabel htmlFor="startdate-input">Starting Date</InputLabel>
                    <Input
                        onChange={(e) => onValueChange(e)}
                        type="date"
                        name="startdate"
                        value={user.startdate}
                        id="startdate-input"
                    />
                </FormInput>
                <FormInput>
                    <InputLabel htmlFor="enddate-input"> Ending Date</InputLabel>
                    <Input
                        onChange={(e) => onValueChange(e)}
                        type="date"
                        name="enddate"
                        value={user.enddate}
                        id="enddate-input"
                    />
                </FormInput>
                <FormInput>
                    <InputLabel htmlFor="batchsize-input">Batchsize</InputLabel>
                    <Input
                        onChange={(e) => onValueChange(e)}
                        type="number"
                        name="batchsize"
                        value={user.batchsize}
                        id="batchsize-input"
                    />
                    <FormHelperText error>{errors.batchsize}</FormHelperText>
                </FormInput>
                <FormInput>
                    <InputLabel htmlFor="trainername-input">Trainer Name</InputLabel>
                    <Input
                        onChange={(e) => onValueChange(e)}
                        type="text"
                        name="trainername"
                        value={user.trainername}
                        id="trainername-input"
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
                                {batchstatus.map((val, index) => {
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
                                {batchmode.map((val, index) => {
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

                <FormInput>
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
                    <FormHelperText error>{errors.batchtype}</FormHelperText>
                </FormInput>
                <SubmitButton
                    variant="contained"
                    color="primary"
                    onClick={onSubmit}
                >
                    Edit Batch
                </SubmitButton>
                <Button><Link className='btn' to='/batchlist'>Back</Link>
                </Button>
            </Container>
        </div>
    )
}
export default BatchesEdit

