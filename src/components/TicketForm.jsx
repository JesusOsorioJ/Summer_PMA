import { useState } from 'react'
import LotterySelection from './LotterySelection'

const TicketForm = () => {
  const [lotteryType, setLotteryType] = useState('chance')
  const [saleType, setSaleType] = useState('Straight')
  const [number, setNumber] = useState('')
  const [amount, setAmount] = useState('')
  const [step, setStep] = useState(1)

  const lotteries = [
    { id: 'chance', name: 'Chance', horario: '10:00-18:00' },
    { id: 'billete', name: 'Billete', horario: '11:00-19:00' },
    // Otros tipos de lotería según sea necesario...
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (step === 1) {
      // Validación y transición al Paso 2 (confirmación y recálculo)
      setStep(2)
    } else {
      // Confirmación final (solo maquetación)
      alert('Ticket registrado')
      setStep(1)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <LotterySelection lotteries={lotteries} selected={lotteryType} onSelect={setLotteryType} />

      {/* Paso 1: Ingreso inicial */}
      {step === 1 && (
        <>
          <div className="mb-4">
            <label className="block mb-2">Número a Vender (campo amarillo)</label>
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
          </div>
          <div className="mb-4">
            <label className="block mb-2">Modalidad de Venta</label>
            <select value={saleType} onChange={(e) => setSaleType(e.target.value)} className="w-full border border-gray-300 p-2 rounded">
              <option value="Straight">Straight</option>
              <option value="Box">Box</option>
              <option value="Combo">Combo</option>
            </select>
          </div>
        </>
      )}

      {/* Paso 2: Confirmación y recálculo */}
      {step === 2 && (
        <div className="mb-4">
          <p className="mb-2">Confirmación y recálculo automático:</p>
          <p>Tipo de Lotería: {lotteryType}</p>
          <p>Número a Comprar: {number} | Monto: {amount}</p>
          <p>N° de Serie del Ticket: 00123</p>
          <p>Detalles adicionales: CR Mediodía, Dir, etc.</p>
        </div>
      )}

      <div className="mb-4">
        <div className="bg-gray-200 p-2 rounded text-center">
          Tiempo restante: 8:00 minutos
        </div>
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        {step === 1 ? 'Siguiente' : 'Confirmar Venta'}
      </button>
    </form>
  )
}

export default TicketForm
