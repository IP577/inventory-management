import React from "react";
import { useDispatch } from "react-redux";

import { toggleView } from "../features/inventory/inventorySlice";
import "../styles/Navbar.css";

import { Switch, FormControlLabel } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = ({ isAdmin }) => {
  const dispatch = useDispatch();

  const handleViewChange = () => {
    dispatch(toggleView());
  };

  return (
    <nav>
      <header className="app-header">
        <section className="view-toggle">
          <label>admin</label>
          <FormControlLabel
            control={
              <Switch
                checked={!isAdmin}
                onChange={handleViewChange}
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked": {
                    color: "#d8f854",
                  },
                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                    backgroundColor: "#d8f854",
                  },
                  "& .MuiSwitch-track": {
                    backgroundColor: "#f2f2f2",
                  },
                  "& .MuiSwitch-switchBase": {
                    color: "#f2f2f2",
                  },
                }}
              />
            }
            className="view-switch"
          />
          <label>user</label>
        </section>
        <section>
          <LogoutIcon />
        </section>
      </header>
      <h1>Inventory stats</h1>
    </nav>
  );
};

export default Navbar;
