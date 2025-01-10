import React from "react";
import { useSelector } from "react-redux";

import Navbar from "./components/Navbar";
import InventoryView from "./features/inventory/InventoryView";
import "./styles/App.css";

function App() {
  const isAdmin = useSelector((state) => state.inventory.view === "admin");

  return (
    <>
      <Navbar isAdmin={isAdmin} />
      <InventoryView isAdmin={isAdmin} />
    </>
  );
}

export default App;
