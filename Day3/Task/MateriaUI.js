import React, { useState } from "react";
import { Button, ButtonGroup, Checkbox,Radio,Slider,Select,MenuItem,TextField,Box,Container,Grid } from "@mui/material";
import Delete from "@mui/material/Icon";

const MateriaUI = () => {
  const [branch, setBranch] = useState([]);
  const getValue = (e) => {
    let data = branch;
    data.push(e.target.value);
    console.log(data);
  };

  const myFunction = () => {
    alert("outLined button clicked");
  };
  const selectGender=(e) => {
    alert("You are " + (e.target.value));
  }
const mark=[
    {
        value:0,
        label:"min"
    },
    {
        value:100,
        label:"max"
    }
]
const[course,setCourse]=useState(1)
const updateCourse=(e,val)=>{
    alert("you selected course"+(e.target.val))
    setCourse(e.target.val)
}
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button color="secondary" variant="contained">
        Contained
      </Button>
      <Button variant="outlined" onClick={myFunction} endIcon={<Delete />}>
        Outlined
      </Button>
      <br></br>
      <br></br>
      <ButtonGroup variant="contained" color="success" orientation="vertical">
        <Button>one</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <br></br>
      <br></br>
      <h2>Select your Branch</h2>
      <Checkbox
        value="Comp"
        onChange={(e) => {
          getValue(e);
        }}
      />
       <Checkbox
        value="Civil"
        onChange={(e) => {
          getValue(e);
        }}
      />
       <Checkbox
        value="E &TC"
        onChange={(e) => {
          getValue(e);
        }}
      />
      <h2>Select your Gender</h2>
      <div>
     <span>Male</span>
      <Radio value="male" color="primary" onChange={selectGender}/>
      </div>
      <div>
     <span>Female</span>
      <Radio value="female"onChange={selectGender}/>
      </div>
      <h3>Slider</h3>
      <div style={{width:300,margin:40}}>
        <Slider
        color="primary"
        defaultValue={100}
        valueLabelDisplay="auto"
        step={10}
        max={100}
        marks={mark}
        />
      </div>
     <h3>Select Course using dropdown</h3>
     <Select 
     value={course} 
     displayEmpty
     onChange={updateCourse}
     >
        <MenuItem value="">Select Any Course</MenuItem>
        <MenuItem value={1}>Node</MenuItem>
        <MenuItem value={2}>PHP</MenuItem>
        <MenuItem value={3}>Java</MenuItem>
        <MenuItem value={4}>Python</MenuItem>
        </Select>
        <hr></hr>
        <h3>TextField</h3>
        <TextField label="Enter Name"/>
        <TextField label="Enter Password" type="password" variant="outlined"/>
        <h3>Box-Button</h3>
        <Box component="span" style={{color:'red'}} clone m={20} p={10}>
            <Button>Hello</Button>
        </Box>
        <h3>Container Layout As per Screen size of device for screen resolution</h3>
        <Container maxWidth="xs" style={{backgroundColor:'skyblue'}}>
            <h2>Container||Layout</h2>
        </Container>
        <Container maxWidth="sm" style={{backgroundColor:'skyblue'}}>
            <h2>Container||Layout</h2>
        </Container>
        <Container maxWidth="md" style={{backgroundColor:'skyblue'}}>
            <h2>Container||Layout</h2>
        </Container>
        <Container maxWidth="lg" style={{backgroundColor:'skyblue'}}>
            <h2>Container||Layout</h2>
        </Container>
        <h2>As per screen it adjust</h2>
        <Container fixed style={{backgroundColor:'skyblue'}}>
            <h2>Container||Layout</h2>
        </Container>
        <h3>Grid for Responsive Layout it adpots to screen size and orientation</h3>
        <p>It have 2 things-1)spacing2)grid stystem
            1)Basic Grid:
            -the column widths apply at all breakpoints(ie.xs and up)
            -
            each grid contain 12 block(you can make 1 -12block or two 6-6 =12 block or 4-4 blocks=12)
            
            -if mobile screen size is small then it goes to below to each other to see page attarative.
            -By default it take size1
            -If grid is grater tahn 12 it goes to next line(row) 
            <strong>xs-small mobile</strong>
            <strong>sm-large mobile,Tab</strong>
            <strong>md-small laptop,old laptop-screen resultion low</strong>
            <strong>lgHigh screen resln ,laptop,pc-1280px works upto that</strong>
        </p>
        <Grid container>
            <Grid>
            <h2 style={{backgroundColor:'green'}}>Block1</h2>
            <p>It take one grid only</p>
            </Grid>
            
        </Grid>
        <Grid container>
            <Grid item lg={12}>
            <h2 style={{backgroundColor:'green'}}>Block2</h2>
            <p>It take 12 grids</p>
            </Grid>
            
        </Grid>
        <Grid container spacing={2}>
        <Grid item lg={6}>
            <h2 style={{backgroundColor:'pink'}}>Block2</h2>
            <p>It take 12 grids</p>
            </Grid>
            <Grid item lg={6}>
            <h2 style={{backgroundColor:'pink'}}>Block2</h2>
            <p>It take 12 grids</p>
            </Grid>
            
        </Grid>
    </div>
   
  );
};

export default MateriaUI;
