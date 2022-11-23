import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import ManageServices from "./components/ManageServices";
import Sales from "./components/Sales";
import SalesSummary from "./components/SalesSummary";
import NavMenu from "./components/NavMenu";

function App() {
  return (
    <>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/manage-services" element={<ManageServices />} />
        <Route path="/sales-summary" element={<SalesSummary />} />
      </Routes>
    </>
  );
}

export default App;
