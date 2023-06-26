import React from "react";

// MUI imports //
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HouseIcon from "@mui/icons-material/House";
import TimelineIcon from "@mui/icons-material/Timeline";
import SettingsIcon from "@mui/icons-material/Settings";

function Footer(props) {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HouseIcon />} />
        <BottomNavigationAction label="Stats" icon={<TimelineIcon />} />
        <BottomNavigationAction label="Options" icon={<SettingsIcon />} />
      </BottomNavigation>
    </Box>
  );
}

export default Footer;
