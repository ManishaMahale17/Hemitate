import React, { useState } from "react";
import {
  FormGroup,
  FormLabel,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  TextField,
  Checkbox
} from "@mui/material";
import { addStudent } from "../Services/api";

const StyledForm = styled("form")({
  width: "50%",
  margin: "0 auto",
  marginTop: "100px",
  padding: "20px",
  boxShadow: '0px 255px 255px 30px rgba(100,0,15,0.4)',
  borderRadius: '15px',
  backgroundColor:'#EFF8FC'
});

const SectionHeading = styled("div")({
  fontWeight: "bold",
  fontSize: "1.6rem",
  marginBottom: "10px",
});
const FormControlWithMargin = styled(FormControl)({
  marginBottom: "20px",
});

const initialFormData = {
  // Personal Information
  date:new Date().toISOString().slice(0, 10),
  enrollmentNo: "",
  fullName: "",
  email: "",
  mobileNo: "",
  gender: "",
  branch: "",
  address: "",

  // Educational Details
  qualification: "",
  collegeName: "",
  passoutYear: "",
  joinAs: "",

  // Courses
  course: "",

  // Documents Required
  resume: null,
  adharCard: null,
  photoDoc: null,
  panCard: null,
  digitalSignature: null,
};

const StudentEnrollment = () => {
  const [formData, setFormData] = useState({ ...initialFormData });
  

const handleChange =(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value})
  console.log(formData)
}
   const handleSubmit=async()=>{
   await addStudent(formData)
   } 

  return (
    <StyledForm>
      <SectionHeading>Personal Information</SectionHeading>
      <FormGroup sx={{ marginBottom: "20px" }}>
        <FormControl variant="standard" fullWidth sx={{ marginBottom: "20px" }}>
          <InputLabel htmlFor="date">Date</InputLabel>
          <Input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "20px" }}>
          <InputLabel htmlFor="enrollmentNo">Enrollment No</InputLabel>
          <Input
            id="enrollmentNo"
            name="enrollmentNo"
            value={formData.enrollmentNo}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "20px" }}>
          <InputLabel htmlFor="fullName">Full Name</InputLabel>
          <Input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "20px" }}>
          <InputLabel htmlFor="email">Email Id</InputLabel>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "20px" }}>
          <InputLabel htmlFor="mobileNo">Mobile No</InputLabel>
          <Input
            id="mobileNo"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl
          component="fieldset"
          fullWidth
          sx={{ marginBottom: "20px" }}
        >
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            row
            aria-label="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <FormGroup sx={{ marginBottom: "20px" }}>
          <FormControl
            variant="standard"
            fullWidth
            sx={{ marginBottom: "20px" }}
          >
            <InputLabel htmlFor="branch">Branch</InputLabel>
            <Select
              id="branch"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              required
            >
              <MenuItem value="">Select branch</MenuItem>
              <MenuItem value="Chandannagar,Pune">Chandan Nagar, Pune</MenuItem>
              <MenuItem value="Chennai">Chennai</MenuItem>
            </Select>
          </FormControl>
        </FormGroup>
        <FormControl fullWidth sx={{ marginBottom: "20px" }}>
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            name="address"
            multiline
            rows={3}
            value={formData.address}
            onChange={handleChange}
            required
          />
        </FormControl>
      </FormGroup>

      <SectionHeading>Educational Details</SectionHeading>
      <FormGroup sx={{ marginBottom: "20px" }}>
        <FormControl fullWidth sx={{ marginBottom: "20px" }}>
          <InputLabel htmlFor="qualification">Qualification</InputLabel>
          <Input
            id="qualification"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "20px" }}>
          <InputLabel htmlFor="collegeName">College Name</InputLabel>
          <Input
            id="collegeName"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "20px" }}>
          <InputLabel htmlFor="passoutYear">Passout Year</InputLabel>
          <Input
            id="passoutYear"
            name="passoutYear"
            type="year"
            value={formData.passoutYear}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormGroup sx={{ marginBottom: "20px" }}>
          <FormControl
            variant="standard"
            fullWidth
            sx={{ marginBottom: "20px" }}
          >
            <InputLabel htmlFor="joinAs">Join As</InputLabel>
            <Select
              id="joinAs"
              name="joinAs"
              value={formData.joinAs}
              onChange={handleChange}
              required
            >
              <MenuItem value="">Select Option</MenuItem>
              <MenuItem value="Student">Student</MenuItem>
              <MenuItem value="Intern">Intern</MenuItem>
            </Select>
          </FormControl>
        </FormGroup>
      </FormGroup>

      <SectionHeading>Courses</SectionHeading>
      <FormGroup sx={{ marginBottom: "20px" }}>
        <FormControl variant="standard" fullWidth sx={{ marginBottom: "20px" }}>
          <InputLabel htmlFor="course">Courses</InputLabel>
          <Select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <MenuItem value="">Select Course</MenuItem>
            {[
              "Basic Programming",
              "C",
              "C++",
              "ReactJs",
              "MERN stack",
              "Software Testing-Manual",
              "Software Testing-Automation",
              "Digital Marketing",
              "Python Django",
              "Cyber Security",
              "Java Full Stack Development",
              "Cloud Computing",
              "MEAN Stack",
              "Angular",
              "CCNA/CCNP",
              "Spoken English",
              "Other",
            ].map((course, index) => (
              <MenuItem key={index} value={course}>
                {course}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </FormGroup>

      <SectionHeading>Documents Required</SectionHeading>
      <FormGroup sx={{ marginBottom: "20px" }}>
      <InputLabel htmlFor="resume">Resume</InputLabel>
        <FormControlWithMargin fullWidth>
          <Input
            id="resume"
            name="resume"
            type="file"
            onChange={handleChange}
            required
          />
        </FormControlWithMargin>
        <InputLabel htmlFor="adharCard">Adhar Card</InputLabel>
        <FormControlWithMargin fullWidth>
          <Input
            id="adharCard"
            name="adharCard"
            type="file"
            onChange={handleChange}
            required
          />
        </FormControlWithMargin>
        <InputLabel htmlFor="photoDoc">Photo</InputLabel>
        <FormControlWithMargin fullWidth>
            <Input
            id="photoDoc"
            name="photoDoc"
            type="file"
            onChange={handleChange}
            required
          />
        </FormControlWithMargin>
        <InputLabel htmlFor="panCard">Pancard</InputLabel>
        <FormControlWithMargin fullWidth>
          <Input
            id="panCard"
            name="panCard"
            type="file"
            onChange={handleChange}
            required
          />
        </FormControlWithMargin>
        <InputLabel htmlFor="digitalSignature">Digital Signature</InputLabel>
        <FormControlWithMargin fullWidth>
          
          <Input
            id="digitalSignature"
            name="digitalSignature"
            type="file"
            onChange={handleChange}
            required
          />
        </FormControlWithMargin>
      </FormGroup>
      <FormControlLabel
        control={<Checkbox />}
        label="I agree to all terms and conditions*"
        sx={{ marginBottom: "10px" }}
        required
      />
      <FormControlLabel
        control={<Checkbox />}
        label="I would like to receive notification from Hematite for any promotional offers or updates."
        required
      />
      <Button type="submit" variant="contained" color="primary" onClick={()=>handleSubmit()} fullWidth>
        Submit
      </Button>
    </StyledForm>
  );
};

export default StudentEnrollment;
