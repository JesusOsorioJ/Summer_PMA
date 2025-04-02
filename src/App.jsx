import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VendorDashboard from "./pages/VendorDashboard";
import VentaTicket from "./pages/VentaTicket";
import HistorialTickets from "./pages/HistorialTickets";
import AnularTicket from "./pages/AnularTicket";
import ResultadosGanadores from "./pages/ResultadosGanadores";
import EstadoCuenta from "./pages/EstadoCuenta";
import AdminDashboard from "./pages/AdminDashboard";
import AdminConfigLoterias from "./pages/AdminConfigLoterias";
import AdminGestionVentasPagos from "./pages/AdminGestionVentasPagos";
import AdminReportesBalance from "./pages/AdminReportesBalance";
import GlosarioAyuda from "./pages/GlosarioAyuda";
import AdminRegistroTransacciones from "./pages/AdminRegistroTransacciones";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rutas para Vendedor */}
        <Route path="*" element={<VendorDashboard />} />
        <Route path="/vendor-dashboard" element={<VendorDashboard />} />
        <Route path="/venta-ticket" element={<VentaTicket />} />
        <Route path="/historial-tickets" element={<HistorialTickets />} />
        <Route path="/anular-ticket" element={<AnularTicket />} />
        <Route path="/resultados-ganadores" element={<ResultadosGanadores />} />
        <Route path="/estado-cuenta" element={<EstadoCuenta />} />

        {/* Rutas para Administrador */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-config-loterias" element={<AdminConfigLoterias />} />
        <Route path="/admin-gestion-ventas-pagos" element={<AdminGestionVentasPagos />} />
        <Route path="/admin-reportes-balance" element={<AdminReportesBalance />} />
        <Route path="/glosario-ayuda" element={<GlosarioAyuda />} />
        <Route path="/admin-registro-transacciones" element={<AdminRegistroTransacciones />} />

      </Routes>
    </Router>
  );
}

export default App;
