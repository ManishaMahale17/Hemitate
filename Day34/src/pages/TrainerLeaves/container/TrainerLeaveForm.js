import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import NativeSelect from "@mui/material/NativeSelect";
import { useDispatch } from "react-redux";
import { editTrLeave,addTrLeave } from "../Action";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
  TextField,
} from "@mui/material";

const initialValue = {
  id: "",
  trainerid:"",
  trainername: "",
  startdate: "",
  enddate:"",
  leavetype: "",
  reason: "",
  totalleaves:"",
  pending:"",
  totaltaken:""
  
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

const TrainerLeaveForm = ({ course, action, actionList, handleClose }) => {
  const leavetypes = ["", "Earned Leave", "Casual Leave", "Sick Leave","Maternity Leave ","Marriage Leave","Paternity Leave","Bereavement Leave"];

  const [trainerleaves, setTrainerLeaves] = useState(course);
  const [errors, setErrors] = useState({ ...initialValue });

  const dispatch = useDispatch();

  const onValueChange = (e) => {
    setTrainerLeaves({ ...trainerleaves, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
  const isValidDate = (dateString) => {
    const regexDate = /^\d{4}-\d{2}-\d{2}$/;
    return regexDate.test(dateString);
  };
  useEffect(() => {
    // if (course) {
      setTrainerLeaves(course);
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
      "reason",
      "totalleaves",
      "pending",
      "totaltaken"
    ];
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!trainerleaves[field].trim()) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [field]: `${
            field.charAt(0).toUpperCase() + field.slice(1)
          } is required`,
        }));
        isValid = false;
      }
    });

    if (!isValidDate(trainerleaves.startdate) || !isValidDate(trainerleaves.enddate)) {
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
        trainerid: trainerleaves.trainerid,
        trainername:trainerleaves.trainername,
        startdate: trainerleaves.startdate,
        enddate:trainerleaves.enddate,
        leavetype: trainerleaves.leavetype,
        reason: trainerleaves.reason,
        totalleaves:trainerleaves.totalleaves,
        pending:trainerleaves.pending,
        totaltaken:trainerleaves.totaltaken
      };
      if (action === actionList.Edit) {
        data["id"] = trainerleaves.id;
        dispatch(editTrLeave(data));
        // navigate("/dashboard/holiday");
        window.alert("Leave Updated Successfully!");
        handleClose();
      } else {
        dispatch(addTrLeave(data));
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
            value={trainerleaves.trainerid}
            id="trainerid-input"
          />
          <Typography color="error">{errors.trainerid}</Typography>
        </FormInput>
        <FormInput>
          <InputLabel htmlFor="trainername-input">Trainer Name</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="trainername"
            value={trainerleaves.trainername}
            id="trainername-input"
          />
          <Typography color="error">{errors.trainername}</Typography>
        </FormInput>

        <FormInput>
          <TextField
            onChange={(e) => onValueChange(e)}
            type="date"
            name="startdate"
            value={trainerleaves.startdate}
            id="date-input"
            fullWidth
          />
          <Typography color="error">{errors.startdate}</Typography>
        </FormInput>

        <FormInput>
          <TextField
            onChange={(e) => onValueChange(e)}
            type="date"
            name="enddate"
            value={trainerleaves.enddate}
            id="date-input"
            fullWidth
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
                defaultValue={trainerleaves.leavetype}
                onChange={(e) => onValueChange(e)}
                inputProps={{
                  name: "leavetype",
                }}
                value={trainerleaves.leavetype}
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
            value={trainerleaves.reason}
            id="reason-input"
          />
          <Typography color="error">{errors.reason}</Typography>
        </FormInput>
        <FormInput>
          <InputLabel htmlFor="totalleaves-input">Total Leaves</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="totalleaves"
            value={trainerleaves.totalleaves}
            id="totalleaves-input"
          />
          <Typography color="error">{errors.totalleaves}</Typography>
        </FormInput>
        <FormInput>
          <InputLabel htmlFor="pending-input">Pending</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="pending"
            value={trainerleaves.pending}
            id="pending-input"
          />
          <Typography color="error">{errors.pending}</Typography>
        </FormInput>
        <FormInput>
          <InputLabel htmlFor="totaltaken-input">Total Taken</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="totaltaken"
            value={trainerleaves.totaltaken}
            id="totaltaken-input"
          />
          <Typography color="error">{errors.totaltaken}</Typography>
        </FormInput>

        <SubmitButton variant="contained" color="primary" onClick={onSubmit}>
          {action === actionList.Add ? "Add Leave" : "Edit Leave"}
        </SubmitButton>
      </Container>
    </>
  );
};

export default TrainerLeaveForm;