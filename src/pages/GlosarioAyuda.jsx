import Header from '../components/Header'
import NavigationMenu from '../components/NavigationMenu'

const GlosarioAyuda = () => {
  const navigationLinks = [
    { path: '/admin-dashboard', label: 'Dashboard' },
    { path: '/admin-reportes-balance', label: 'Reportes' },
  ]
  
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Header user="Administrador" extraInfo="Glosario y Ayuda" />
      <NavigationMenu links={navigationLinks} />
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Glosario</h2>
        <ul className="list-disc pl-6">
          <li><strong>Bolsa/Backup:</strong> Fondos en el banco como colchón.</li>
          <li><strong>Biles/Chance:</strong> Número de 2 cifras.</li>
          <li><strong>Billete:</strong> Compuesto por 4 números.</li>
          <li><strong>Directo:</strong> Número de 2 cifras.</li>
          <li><strong>Pallet:</strong> Combinaciones de 2 números.</li>
          <li><strong>Tripleta:</strong> Combinaciones de 3 números.</li>
        </ul>
        <h2 className="text-xl font-bold mt-6 mb-4">Ayuda</h2>
        <p>Instrucciones y contexto para cada módulo se muestran de forma contextual en la aplicación.</p>
      </div>
    </div>
  )
}

export default GlosarioAyuda
