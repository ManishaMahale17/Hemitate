import React, { useState ,useEffect} from "react";
import Box from "@mui/material/Box";
import NativeSelect from "@mui/material/NativeSelect";
import { useNavigate, useParams } from "react-router-dom";
import { editTrainer, getSingleTrainer } from "../Action";
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
const TrainerEdit = () => {
  const subjects = [
    "",
    "ReactJs",
    "Java",
    "HTML",
    "CSS",
    "MySQL",
    "javascript",
    "Marketing",
    "Angular",
  ];
  const statusOptions = ["","Inprogress", "Completed", "Delayed"];
  const batchmodes=["","Online","Offline","Hybrid"];

  const [trainer, settrainer] = useState(initialValue);
  const [errors, setErrors] = useState({ ...initialValue });
 

  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  //  // Access the singleBranch from the Redux store
  const singleTrainer = useSelector((state) => state.TrainerStore.singleTrainer);


  useEffect(() => {
    dispatch(getSingleTrainer(id));
  }, [dispatch,id]);

 // Update the local state when singleBranch changes
 useEffect(() => {
  if (singleTrainer) {
    settrainer(singleTrainer);
  }
}, [singleTrainer]);
  

  const onValueChange = (e) => {
    settrainer({ ...trainer, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const onSubmit = () => {
    const requiredFields = [
      "trainername",
      "username",
      "email",
      "contact",
      "expertisesubject",
      "experience",
      "batchsize",
      "batchmode",
      "availability",
      "status",
    ];
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!trainer[field].trim()) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [field]: `${field.charAt(0).toUpperCase() + field.slice(1)} is required`,
        }));
        isValid = false;
      }
    });
    const emailRegex = /^\S+@\S+\.\S+$/;
    const contactRegex = /^\d{10}$/;

    if (!emailRegex.test(trainer.email.trim())) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Enter a valid email address",
      }));
      isValid = false;
    }

    if (!contactRegex.test(trainer.contact.trim())) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        contact: "Enter a valid 10-digit contact number",
      }));
      isValid = false;
    }

    if (isValid) {

      dispatch(editTrainer(trainer,id));
      navigate("/dashboard/trainer");
      window.alert("Trainer Updated Successfully!");
     
      
    }
  };

 

  return (
    <>
     
    <Container>
      <Heading variant="h4">Edit Trainer</Heading>

      <FormInput>
        <InputLabel htmlFor="trainername-input">TrainerName</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="trainername"
          value={trainer.trainername}
          id="trainername-input"
        />
        <Typography color="error">{errors.trainername}</Typography>
      </FormInput>

      <FormInput>
        <InputLabel htmlFor="username-input">Username</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="username"
          value={trainer.username}
          id="username-input"
        />
         <Typography color="error">{errors.username}</Typography>
      </FormInput>

      <FormInput>
        <InputLabel htmlFor="email-input">Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          value={trainer.email}
          id="email-input"
        />
         <Typography color="error">{errors.email}</Typography>
      </FormInput>

      <FormInput>
        <InputLabel htmlFor="contact-input">Contact</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="contact"
          value={trainer.contact}
          id="contact-input"
        />
         <Typography color="error">{errors.contact}</Typography>
      </FormInput>

      <FormInput>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="Expertise Subject">
              Expertise Subject
            </InputLabel>
            <NativeSelect
              defaultValue={trainer.expertisesubject}
              onChange={(e) => onValueChange(e)}
              inputProps={{
                name: "expertisesubject",
              }}
              value={trainer.expertisesubject}
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
        <Typography color="error">{errors.expertisesubject}</Typography>
      </FormInput>
      <FormInput>
        <InputLabel htmlFor="experience-input">Experience</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="experience"
          value={trainer.experience}
          id="experience-input"
        />
        <Typography color="error">{errors.experience}</Typography>
      </FormInput>
      <FormInput>
        <InputLabel htmlFor="batchsize-input">Batchsize</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="batchsize"
          value={trainer.batchsize}
          id="batchsize-input"
        />
        <Typography color="error">{errors.batchsize}</Typography>
      </FormInput>
        <FormInput>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="batchmode">
            Batchmode
            </InputLabel>
            <NativeSelect
              defaultValue={trainer.batchmode}
              onChange={(e) => onValueChange(e)}
              inputProps={{
                name: "batchmode",
              }}
              value={trainer.batchmode}
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
        <Typography color="error">{errors.batchmode}</Typography>
      </FormInput>  
      <FormInput>
        <InputLabel htmlFor="availability-input">Availability</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="availability"
          value={trainer.availability}
          id="availability-input"
        />
        <Typography color="error">{errors.availability}</Typography>
      </FormInput>
      <FormInput>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="status">
            Status
            </InputLabel>
            <NativeSelect
              defaultValue={trainer.status}
              onChange={(e) => onValueChange(e)}
              inputProps={{
                name: "status",
              }}
              value={trainer.status}
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
        <Typography color="error">{errors.status}</Typography>
      </FormInput>
      <SubmitButton
          variant="contained"
          color="primary"
          onClick={onSubmit}
        >
          Edit Trainer
        </SubmitButton>
    
    </Container>
  </>
  )
}

export default TrainerEdit;
