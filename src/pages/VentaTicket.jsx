import Header from '../components/Header'
import Layout from '../components/Layout'
import NavigationMenu from '../components/NavigationMenu'
import TicketForm from '../components/TicketForm'

const VentaTicket = () => {
  const navigationLinks = [
    { path: '/vendor-dashboard', label: 'Dashboard' },
    { path: '/historial-tickets', label: 'Historial' },
  ]
  
  return (
    <Layout className="min-h-screen bg-gray-100 p-4" view="VentaTicket">
      <Header user="Vendedor #123" extraInfo="Venta de Ticket" />
      <NavigationMenu links={navigationLinks} />
      <TicketForm />
    </Layout>
  )
}

export default VentaTicket
