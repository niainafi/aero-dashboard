import './App.css'
import Graph from './components/traitement/Bar-chart'
import { Toaster } from 'sonner';
function App() {


  return (
    <main className=''>
    <header className="bg-blue-900 p-4 shadow-md flex justify-between items-center">
  <h1 className="text-white text-2xl font-bold">Tableau de Bord</h1>
  <div className="flex space-x-4">
    
  </div>
</header>
     <Graph/>
     <Toaster position='top-right' richColors />
    </main>
  )
}

export default App
