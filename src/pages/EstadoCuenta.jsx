import Header from '../components/Header'
import Layout from '../components/Layout'
import NavigationMenu from '../components/NavigationMenu'
import ReportCard from '../components/ReportCard'

const EstadoCuenta = () => {
  const navigationLinks = [
    { path: '/vendor-dashboard', label: 'Dashboard' },
    { path: '/venta-ticket', label: 'Venta' },
  ]
  
  // Datos de ejemplo
  const resumen = {
    totalEntrega: '$300',
    cobros: '$50',
    pagos: '$20',
  }

  return (
    <Layout className="min-h-screen bg-gray-100 p-4" view="EstadoCuenta">
      <Header user="Vendedor #123" extraInfo="Estado de Cuenta" />
      <NavigationMenu links={navigationLinks} />
      <div className="grid grid-cols-3 gap-4 mb-4">
        <ReportCard title="Total a Entregar" value={resumen.totalEntrega} />
        <ReportCard title="Cobros" value={resumen.cobros} />
        <ReportCard title="Pagos" value={resumen.pagos} />
      </div>
      <div className="bg-white p-4 rounded shadow">
        <p>Detalle del cierre del día y operaciones realizadas.</p>
      </div>
    </Layout>
  )
}

export default EstadoCuenta
