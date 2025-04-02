import React, { useState } from 'react'

const TicketList = ({ tickets }) => {
  const [expandedTicket, setExpandedTicket] = useState(null)

  const toggleDetails = (ticketId) => {
    setExpandedTicket(expandedTicket === ticketId ? null : ticketId)
  }

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="border px-4 py-2">Fecha</th>
          <th className="border px-4 py-2">Tipo</th>
          <th className="border px-4 py-2">Números</th>
          <th className="border px-4 py-2">Monto</th>
          <th className="border px-4 py-2">Estado</th>
          <th className="border px-4 py-2">Acción</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((ticket) => (
          <React.Fragment key={ticket.id}>
            <tr onClick={() => toggleDetails(ticket.id)} className="cursor-pointer">
              <td className="border px-4 py-2">{ticket.date}</td>
              <td className="border px-4 py-2">{ticket.type}</td>
              <td className="border px-4 py-2">{ticket.numbers}</td>
              <td className="border px-4 py-2">{ticket.amount}</td>
              <td className="border px-4 py-2">{ticket.status}</td>
              <td className="border px-4 py-2">
                <button className="bg-red-500 text-white p-1 rounded">Eliminar</button>
              </td>
            </tr>
            {expandedTicket === ticket.id && (
              <tr>
                <td colSpan="6" className="border px-4 py-2 bg-gray-50">
                  {/* Detalle interactivo del ticket */}
                  <p><strong>Detalle:</strong> {ticket.detail}</p>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  )
}

export default TicketList
