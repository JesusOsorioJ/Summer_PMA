
const ReportCard = ({ title, value }) => {
  return (
    <div className="bg-green-100 p-4 rounded">
      <p className="font-bold">{title}</p>
      <p>{value}</p>
    </div>
  )
}

export default ReportCard
