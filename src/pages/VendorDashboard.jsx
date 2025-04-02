import Header from '../components/Header'
import CountdownTimer from '../components/CountdownTimer'
import NavigationMenu from '../components/NavigationMenu'
import ReportCard from '../components/ReportCard'
import Layout from '../components/Layout'

const VendorDashboard = () => {
  const navigationLinks = [
    { path: '/venta-ticket', label: 'Venta' },
    { path: '/historial-tickets', label: 'Historial' },
    { path: '/anular-ticket', label: 'Anular' },
    { path: '/resultados-ganadores', label: 'Resultados' },
    { path: '/estado-cuenta', label: 'Estado de Cuenta' },
  ]

  return (
    <Layout className="min-h-screen bg-gray-100" view="VendorDashboard">
      <Header
        user="Vendedor #123"
        extraInfo={<CountdownTimer initialTime={7200} />}
      />
      <NavigationMenu links={navigationLinks} />
      <div className="p-4">
        <div className="grid grid-cols-4 gap-4 mb-4">
          <ReportCard title="Balance" value="$300" />
          <ReportCard title="Vendido" value="$500" />
          <ReportCard title="Porcentaje" value="10%" />
          <ReportCard title="Disponible" value="$200" />
        </div>
        <div className="bg-white p-4 rounded shadow mb-4">
          <p className="font-bold">Información Rápida:</p>
          <p>Tipo de Lotería: Chance</p>
          <p>N° de Serie del Ticket: 00123</p>
        </div>
      </div>
    </Layout>
  )
}

export default VendorDashboard
