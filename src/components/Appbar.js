import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import AcedemicRegistration from './AcedemicRegistration';
import StudentAttendence from './StudentAttendence'; 
import StudentsCourses from './StudentCourses';
import StudentCounselor from './StudentCounselor';
import StudentClubs from './StudentClubs';
import StudentExam from './StudentExam';
import StudentFeedback from './StudentFeedback';
import StudentPayment from './StudentPayment';
import StudentHostel from './StudentHostel';
import HallTicket from './Hallticket';
import Library from './Library';
import Cgpa from './Cgpa';
import Profile from './Profile';
import Transportation from './Transportation';
import TimeTable from './TimeTable';





const pages = ['Signin', 'Signup', 'Home', 'Show'];
const settings = ['Profile', 'Logout'];
const sideMenuItems = [
  'Academic Registration',
  'Attendance Register', 
  'Courses',
  'Counselling Diary',
  'Clubs/Activities',
  'Exam Section',
  'Feedback',
  'Fee Payments',
  'Hostel Management',
  'Hallticket',
  'Library',
  'My CGPA',
  'Profile',
  'My Transportation',
  'Time Tables',
];

function ResponsiveAppBar({ store }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const isLoggedIn = localStorage.getItem('name') !== null;
  const [currentPage, setCurrentPage] = React.useState("Home");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    store.dispatch({ "type": "page", "data": event.currentTarget.getAttribute("cp") });
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    localStorage.setItem("name", null);
    localStorage.setItem("role", 0);
    store.dispatch({ "type": "page", "data": "Signin" });
    setAnchorElUser(null);
  };

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const handleDrawerItemClick = (item) => {
    if (item === "Academic Registration") {
      setCurrentPage("AcedemicRegistration");
    } 
    else if (item === "Attendance Register") {
      setCurrentPage("StudentAttendence");  
    }
    else if(item === "Courses"){
      setCurrentPage("StudentCourses");
    }
    else if(item == "Counselling Diary"){
      setCurrentPage("StudentCounselor");
    }
    else if(item == "Clubs/Activities"){
      setCurrentPage("StudentClubs");
    }
    else if(item == "Exam Section"){
      setCurrentPage("StudentExam");
    }
    else if(item == "Feedback"){
      setCurrentPage("StudentFeedback");
    }
    else if(item == "Fee Payments"){
      setCurrentPage("StudentPayment");
    }
    else if(item == "Hostel Management"){
      setCurrentPage("StudentHostel");
    }
    else if(item == "Hallticket"){
      setCurrentPage("Hallticket");
    }
    else if(item == "Library"){
      setCurrentPage("Library");
    }
    else if(item == "My CGPA"){
      setCurrentPage("Cgpa");
    }
    else if(item == "Profile"){
      setCurrentPage("Profile");
    }
    else if(item == "My Transportation"){
      setCurrentPage("Transportation");
    }
    else if(item == "Time Tables"){
      setCurrentPage("TimeTable");
    }
    toggleDrawer(false);
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case "AcedemicRegistration":
        return <AcedemicRegistration />;
      case "StudentAttendence":
        return <StudentAttendence/>; 
      case "StudentCourses":
        return <StudentsCourses />;
      case "StudentCounselor":
        return <StudentCounselor />;
      case "StudentClubs":
        return <StudentClubs />;   
      case "StudentExam":
        return <StudentExam />;
      case "StudentFeedback":
        return <StudentFeedback />;     
      case "StudentPayment":
        return <StudentPayment />;
      case "StudentHostel":
        return <StudentHostel />;   
      case "Hallticket":
        return <HallTicket />;
      case "Library":
        return <Library />;
      case "Cgpa":
        return <Cgpa />;
      case "Profile":
        return <Profile />;
      case "Transportation":
        return <Transportation />; 
      case "TimeTable":
        return <TimeTable />; 
      default:
        return null;
    }
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#000' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: 'flex', mr: 2 }}>
              <IconButton
                size="large"
                aria-label="open navigation menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => toggleDrawer(true)}
                color="inherit"
                disabled={!isLoggedIn}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  cp={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={localStorage.getItem("name")} src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {isLoggedIn && (
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => toggleDrawer(false)}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => toggleDrawer(false)}
            onKeyDown={() => toggleDrawer(false)}
          >
            <List>
              {sideMenuItems.map((item) => (
                <ListItem button key={item} onClick={() => handleDrawerItemClick(item)}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      )}

      {/* Render the page content based on the current page */}
      <div style={{ padding: '20px', color: 'black' }}>
        {renderPageContent()}
      </div>
    </div>
  );
}

export default ResponsiveAppBar;
