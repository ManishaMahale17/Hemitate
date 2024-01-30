import React, { useState ,useEffect} from "react";
import Box from "@mui/material/Box";
import NativeSelect from "@mui/material/NativeSelect";
import { useNavigate, useParams } from "react-router-dom";
import { editHoliday, getSingleHoliday } from "../Action";
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
  holidayname: "",
  date: "",
  holidaytype: "",
  description: ""
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
const HolidayEdit = () => {
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
  const { id } = useParams();
 
  const singleHoliday = useSelector((state) => state.HolidayStore.singleHoliday);


  useEffect(() => {
    dispatch(getSingleHoliday(id));
  }, [dispatch,id]);

 useEffect(() => {
  if (singleHoliday) {
    setHoliday(singleHoliday);
  }
}, [singleHoliday]);
  

  const onValueChange = (e) => {
    setHoliday({ ...holiday, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
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
          [field]: `${field.charAt(0).toUpperCase() + field.slice(1)} is required`,
        }));
        isValid = false;
      }
    });
 

    if (isValid) {

      dispatch(editHoliday(holiday,id));
      navigate("/dashboard/holiday");
      window.alert("Holiday Updated Successfully!");
     
      
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
   
      <Heading variant="h4">Edit Holiday</Heading>

      <FormInput>
        <InputLabel htmlFor="holidayname-input">Holiday Name</InputLabel>
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
      <SubmitButton
          variant="contained"
          color="primary"
          onClick={onSubmit}
        >
          Edit Holiday
        </SubmitButton>
    
    </Container>
  </>
  )
}

export default HolidayEdit
