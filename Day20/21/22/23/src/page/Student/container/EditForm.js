import React, { useEffect } from 'react'
import { useState } from 'react';
import { FormGroup,FormControl,InputLabel,Input,Button,styled,Typography,FormHelperText,} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleStudent,editStudent } from '../Action';
// import {checkData} from './validation'

//===========================CSS Styling: START================================================//
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

const FormInput = styled(FormControl)`
  margin-top: 20px;
`;

const SubmitButton = styled(Button)`
  margin-top: 20px;
`;
//===========================CSS Styling: END================================================//

//===========================Initial Form Values:: START================================================//

const initialValue = {
    prn:"",
    name: "",
    contact: "",
    emailId: "",
    dob: "",
    gender: "",
    age: "",
    address: "",
    qualification: "",
    course: "",
    batchType: "",
    batchName: "",
    doj: ""
};
//===========================Initial Form Values::END================================================//

const EditForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();
    
  
    // Fetch the single branch details when the component mounts
    useEffect(() => {
      dispatch(getSingleStudent(id));
    }, [dispatch, id]);
  
    // Access the singleBranch from the Redux store
    const singleStudent = useSelector((state) => state.studentStore.singleStudent);
  
    const [user, setUser] = useState(initialValue);
    const [errors, setErrors] = useState({});
  
    // Update the local state when singleBranch changes
    useEffect(() => {
      if (singleStudent) {
        setUser(singleStudent);
      }
    }, [singleStudent]);
  
    const onValueChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
      setErrors({ ...errors, [e.target.name]: "" });
    };
  
  
    const onSubmit = () => {
      // Dispatch the editBranch action with the updated branch details
      console.log(user);
      dispatch(editStudent(user, id));
      window.alert("Student Updated Successfully!");

      navigate("/");
    };
  
  
  
    
  
    return (
        <div>
        <div>
            <Container>
                <Typography variant="h4">Edit Students</Typography>

                <FormInput >
                    <InputLabel htmlFor="prn -input">PRN</InputLabel>
                    <Input
                        onChange={(e) => onValueChange(e)}
                        name="prn"
                        value={user.prn}
                        id="prn-input"
                    />
                    {/* <FormHelperText error>{errors.prn}</FormHelperText> */}
                </FormInput>



                <FormInput>
                    <InputLabel htmlFor="name-input">NAME</InputLabel>
                    <Input
                        onChange={(e) => onValueChange(e)}
                        name="name"
                        value={user.name}
                        id="name-input"
                    />
                    {/* <FormHelperText error>{errors.name}</FormHelperText> */}
                </FormInput>



                <FormInput>
                    <InputLabel htmlFor="contact-input">CONTACT</InputLabel>
                    <Input
                        onChange={(e) => onValueChange(e)}
                        name="contact"
                        value={user.contact}
                        id="contact-input" />
                    {/* <FormHelperText error>{errors.contact}</FormHelperText> */}
                </FormInput>



                <FormInput>
                    <InputLabel htmlFor="emailId-input">Email</InputLabel>
                    <Input
                        onChange={(e) => onValueChange(e)}
                        name="emailId"
                        value={user.emailId}
                        id="emailId-input"
                    />
                    {/* <FormHelperText error>{errors.emailId}</FormHelperText> */}
                </FormInput>


                <FormInput>
                    <InputLabel htmlFor="dob-input">DATE OF BIRTH</InputLabel>
                    <Input
                        onChange={(e) => onValueChange(e)}
                        name="dob"
                        value={user.dob}
                        id="dob-input"
                    />
                    {/* <FormHelperText error>{errors.dob}</FormHelperText> */}
                </FormInput>

                <FormInput>
                    <InputLabel htmlFor="gender-input">GENDER</InputLabel>
                    <Input
                        onChange={(e) => onValueChange(e)}
                        name="gender"
                        value={user.gender}
                        id="gender-input"
                    />
                    {/* <FormHelperText error>{errors.gender}</FormHelperText> */}
                </FormInput>

                <FormInput>
                    <InputLabel htmlFor="age-input">AGE</InputLabel>
                    <Input
                        onChange={(e) => onValueChange(e)}
                        name="age"
                        value={user.age}
                        id="age-input"
                    />
                    {/* <FormHelperText error>{errors.age}</FormHelperText> */}
                </FormInput>


                <FormInput>
                    <InputLabel htmlFor="address-input">ADDRESS</InputLabel>
                    <Input
                        onChange={(e) => onValueChange(e)}
                        name="address"
                        value={user.address}
                        id="address-input"
                    />
                    {/* <FormHelperText error>{errors.address}</FormHelperText> */}
                </FormInput>

                <FormInput>
                    <InputLabel htmlFor="qualification-input">QUALIFICATION</InputLabel>
                    <Input
                        onChange={(e) => onValueChange(e)}
                        name="qualification"
                        value={user.qualification}
                        id="qualification-input"
                    />
                    {/* <FormHelperText error>{errors.qualification}</FormHelperText> */}
                </FormInput>

                <FormInput>
                    <InputLabel htmlFor="course-input">COURSE</InputLabel>
                    <Input
                        onChange={(e) => onValueChange(e)}
                        name="course"
                        value={user.course}
                        id="course-input"
                    />
                    {/* <FormHelperText error>{errors.course}</FormHelperText> */}
                </FormInput>

                <FormInput>
                    <InputLabel htmlFor="batchType-input">BATCHTYPE</InputLabel>
                    <Input
                        onChange={(e) => onValueChange(e)}
                        name="batchType"
                        value={user.status}
                        id="batchType-input"
                    />
                    {/* <FormHelperText error>{errors.batchType}</FormHelperText> */}
                </FormInput>

                <FormInput>
                    <InputLabel htmlFor="batchName-input">BATCHNAME</InputLabel>
                    <Input
                        onChange={(e) => onValueChange(e)}
                        name="batchName"
                        value={user.batchName}
                        id="batchName-input"
                    />
                    {/* <FormHelperText error>{errors.batchName}</FormHelperText> */}
                </FormInput>
                <SubmitButton variant="contained"color="primary"onClick={onSubmit} > Submit</SubmitButton>
                {/* <Button onClick={()=>navigate("/studentlist")}>Back</Button> */}
            </Container>
        </div>
    </div>

    )
}

export default EditForm
