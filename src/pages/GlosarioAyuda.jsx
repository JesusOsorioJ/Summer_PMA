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
          <li><strong>Biles/Chance:</strong> Definición y uso en el sistema.</li>
          <li><strong>Balance:</strong> Diferencia entre ventas, cobros y pagos.</li>
          <li><strong>Porcentaje:</strong> % de ganancia asignado a los vendedores.</li>
          <li><strong>Backup:</strong> Respaldo de información.</li>
        </ul>
        <h2 className="text-xl font-bold mt-6 mb-4">Ayuda</h2>
        <p>Instrucciones y contexto para cada módulo se muestran de forma contextual en la aplicación.</p>
      </div>
    </div>
  )
}

export default GlosarioAyuda
