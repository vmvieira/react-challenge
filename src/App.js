import React from "react";
import "./assets/output.css";
import "./assets/gradient.css";

import Navbar from "./components/Navbar";
import Grid from "./components/Grid";

const App = () => {
  const navHeader = { company: "Empresa A - Sala 210", user: "João Alves" };
  const navItems = ["Home", "Agendamentos", "Cadastros", "Report", "Sair"];

  return (
    <div className="flex h-screen w-screen">
      <Navbar navHeader={navHeader} navItems={navItems} />
      <Grid />
    </div>
  );
};

export default App;
