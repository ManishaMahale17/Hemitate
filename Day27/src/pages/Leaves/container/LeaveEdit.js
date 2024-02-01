import React, { useState ,useEffect} from "react";
import Box from "@mui/material/Box";
import NativeSelect from "@mui/material/NativeSelect";
import { useNavigate, useParams } from "react-router-dom";
import { editLeave, getSingleLeave } from "../Action";
import { useDispatch, useSelector } from 'react-redux';



import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography
} from "@mui/material";

const initialValue = {
    trainerid:"",
    trainername: "",
    startdate: "",
    enddate:"",
    leavetype: "",
    reason: ""
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
 const Heading=styled(Typography)`
 text-align: center;
 font-weight: bold;
 `
const LeaveEdit = () => {
    const leavetypes = [
        "",
        "Sick Leave",
        "Casual Leave",
        "Earned Leave",
        "Maternity Leave",
        "Paternity Leave",
        "Bereavement Leave"
      ];
      const [leave, setLeave] = useState(initialValue);
      const [errors, setErrors] = useState({ ...initialValue });
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
 
  const singleLeave = useSelector((state) => state.LeaveStore.singleLeave);


  useEffect(() => {
    dispatch(getSingleLeave(id));
  }, [dispatch,id]);

 useEffect(() => {
  if (singleLeave) {
    setLeave(singleLeave);
  }
}, [singleLeave]);
  

  const onValueChange = (e) => {
    setLeave({ ...leave, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const onSubmit = () => {
    const requiredFields = [
        "trainerid","trainername", "startdate","enddate", "leavetype", "reason"
    ];
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!leave[field].trim()) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [field]: `${field.charAt(0).toUpperCase() + field.slice(1)} is required`,
        }));
        isValid = false;
      }
    });
 

    if (isValid) {

      dispatch(editLeave(leave,id));
      navigate("/dashboard/leave");
      window.alert("Leave Updated Successfully!");
     
      
    }
  };

 
  const goBack = () => {
    navigate("/dashboard/leave");
  };
  return (
    <>
    <Button
        variant="contained"
        color="primary"
        onClick={goBack}
        style={{ marginTop: "20px", marginLeft: "20px" }}
      >
        Go Back
      </Button>
    <Container>
   
      <Heading variant="h4">Edit Leaves</Heading>

      <FormInput>
          <InputLabel htmlFor="trainerid-input">TrainerId</InputLabel>
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
            id="startdate-input"
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
            id="enddate-input"
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
      <SubmitButton
          variant="contained"
          color="primary"
          onClick={onSubmit}
        >
          Edit Leave
        </SubmitButton>
    
    </Container>
  </>
  )
}

export default LeaveEdit

