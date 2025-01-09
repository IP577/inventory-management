import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleView } from "../features/inventory/inventorySlice";
import { Switch, FormControlLabel } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import "../styles/Navbar.css";

const Navbar = () => {
  const view = useSelector((state) => state.inventory.view);
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
                checked={view !== "admin"}
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
        <section className="logout-icon">
          <LogoutIcon />
        </section>
      </header>
    </nav>
  );
};

export default Navbar;
