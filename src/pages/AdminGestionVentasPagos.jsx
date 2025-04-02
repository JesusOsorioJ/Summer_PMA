import Header from '../components/Header'
import Layout from '../components/Layout'
import NavigationMenu from '../components/NavigationMenu'

const AdminGestionVentasPagos = () => {
  const navigationLinks = [
    { path: '/admin-dashboard', label: 'Dashboard' },
    { path: '/admin-registro-transacciones', label: 'Transacciones' },
  ]

  return (
    <Layout className="min-h-screen bg-gray-100 p-4" view="AdminGestionVentasPagos">
      <Header user="Administrador" extraInfo="Gestión de Ventas y Pagos" />
      <NavigationMenu links={navigationLinks} />
      <div className="bg-white p-4 rounded shadow">
        <p>Registro diario de pagos y cobros. Se muestra el neto (ventas - % aplicado) y el detalle de cada operación.</p>
      </div>
    </Layout>
  )
}

export default AdminGestionVentasPagos
