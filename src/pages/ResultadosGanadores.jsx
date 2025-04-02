import Header from '../components/Header'
import Layout from '../components/Layout'
import NavigationMenu from '../components/NavigationMenu'

const ResultadosGanadores = () => {
  const navigationLinks = [
    { path: '/vendor-dashboard', label: 'Dashboard' },
    { path: '/venta-ticket', label: 'Venta' },
  ]
  
  // Datos de ejemplo
  const resultados = [
    { id: 1, type: 'Chance', winningNumbers: '12', positions: '1ra', amount: '$10' },
    { id: 2, type: 'Billete', winningNumbers: '1234', positions: '2da', amount: '$20' },
  ]

  return (
    <Layout className="min-h-screen bg-gray-100 p-4" view="ResultadosGanadores">
      <Header user="Vendedor #123" extraInfo="Resultados y Ganadores" />
      <NavigationMenu links={navigationLinks} />
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Resultados del Día</h2>
        {resultados.map(result => (
          <div key={result.id} className="mb-4 p-2 border rounded">
            <p><strong>{result.type}</strong></p>
            <p>Números Ganadores: {result.winningNumbers}</p>
            <p>Posición: {result.positions}</p>
            <p>Monto Ganado: {result.amount}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default ResultadosGanadores
