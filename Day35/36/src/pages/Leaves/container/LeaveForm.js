import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import NativeSelect from "@mui/material/NativeSelect";
import { useDispatch } from "react-redux";
import { editLeave,addLeave } from "../Action";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
} from "@mui/material";

const initialValue = {
  id: "",
    leavecode:"" ,
    description:"",
    totalleaves:""    
};

const Container = styled(FormGroup)`
  width: 70%;
  margin:auto;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f3;
`;

const FormInput = styled(FormControl)`
  margin-top: 20px;
`;

const SubmitButton = styled(Button)`
  margin-top: 20px;
`;

const LeaveForm = ({ course, action, actionList, handleClose }) => {


  const [leave, setLeave] = useState(course);
  const [errors, setErrors] = useState({ ...initialValue });

  const dispatch = useDispatch();

  const onValueChange = (e) => {
    setLeave({ ...leave, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
  useEffect(() => {
    // if (course) {
      setLeave(course);
    // }
    // validateForm();
  }, [course]);

  const validateForm = () => {
    const requiredFields = [
      "leavecode",
      "description",
      "totalleaves"  
    ];
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!leave[field].trim()) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [field]: `${
            field.charAt(0).toUpperCase() + field.slice(1)
          } is required`,
        }));
        isValid = false;
      }
    });
  
    return isValid;
  };
  const onSubmit = () => {
    let isValid = validateForm();
    if (isValid) {
      let data = {
        leavecode: leave.leavecode,
        description:leave.description,
        totalleaves: leave.totalleaves
      };
      if (action === actionList.Edit) {
        data["id"] = leave.id;
        dispatch(editLeave(data));
        // navigate("/dashboard/holiday");
        window.alert("Leave Updated Successfully!");
        handleClose();
      } else {
        dispatch(addLeave(data));
        // submitForm(data)
        window.alert("Leave Added Successfully!");
        // navigate("/dashboard/holiday");
        handleClose();
      }
    }
  };

  return (
    <>
      <Container>
      <FormInput>
          <InputLabel htmlFor="trainerid-input">Leave Code</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="leavecode"
            value={leave.leavecode}
            id="leavecode-input"
          />
          <Typography color="error">{errors.leavecode}</Typography>
        </FormInput>
        <FormInput>
          <InputLabel htmlFor="trainername-input">Description</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="description"
            value={leave.description}
            id="description-input"
          />
          <Typography color="error">{errors.description}</Typography>
        </FormInput> 
        <FormInput>
          <InputLabel htmlFor="totalleaves-input">Total Leaves</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="totalleaves"
            value={leave.totalleaves}
            id="totalleaves-input"
          />
          <Typography color="error">{errors.totalleaves}</Typography>
        </FormInput>
        

        <SubmitButton variant="contained" color="primary" onClick={onSubmit}>
          {action === actionList.Add ? "Add Leave" : "Edit Leave"}
        </SubmitButton>
      </Container>
    </>
  );
};

export default LeaveForm;
