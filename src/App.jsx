import Cabecalho from './components/Cabecalho'
import Estatisticas from './components/Estatisticas'
import ListaDestinos from './components/ListaDestinos'
import Rodape from './components/Rodape'
import { destinos } from './components/destinos'
import './App.css'

function App() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(135deg, #064e3b 0%, #022c22 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'Georgia, serif',
      overflow: 'auto',
      boxSizing: 'border-box'
    }}>
      <div style={{
        background: 'rgba(0, 0, 0, 0.2)',
        border: '1px solid rgba(16, 185, 129, 0.15)',
        borderRadius: '20px',
        padding: '40px',
        maxWidth: '800px',
        width: '100%',
        color: '#d1fae5',
        boxShadow: '0 20px 60px rgba(0,0,0,0.4)'
      }}>
        <Cabecalho />
        <Estatisticas destinos={destinos} />
        <ListaDestinos destinos={destinos} />
        <Rodape />
      </div>
    </div>
  )
}

export default App