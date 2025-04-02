import Header from '../components/Header'
import NavigationMenu from '../components/NavigationMenu'

const AdminGestionVentasPagos = () => {
  const navigationLinks = [
    { path: '/admin-dashboard', label: 'Dashboard' },
    { path: '/admin-registro-transacciones', label: 'Transacciones' },
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Header user="Administrador" extraInfo="Gestión de Ventas y Pagos" />
      <NavigationMenu links={navigationLinks} />
      <div className="bg-white p-4 rounded shadow">
        <p>Registro diario de pagos y cobros. Se muestra el neto (ventas - % aplicado) y el detalle de cada operación.</p>
      </div>
    </div>
  )
}

export default AdminGestionVentasPagos
