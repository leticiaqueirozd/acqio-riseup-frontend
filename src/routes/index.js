import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Pagamento from "../pages/pagamento";

export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/pagamento" element={<Pagamento />} />
      </Routes>
    </Router>
  );
}