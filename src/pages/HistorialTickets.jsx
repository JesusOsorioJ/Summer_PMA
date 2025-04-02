import Header from '../components/Header'
import Layout from '../components/Layout'
import NavigationMenu from '../components/NavigationMenu'
import TicketList from '../components/TicketList'

const HistorialTickets = () => {
  const navigationLinks = [
    { path: '/vendor-dashboard', label: 'Dashboard' },
    { path: '/venta-ticket', label: 'Venta' },
  ]
  
  // Datos de ejemplo con propiedad "detail" para ampliar la información
  const tickets = [
    { id: 1, date: '2025-04-01', type: 'Chance', numbers: '12', amount: '$1.25', status: 'Vendido', detail: 'Ticket normal' },
    { id: 2, date: '2025-04-01', type: 'Billete', numbers: '1234', amount: '$2.50', status: 'Anulado', detail: 'Anulado por error' },
  ]

  return (
    <Layout className="min-h-screen bg-gray-100 p-4" view="HistorialTickets">
      <Header user="Vendedor #123" extraInfo="Historial de Tickets" />
      <NavigationMenu links={navigationLinks} />
      <div className="bg-white p-4 rounded shadow">
        <TicketList tickets={tickets} />
      </div>
    </Layout>
  )
}

export default HistorialTickets
