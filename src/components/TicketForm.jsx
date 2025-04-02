import { useState } from 'react'

const TicketForm = () => {
  const [lotteryType, setLotteryType] = useState('Chance')
  const [saleType, setSaleType] = useState('Straight')
  const [number, setNumber] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Lógica para enviar venta (solo maquetación)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <div className="mb-4">
        <label className="block mb-2">Tipo de Lotería</label>
        <select
          value={lotteryType}
          onChange={(e) => setLotteryType(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        >
          <option value="Chance">Chance (2 dígitos)</option>
          <option value="Billete">Billete (4 dígitos)</option>
          <option value="Directo">Directo (2 dígitos)</option>
          <option value="Pallet">Pallet (combinaciones de 2)</option>
          <option value="Tripleta">Tripleta (combinaciones de 3)</option>
        </select>
      </div>

      {/* Selección de tipo de venta */}
      <div className="mb-4">
        <label className="block mb-2">Tipo de Venta</label>
        <select
          value={saleType}
          onChange={(e) => setSaleType(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        >
          <option value="Straight">Straight</option>
          <option value="Box">Box</option>
          <option value="Combo">Combo</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Número a vender</label>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Ingrese número"
          className="w-full border border-yellow-500 p-2 rounded bg-yellow-50"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Monto</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Monto"
          className="w-full border border-gray-300 p-2 rounded"
        />
        <p className="text-sm text-gray-500 mt-1">
          Recalculo automático (ej: resta porcentaje y calcula ganancia)
        </p>
      </div>
      <div className="mb-4">
        <div className="bg-gray-200 p-2 rounded text-center">
          Tiempo restante para ingreso de números: 8:00 minutos
        </div>
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        Confirmar Venta
      </button>
    </form>
  )
}

export default TicketForm
