import Header from '../components/Header'
import NavigationMenu from '../components/NavigationMenu'
import ReportCard from '../components/ReportCard'

const AdminDashboard = () => {
  const navigationLinks = [
    { path: '/admin-config-loterias', label: 'Configuración' },
    { path: '/admin-gestion-ventas-pagos', label: 'Ventas y Pagos' },
    { path: '/admin-reportes-balance', label: 'Reportes' },
    { path: '/glosario-ayuda', label: 'Ayuda' },
  ]
  
  return (
    <div className="min-h-screen bg-gray-100">
      <Header user="Administrador" extraInfo="Caja Inicial: $1500" />
      <NavigationMenu links={navigationLinks} />
      <div className="p-4">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <ReportCard title="Balance General" value="$5000" />
          <ReportCard title="Capacidad de Biles" value="100" />
          <ReportCard title="Ventas Totales" value="$2000" />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p>El administrador puede actuar como vendedor ingresando su número para registrar ventas.</p>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
