function Cabecalho() {
  return (
    <header style={{
      textAlign: 'center',
      marginBottom: '32px',
      paddingBottom: '24px',
      borderBottom: '1px solid rgba(16, 185, 129, 0.2)'
    }}>
      <p style={{
        fontSize: '13px',
        color: '#6ee7b7',
        margin: 0,
        letterSpacing: '3px',
        textTransform: 'uppercase',
        fontFamily: 'sans-serif'
      }}>
        Meus Destinos dos Sonhos
      </p>
      <h1 style={{
        fontSize: '36px',
        color: '#ecfdf5',
        margin: '8px 0 0',
        fontWeight: '400',
        letterSpacing: '1px'
      }}>
        🌿 Bucket List Gaucha
      </h1>
    </header>
  )
}

export default Cabecalho