
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCourses } from "../Action";



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

const initialValue = {
  id: "",
  coursename: "",
  duration: "",
  fees: "",
  trainer: "",
  description: "",
 
};

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


const CourseForm = () => {

  const navigate = useNavigate();
   const dispatch = useDispatch()
   
  const [user, setUser] = useState(initialValue);
  const [errors, setErrors] = useState({});
 

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const onSubmit = () => {
    dispatch(addCourses(user));
    navigate("/dashboard/course"); 
   
  };
  return (
    <>
    
    <Container>
      <Typography variant="h4">Add Course</Typography>

      <FormInput>
        <InputLabel htmlFor="name-input">CourseName</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="coursename"
          value={user.coursename}
          id="name-input"
        />
        <FormHelperText error>{errors.coursename}</FormHelperText>
      </FormInput>

      <FormInput>
        <InputLabel htmlFor="username-input">Duration</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="duration"
          value={user.duration}
          id="username-input"
        />
        <FormHelperText error>{errors.duration}</FormHelperText>
      </FormInput>

      <FormInput>
        <InputLabel htmlFor="email-input">Fees</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="fees"
          value={user.fees}
          id="email-input"
        />
        <FormHelperText error>{errors.fees}</FormHelperText>
      </FormInput>

      <FormInput>
        <InputLabel htmlFor="phone-input">Trainer</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="trainer"
          value={user.trainer}
          id="phone-input"
        />
        <FormHelperText error>{errors.trainer}</FormHelperText>
      </FormInput>

      <FormInput>
        <InputLabel htmlFor="experience-input">Description</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="description"
          value={user.description}
          id="experience-input"
        />
        <FormHelperText error>{errors.description}</FormHelperText>
      </FormInput>

      <SubmitButton
        variant="contained"
        color="primary" onClick={()=>onSubmit()}>

        Add Course
      </SubmitButton>
    
    </Container>
  </>

      
  )
}

export default CourseForm
