import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addBranch } from '../Action';
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
    branchName: "",
    location: "",
    mobile: "",
    email: "",
    branchCode: "",
    enquiryCode:"",
    regCode: "",
    status: "",
};
//===========================Initial Form Values::END================================================//


 
const BranchForm = () => {
    const [user, setUser] = useState(initialValue);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();



    
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    Object.keys(initialValue).forEach((field) => {
      if (!user[field]) {
        isValid = false;
        newErrors[field] = "This field is required";
      }
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (user.email && !emailRegex.test(user.email)) {
      isValid = false;
      newErrors.email = "Invalid email address";
    }

    if (user.mobile && isNaN(user.mobile)) {
      isValid = false;
      newErrors.mobile = "Phone must be a number";
    }

    setErrors(newErrors);
    return isValid;
  };


  const onSubmit = () => {
    if (validateForm()) {
      dispatch(addBranch(user));
      navigate("/dashboard/branch");
    }
  };
       
 //===========================Event Handlers::START================================================//
  
 const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
 //===========================Event Handlers::END================================================//


    return (
        <div>
        <Container>
        <Typography variant="h4">Add Branch</Typography>
        <FormInput>
            <InputLabel htmlFor="name-input">Branch Name</InputLabel>
            <Input
                onChange={(e) => onValueChange(e)}
                name="branchName"
                value={user.branchName}
                id="name-input"
            />
            <FormHelperText error>{errors.branchName}</FormHelperText>
        </FormInput>


        
        <FormInput>
            <InputLabel htmlFor="name-input">Location</InputLabel>
            <Input
                onChange={(e) => onValueChange(e)}
                name="location"
                value={user.location}
                id="name-input"
            />
            <FormHelperText error>{errors.branchName}</FormHelperText>
        </FormInput>


        
        <FormInput>
            <InputLabel htmlFor="mobile-input">mobile</InputLabel>
            <Input
                onChange={(e) => onValueChange(e)}
                name="mobile"
                value={user.mobile}
                id="mobile-input"
            />
            <FormHelperText error>{errors.mobile}</FormHelperText>
        </FormInput>



        <FormInput>
            <InputLabel htmlFor="email-input">Email</InputLabel>
            <Input
                onChange={(e) => onValueChange(e)}
                name="email"
                value={user.email}
                id="email-input"
            />
            <FormHelperText error>{errors.email}</FormHelperText>
        </FormInput>


        <FormInput>
            <InputLabel htmlFor="branchCode-input">Branch Code</InputLabel>
            <Input
                onChange={(e) => onValueChange(e)}
                name="branchCode"
                value={user.branchCode}
                id="branchCode-input"
            />
            <FormHelperText error>{errors.branchCode}</FormHelperText>
        </FormInput>

        <FormInput>
            <InputLabel htmlFor="enquiryCode-input">Enquiry Code</InputLabel>
            <Input
                onChange={(e) => onValueChange(e)}
                name="enquiryCode"
                value={user.enquiryCode}
                id="enquiryCode-input"
            />
            <FormHelperText error>{errors.enquiryCode}</FormHelperText>
        </FormInput>



        <FormInput>
            <InputLabel htmlFor="regCode-input">Registration Code</InputLabel>
            <Input
                onChange={(e) => onValueChange(e)}
                name="regCode"
                value={user.regCode}
                id="regCode-input"
            />
            <FormHelperText error>{errors.regCode}</FormHelperText>
        </FormInput>

        
        <FormInput>
            <InputLabel htmlFor="status-input">Status</InputLabel>
            <Input
                onChange={(e) => onValueChange(e)}
                name="status"
                value={user.status}
                id="status-input"
            />
            <FormHelperText error>{errors.status}</FormHelperText>
        </FormInput>

        <SubmitButton
            variant="contained"
            color="primary"
            onClick={onSubmit}
        >
            Add Branch
        </SubmitButton> 

        <Link className='btn  mt-3' to='/branchlist' >Back</Link>

    </Container>
        </div>
    )
}

export default BranchForm
