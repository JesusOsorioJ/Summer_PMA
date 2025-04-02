const LotterySelection = ({ lotteries, selected, onSelect }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2">Seleccione Lotería</label>
      <select value={selected} onChange={(e) => onSelect(e.target.value)} className="w-full border border-gray-300 p-2 rounded">
        {lotteries.map(lottery => (
          <option key={lottery.id} value={lottery.id}>
            {lottery.name} ({lottery.horario})
          </option>
        ))}
      </select>
    </div>
  )
}

export default LotterySelection
