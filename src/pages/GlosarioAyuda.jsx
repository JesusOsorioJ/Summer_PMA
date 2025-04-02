import Header from '../components/Header'
import Layout from '../components/Layout'
import NavigationMenu from '../components/NavigationMenu'

const GlosarioAyuda = () => {
  const navigationLinks = [
    { path: '/admin-dashboard', label: 'Dashboard' },
    { path: '/admin-reportes-balance', label: 'Reportes' },
  ]
  
  return (
    <Layout className="min-h-screen bg-gray-100 p-4" view="GlosarioAyuda">
      <Header user="Administrador" extraInfo="Glosario y Ayuda" />
      <NavigationMenu links={navigationLinks} />
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Glosario</h2>
        <ul className="list-disc pl-6">
          <li><strong>Bolsa/Backup:</strong> Fondos en el banco.</li>
          <li><strong>Biles/Chance:</strong> Números de 2 cifras.</li>
          <li><strong>Billete:</strong> Número de 4 cifras.</li>
          <li><strong>Directo, Pallet, Tripleta:</strong> Modalidades de apuesta basadas en combinaciones de 2 o 3 números.</li>
          <li><strong>Balance y Porcentaje:</strong> Indicadores que muestran lo vendido, lo que se debe entregar y la ganancia.</li>
        </ul>
        <h2 className="text-xl font-bold mt-6 mb-4">Ayuda</h2>
        <p>Instrucciones y contexto para cada módulo se muestran de forma contextual en la aplicación.</p>
      </div>
    </Layout>
  )
}

export default GlosarioAyuda
