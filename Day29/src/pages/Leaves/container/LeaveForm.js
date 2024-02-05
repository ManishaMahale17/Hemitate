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
  trainerid:"",
  trainername: "",
  startdate: "",
  enddate:"",
  leavetype: "",
  reason: ""
  
};

const Container = styled(FormGroup)`
  width: 60%;
  margin: 5% auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

const FormInput = styled(FormControl)`
  margin-top: 20px;
`;

const SubmitButton = styled(Button)`
  margin-top: 20px;
`;

const LeaveForm = ({ course, action, actionList, handleClose }) => {
  const leavetypes = ["", "Earned Leave", "Casual Leave", "Sick Leave","Maternity Leave ","Marriage Leave","Paternity Leave","Bereavement Leave"];

  const [leave, setLeave] = useState(course);
  const [errors, setErrors] = useState({ ...initialValue });

  const dispatch = useDispatch();

  const onValueChange = (e) => {
    setLeave({ ...leave, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
  const isValidDate = (dateString) => {
    const regexDate = /^\d{4}-\d{2}-\d{2}$/;
    return regexDate.test(dateString);
  };
  useEffect(() => {
    // if (course) {
      setLeave(course);
    // }
    // validateForm();
  }, [course]);

  const validateForm = () => {
    const requiredFields = [
      "trainerid",
      "trainername",
      "startdate",
      "enddate",
      "leavetype",
      "reason"
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

    if (!isValidDate(leave.startdate) || !isValidDate(leave.enddate)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        startdate: "Invalid date format. Please use YYYY-MM-DD.",
        enddate: "Invalid date format. Please use YYYY-MM-DD.",
      }));
      isValid = false;
    }
    

    return isValid;
  };
  const onSubmit = () => {
    let isValid = validateForm();
    if (isValid) {
      let data = {
        trainerid: leave.trainerid,
        trainername:leave.trainername,
        startdate: leave.startdate,
        enddate:leave.enddate,
        leavetype: leave.leavetype,
        reason: leave.reason,
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
          <InputLabel htmlFor="trainerid-input">Trainer Id</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="trainerid"
            value={leave.trainerid}
            id="trainerid-input"
          />
          <Typography color="error">{errors.trainerid}</Typography>
        </FormInput>
        <FormInput>
          <InputLabel htmlFor="trainername-input">Trainer Name</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="trainername"
            value={leave.trainername}
            id="trainername-input"
          />
          <Typography color="error">{errors.trainername}</Typography>
        </FormInput>

        <FormInput>
          <InputLabel htmlFor="date-input"> Start Date</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            type="date"
            name="startdate"
            value={leave.startdate}
            id="date-input"
          />
          <Typography color="error">{errors.startdate}</Typography>
        </FormInput>
        <FormInput>
          <InputLabel htmlFor="date-input">End Date</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            type="date"
            name="enddate"
            value={leave.enddate}
            id="date-input"
          />
          <Typography color="error">{errors.enddate}</Typography>
        </FormInput>
        <FormInput>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="leavetype">
              Leave Type
              </InputLabel>
              <NativeSelect
                defaultValue={leave.leavetype}
                onChange={(e) => onValueChange(e)}
                inputProps={{
                  name: "leavetype",
                }}
                value={leave.leavetype}
              >
                {leavetypes.map((val, index) => {
                  return (
                    <option key={index} value={val}>
                      {val}
                    </option>
                  );
                })}
              </NativeSelect>
            </FormControl>
          </Box>
          <Typography color="error">{errors.leavetype}</Typography>
        </FormInput>

        <FormInput>
          <InputLabel htmlFor="reason-input">Reason</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="reason"
            value={leave.reason}
            id="reason-input"
          />
          <Typography color="error">{errors.reason}</Typography>
        </FormInput>

        <SubmitButton variant="contained" color="primary" onClick={onSubmit}>
          {action === actionList.Add ? "Add Leave" : "Edit Leave"}
        </SubmitButton>
      </Container>
    </>
  );
};

export default LeaveForm;
