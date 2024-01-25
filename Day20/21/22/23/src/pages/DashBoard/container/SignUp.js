import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { connect, useDispatch} from "react-redux";
import { addUserData } from "../Action";



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const SignUp = () => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!user.firstName || !user.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }

    if (!user.email || !user.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      newErrors.email = "Email is not valid";
    }

    if (!user.password || !user.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

const dispatch = useDispatch()
  
  const navigate = useNavigate();
  
  const [user,setUser]=useState({email:"",password:"",firstName:""})
  const onSign = (event) => {
    event.preventDefault();

    if (validateForm()) {
      dispatch(addUserData({
        email: user.email,
        password: user.password,
        firstName: user.firstName
      }));
      console.log(user)
      navigate("/signin");
    }
  };
  const inputchangeHnadler=(event)=>{
    const {name,value}=event.target;
    setUser({...user,[name]:value})
  }
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} >
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                     value={user.firstName}
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={inputchangeHnadler}
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={user.email}
                    onChange={inputchangeHnadler}
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={user.password}
                    onChange={inputchangeHnadler}
                    error={!!errors.password}
                    helperText={errors.password}
                    
                  />
                </Grid>
                
              </Grid>
              <Button onClick={onSign}
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              
            </Box>
          </Box>
          
        </Container>
      </ThemeProvider>
    </div>
  );
  
};
const mapStateToProps = (state) => ({
  UserList: state.userStore.user
});
//convert actions into props
const mapDispatchToProps = (dispatch) => ({
  addUserData: () => dispatch(addUserData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
// export default  SignUp;
