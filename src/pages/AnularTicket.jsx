import { useState } from 'react'
import Header from '../components/Header'
import NavigationMenu from '../components/NavigationMenu'
import Modal from '../components/Modal'

const AnularTicket = () => {
  const navigationLinks = [
    { path: '/vendor-dashboard', label: 'Dashboard' },
    { path: '/historial-tickets', label: 'Historial' },
  ]
  
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAnular = () => {
    // Simulación de anulación
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Header user="Vendedor #123" extraInfo="Anular Ticket" />
      <NavigationMenu links={navigationLinks} />
      <div className="bg-white p-4 rounded shadow text-center">
        <p>Seleccione el ticket a anular (solo si tiene menos de 5 minutos)</p>
        <button onClick={handleAnular} className="bg-yellow-500 text-white p-2 rounded mt-4">
          Anular Ticket #001
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>Ticket anulado. Retroalimentación visual aquí.</p>
      </Modal>
    </div>
  )
}

export default AnularTicket
