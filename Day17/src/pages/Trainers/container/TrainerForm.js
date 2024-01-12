import React, { useState } from "react";
import Box from "@mui/material/Box";
import NativeSelect from "@mui/material/NativeSelect";
import { useNavigate } from "react-router-dom";
import { addTrainer,getTrainers,editTrainer } from "../Action";
import { useDispatch } from 'react-redux';

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
  trainername: "",
  username: "",
  email: "",
  contact: "",
  expertisesubject: "",
  experience: "",
  batchsize: "",
  batchmode: "",
  availability: "",
  status: "",
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
const TrainerForm = () => {
  const subjects = [
    "",
    "ReactJs",
    "Java",
    "HTML",
    "CSS",
    "JSON",
    "javascript",
    "Marketing",
    "Angular",
  ];
  const statusOptions = ["","Inprogress", "Completed", "Delayed"];
  const batchmodes=["","Online","Offline","Hybrid"];

  const [user, setUser] = useState(initialValue);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
 

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    dispatch(addTrainer(user));
    navigate("/"); 
    // window.alert("Trainer Added Successfully!");
  };


  return (
    <>
     
    <Container>
      <Heading variant="h4">Add Trainer</Heading>

      <FormInput>
        <InputLabel htmlFor="trainername-input">TrainerName</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="trainername"
          value={user.trainername}
          id="trainername-input"
        />
      </FormInput>

      <FormInput>
        <InputLabel htmlFor="username-input">Username</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="username"
          value={user.username}
          id="username-input"
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
        <InputLabel htmlFor="contact-input">Contact</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="contact"
          value={user.contact}
          id="contact-input"
        />
      </FormInput>

      <FormInput>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="Expertise Subject">
              Expertise Subject
            </InputLabel>
            <NativeSelect
              defaultValue={user.expertisesubject}
              onChange={(e) => onValueChange(e)}
              inputProps={{
                name: "expertisesubject",
              }}
              value={user.expertisesubject}
            >
              {subjects.map((val, index) => {
                return (
                  <option key={index} value={val}>
                    {val}
                  </option>
                );
              })}
            </NativeSelect>
          </FormControl>
        </Box>
      </FormInput>
      <FormInput>
        <InputLabel htmlFor="experience-input">Experience</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="experience"
          value={user.experience}
          id="experience-input"
        />
      </FormInput>
      <FormInput>
        <InputLabel htmlFor="batchsize-input">Batchsize</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="batchsize"
          value={user.batchsize}
          id="batchsize-input"
        />
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
      </FormInput>  
      <FormInput>
        <InputLabel htmlFor="availability-input">Availability</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="availability"
          value={user.availability}
          id="availability-input"
        />
      </FormInput>
      <FormInput>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="status">
            Status
            </InputLabel>
            <NativeSelect
              defaultValue={user.status}
              onChange={(e) => onValueChange(e)}
              inputProps={{
                name: "status",
              }}
              value={user.status}
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
      </FormInput>
      <SubmitButton
          variant="contained"
          color="primary"
          onClick={onSubmit}
        >
          Add Trainer
        </SubmitButton>
    
    </Container>
  </>
  )
}

export default TrainerForm
