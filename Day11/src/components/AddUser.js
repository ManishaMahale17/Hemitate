import React, { useState } from 'react';
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
  FormHelperText,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../service/api';

const initialValue = {
  name: '',
  username: '',
  email: '',
  phone: '',
  expertisesubject: '',
  experience: '',
  batchsize: '',
  batchmode: '',
  availability: '',
  status: '',
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

const AddUser = () => {
  const [user, setUser] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    Object.keys(initialValue).forEach((field) => {
      if (!user[field]) {
        isValid = false;
        newErrors[field] = 'This field is required';
      }
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (user.email && !emailRegex.test(user.email)) {
      isValid = false;
      newErrors.email = 'Invalid email address';
    }

    if (user.phone && isNaN(user.phone)) {
      isValid = false;
      newErrors.phone = 'Phone must be a number';
    }

    setErrors(newErrors);
    return isValid;
  };

  const addUserDetails = async () => {
    if (validateForm()) {
      await addUser(user);
      navigate('/all');
    } else {
      alert('Please fill in all required fields with valid data');
    }
  };

  return (
    <Container>
      <Typography variant="h4">Add Trainer</Typography>

      <FormInput>
        <InputLabel htmlFor="name-input">Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={user.name}
          id="name-input"
        />
        <FormHelperText error>{errors.name}</FormHelperText>
      </FormInput>

      <FormInput>
        <InputLabel htmlFor="username-input">Username</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="username"
          value={user.username}
          id="username-input"
        />
        <FormHelperText error>{errors.username}</FormHelperText>
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
        <InputLabel htmlFor="phone-input">Phone</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="phone"
          value={user.phone}
          id="phone-input"
        />
        <FormHelperText error>{errors.phone}</FormHelperText>
      </FormInput>

      <FormInput>
        <InputLabel htmlFor="phone-input">Expertise Subject</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="expertisesubject"
          value={user.expertisesubject}
          id="expertisesubject-input"
        />
        <FormHelperText error>{errors.expertisesubject}</FormHelperText>
      </FormInput>
      <FormInput>
        <InputLabel htmlFor="phone-input">Experience</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="experience"
          value={user.experience}
          id="experience-input"
        />
        <FormHelperText error>{errors.experience}</FormHelperText>
      </FormInput>
      <FormInput>
        <InputLabel htmlFor="phone-input">Batchsize</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="batchsize"
          value={user.batchsize}
          id="batchsize-input"
        />
        <FormHelperText error>{errors.batchsize}</FormHelperText>
      </FormInput>
      <FormInput>
        <InputLabel htmlFor="phone-input">Batchmode</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="batchmode"
          value={user.batchmode}
          id="batchmode-input"
        />
        <FormHelperText error>{errors.batchmode}</FormHelperText>
      </FormInput>
      <FormInput>
        <InputLabel htmlFor="phone-input">Availability</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="availability"
          value={user.availability}
          id="availability-input"
        />
        <FormHelperText error>{errors.availability}</FormHelperText>
      </FormInput>
      <FormInput>
        <InputLabel htmlFor="phone-input">Status</InputLabel>
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
        onClick={() => addUserDetails()}
      >
        Add Trainer
      </SubmitButton>
    </Container>
  );
};

export default AddUser;
