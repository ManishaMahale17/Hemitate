import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {editBranch, getSingleBranch } from '../Action';
import { useSelector } from 'react-redux';
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
    registrationCode: "",
    status: "",
};
//===========================Initial Form Values::END================================================//


 


const BranchEdit = () => {
 const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const [user, setUser] = useState(initialValue);
  const [errors, setErrors] = useState({});

  // Fetch the single branch details when the component mounts
  useEffect(() => {
    dispatch(getSingleBranch(id));
  }, [dispatch, id]);

  // Access the singleBranch from the Redux store
  const singleBranch = useSelector((state) => state.branchStore.singleBranch);


  // Update the local state when singleBranch changes
  useEffect(() => {
    if (singleBranch) {
      setUser(singleBranch);
    }
  }, [singleBranch]);

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };


  
  const onSubmit = () => {
    // Dispatch the editBranch action with the updated branch details
    console.log(user);
    dispatch(editBranch(user, id));
    window.alert("Branch Updated Successfully!");
    navigate("/");
  };



    return (
        <div>
        <Container>
        <Typography variant="h4">Edit Branch</Typography>
        <FormInput>
            <InputLabel htmlFor="name-input">Branch Name</InputLabel>
            <Input
                onChange={(e) => onValueChange(e)}
                name="branchName"
                value={user.branchName}
                id="name-input"
            />
        <Typography color="error">{errors.branchName}</Typography>

        </FormInput>


        
        <FormInput>
            <InputLabel htmlFor="name-input">Location</InputLabel>
            <Input
                onChange={(e) => onValueChange(e)}
                name="location"
                value={user.location}
                id="name-input"
            />
       </FormInput>


        
        <FormInput>
            <InputLabel htmlFor="mobile-input">mobile</InputLabel>
            <Input
                onChange={(e) => onValueChange(e)}
                name="mobile"
                value={user.mobile}
                id="mobile-input"
            />
        </FormInput>



        <FormInput>
            <InputLabel htmlFor="email-input">Email</InputLabel>
            <Input
                onChange={(e) => onValueChange(e)}
                name="email"
                value={user.email}
                id="email-input"
            />
        </FormInput>


        <FormInput>
            <InputLabel htmlFor="branchCode-input">Branch Code</InputLabel>
            <Input
                onChange={(e) => onValueChange(e)}
                name="branchCode"
                value={user.branchCode}
                id="branchCode-input"
            />
        </FormInput>


        <FormInput>
            <InputLabel htmlFor="enquiryCode-input">Enquiry Code</InputLabel>
            <Input
                onChange={(e) => onValueChange(e)}
                name="enquiryCode"
                value={user.enquiryCode}
                id="enquiryCode-input"
            />
        </FormInput>



        <FormInput>
            <InputLabel htmlFor="enquiryCode-input">Registration Code</InputLabel>
            <Input
                onChange={(e) => onValueChange(e)}
                name="registrationCode"
                value={user.registrationCode}
                id="registrationCode-input"
            />
        </FormInput>

        
        <FormInput>
            <InputLabel htmlFor="status-input">Status</InputLabel>
            <Input
                onChange={(e) => onValueChange(e)}
                name="status"
                value={user.status}
                id="status-input"
            />
        </FormInput>

        <SubmitButton
            variant="contained"
            color="primary"
            onClick={onSubmit}
          
        >
            Add Branch
        </SubmitButton>

    </Container>
        </div>
    )
}

export default BranchEdit
