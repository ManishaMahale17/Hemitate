import React, { useState } from "react";
import Box from "@mui/material/Box";
import NativeSelect from "@mui/material/NativeSelect";
import { useNavigate } from "react-router-dom";
import { addHoliday } from "../Action";
import { useDispatch } from "react-redux";

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
  holidayname: "",
  date: "",
  holidaytype: "",
  description: ""
};

const Container = styled(FormGroup)`
   width: 40%; 
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
const Heading = styled(Typography)`
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;

`;

const HolidayForm = () => {
  const holidaytypes = [
    "",
    "NH",
    "HL",
    "WO"
  ];


  const [holiday, setHoliday] = useState(initialValue);
  const [errors, setErrors] = useState({ ...initialValue });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onValueChange = (e) => {
    setHoliday({ ...holiday, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
  const isValidDate = (dateString) => {
    const regexDate = /^\d{4}-\d{2}-\d{2}$/;
    return regexDate.test(dateString);
  };
  const onSubmit = () => {
    const requiredFields = [
      "holidayname",
      "date",
      "holidaytype",
      "description" 
    ];
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!holiday[field].trim()) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [field]: `${
            field.charAt(0).toUpperCase() + field.slice(1)
          } is required`,
        }));
        isValid = false;
      }
    });
    if (!isValidDate(holiday.date)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        date: "Invalid date format. Please use YYYY-MM-DD.",
      }));
      isValid = false;
    }

    if (isValid) {
      dispatch(addHoliday(holiday));
      navigate("/dashboard/holiday");
      window.alert("Holiday Added Successfully!");
    }
  };
  const goBack = () => {
    navigate("/dashboard/holiday");
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
        <Heading variant="h4">Add Holiday</Heading>
        <FormInput>
          <InputLabel htmlFor="holidayname-input">Holidayname</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="holidayname"
            value={holiday.holidayname}
            id="holidayname-input"
          />
          <Typography color="error">{errors.holidayname}</Typography>
        </FormInput>

        <FormInput>
          <InputLabel htmlFor="date-input">Date</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            type="date"
            name="date"
            value={holiday.date}
            id="date-input"
          />
          <Typography color="error">{errors.date}</Typography>
        </FormInput>
        <FormInput>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="holidaytype">
              Holiday Type
              </InputLabel>
              <NativeSelect
                defaultValue={holiday.holidaytype}
                onChange={(e) => onValueChange(e)}
                inputProps={{
                  name: "holidaytype",
                }}
                value={holiday.holidaytype}
              >
                {holidaytypes.map((val, index) => {
                  return (
                    <option key={index} value={val}>
                      {val}
                    </option>
                  );
                })}
              </NativeSelect>
            </FormControl>
          </Box>
          <Typography color="error">{errors.holidaytype}</Typography>
        </FormInput>
        
        <FormInput>
          <InputLabel htmlFor="description-input">Description</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="description"
            value={holiday.description}
            id="description-input"
          />
          <Typography color="error">{errors.description}</Typography>
        </FormInput>
       
        <SubmitButton variant="contained" color="primary" onClick={onSubmit}>
          Add Holiday
        </SubmitButton>
      </Container>
    </>
  );
};

export default HolidayForm;
