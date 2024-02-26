import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Resto del contenido del Dashboard */}
      <button onClick={() => navigate("/")}>Volver a Login</button>
    </div>
  );
};

export default Dashboard;
