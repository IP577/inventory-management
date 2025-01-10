import React from "react";
import "../styles/StatsCard.css";

const StatsCard = ({ title, value, Icon }) => {
  return (
    <div className="stats-card">
      <Icon fontSize="large" />
      <div className="content">
        <h2>{title}</h2>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;
