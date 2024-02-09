import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from '@mui/material/ListItemText';
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
// import Typography from '@mui/material/Typography';
import { Link, Outlet, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import data from "../../../shared/constant/imagesData";
import "../container/dashboard.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import EventNoteIcon from '@mui/icons-material/EventNote';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const drawerWidth = 250;

const DashBoard = (props) => {
  const nav = useNavigate();
  // const user= JSON.parse(sessionStorage.getItem("user"));
  let loginUser = sessionStorage.getItem("user");
  // console.log(sessionStorage.getItem("user"))
  const [userName, setUserName] = React.useState("");
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user && !userName) {
      setUserName(user);
    }
  }, [userName]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isLogin = !!sessionStorage.getItem("user");
  const handleLogout = () => {
    if (isLogin) {
      sessionStorage.removeItem("user");

      nav("/");
    }
  };

  const drawer = (
    <div className="drawer">
      <div>
        <Toolbar />
        <Divider />
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <Link className="btn text-white text-xl" to="student">
                <PersonIcon />
                &nbsp; &nbsp;Student
                </Link>
              </ListItemIcon>
              <br></br>
            </ListItemButton>
          </ListItem>
          
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <Link className="btn text-white" to="trainer">
                <SupervisorAccountIcon />
                &nbsp; &nbsp; Trainer
                </Link>
              </ListItemIcon>
              <br></br>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <Link className="btn text-white" to="branch">
                <LocationCityIcon />
                &nbsp; &nbsp; Branch
                </Link>
              </ListItemIcon>
              <br></br>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <Link className="btn text-white" to="course">
                <SchoolIcon />
                &nbsp; &nbsp;Courses
                </Link>
              </ListItemIcon>
              <br></br>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <Link className="btn text-white" to="batch">
                <GroupIcon />
                &nbsp; &nbsp; Batches
                </Link>
              </ListItemIcon>
              <br></br>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <Link to = "studentatte" className="btn text-white">
                <EventNoteIcon />
                &nbsp; &nbsp; Attendance
                </Link>
              </ListItemIcon>
              <br></br>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <Link to = "holiday" className="btn text-white">
                <BeachAccessIcon />
                &nbsp; &nbsp; Holidays
                </Link>
              </ListItemIcon>
              <br></br>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <Link to = "leave" className="btn text-white">
                <EmojiPeopleIcon />
                &nbsp; &nbsp; Leaves
                </Link>
              </ListItemIcon>
              <br></br>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <Link className="btn text-white" to="trainerleaves">
                <PeopleAltIcon />
                &nbsp; &nbsp; Trainer Leaves
                </Link>
              </ListItemIcon>
              <br></br>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <Link to="user" className="btn text-white">
                <AccountCircleIcon />
                &nbsp; &nbsp; User
                </Link>
              </ListItemIcon>
              <br></br>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </div>
      {/* <Outlet/> */}
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              <img className="logo" src={data.logo} alt="logo" />
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              className="mx-5 hem"
            >
              Hematite Infotech
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              className="mx-5 hem"
            >
              <h5>Welcome, {loginUser}!</h5>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleLogout}
                style={{ position: "fixed", top: 10, right: 10 }}
              >
                Logout
              </button>
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />

          {/* <CarouselDash/> */}
        </Box>
      </Box>
      <Outlet />
    </div>
  );
};

DashBoard.propTypes = {
  window: PropTypes.func,
};

// export default DashBoard;
export default DashBoard;
