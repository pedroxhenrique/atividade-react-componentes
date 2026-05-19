function Estatisticas({ destinos }) {
  const totalDestinos = destinos.length
  const regioesUnicas = [...new Set(destinos.map(d => d.regiao))].length

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '40px',
      marginBottom: '32px',
      paddingBottom: '24px',
      borderBottom: '1px solid rgba(16, 185, 129, 0.2)'
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontSize: '28px',
          color: '#34d399',
          fontWeight: '600'
        }}>
          {totalDestinos}
        </div>
        <div style={{
          fontSize: '11px',
          color: '#6ee7b7',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          fontFamily: 'sans-serif'
        }}>
          Destinos
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontSize: '28px',
          color: '#34d399',
          fontWeight: '600'
        }}>
          {regioesUnicas}
        </div>
        <div style={{
          fontSize: '11px',
          color: '#6ee7b7',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          fontFamily: 'sans-serif'
        }}>
          Regioes
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontSize: '28px',
          color: '#34d399',
          fontWeight: '600'
        }}>
          1
        </div>
        <div style={{
          fontSize: '11px',
          color: '#6ee7b7',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          fontFamily: 'sans-serif'
        }}>
          Estado
        </div>
      </div>
    </div>
  )
}

export default Estatisticas