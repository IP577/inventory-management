import React from "react";
import "../styles/StatsCard.css";

const StatsCard = ({ title, value, Icon }) => {
  return (
    <div className="stats-card">
      <div className="icon">
        <Icon fontSize="large" />
      </div>
      <div className="content">
        <h3
          style={{
            fontWeight: 200,
            fontSize: ".8rem",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontWeight: 800,
            fontSize: "2rem",
            marginTop: ".5rem",
          }}
        >
          {value}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
