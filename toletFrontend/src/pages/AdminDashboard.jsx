import * as React from "react";
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
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Destination2 from "../components/admin/rooms/Destination";
import Profile from "../components/admin/profile/Profile";
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

function AdminDashboard(props) {
  const navigate=useNavigate()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [tab, setTab] = React.useState("Rents");
  const [user, setUser] = React.useState();
  React.useEffect(() => {
    const newUser = JSON.parse(localStorage.getItem("user"));
    if (newUser) {
      setUser(newUser);
    }
    else {
      navigate("/login")
    }
  }, [navigate]); 

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem("user")
    navigate("/")
  };

  const tabmanage = (text) => {
    switch (text) {
      case "Rents":
        return <Destination2 />;

      case "Profile":
        return <Profile />;

      default:
        return <Destination2 />;
    }
  };

  const drawer = (
    <div>
      {/* toast container
       */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Toolbar>
        <div className="flex items-center gap-2 ">
          <img
            className="w-10 h-10 rounded-[50%]"
            src={`https://ui-avatars.com/api/?name=${user?.email}&background=9935F9&color=fff`}
            alt=""
          />
          <div>
            <p className="font-[600] ">{user?.email}</p>
          </div>
        </div>
      </Toolbar>

      <Divider />
      <List>
        {["Rents", "Profile"].map((text, index) => (
          <ListItem key={text} disablePadding onClick={() => setTab(text)}>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <ManageHistoryIcon /> : <Person2Icon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
          <ListItem disablePadding onClick={() => navigate("/")}>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Go Home"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={handleLogout}>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={"Log Out"} />
            </ListItemButton>
          </ListItem>

      </List>
      {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          display: { xs: "block", sm: "none" },
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
          {/* <Typography variant="h6" noWrap component="div">
            Admin Control
          </Typography> */}

          <p className="font-[600] ">{user?.email}</p>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          backgroundColor: "blue",
        }}
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
          className="temp"
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
          className="temp"
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
        {/* <Toolbar />  */}

        {tabmanage(tab)}
      </Box>
    </Box>
  );
}

AdminDashboard.propTypes = {
  window: PropTypes.func,
};

export default AdminDashboard;
