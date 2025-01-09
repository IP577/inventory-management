import React from "react";
import Navbar from "./components/Navbar";
import InventoryView from "./features/inventory/InventoryView";
import { useSelector } from "react-redux";
import "./styles/App.css";

function App() {
  const view = useSelector((state) => state.inventory.view);

  return (
    <div>
      <Navbar />
      <h1>Inventory stats</h1>
      <InventoryView isAdmin={view === "admin"} />
    </div>
  );
}

export default App;
