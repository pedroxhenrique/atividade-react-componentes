import CardDestino from './CardDestino'

function ListaDestinos({ destinos }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '20px'
    }}>
      {destinos.map(destino => (
        <CardDestino key={destino.id} destino={destino} />
      ))}
    </div>
  )
}

export default ListaDestinos