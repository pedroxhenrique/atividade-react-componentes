function CardDestino({ destino }) {
  return (
    <div style={{
      background: 'rgba(6, 78, 59, 0.4)',
      border: '1px solid rgba(16, 185, 129, 0.25)',
      borderRadius: '12px',
      padding: '24px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '-15px',
        right: '-15px',
        fontSize: '90px',
        opacity: 0.1
      }}>
        {destino.icone}
      </div>

      <span style={{
        display: 'inline-block',
        background: 'rgba(52, 211, 153, 0.2)',
        color: '#6ee7b7',
        padding: '4px 12px',
        borderRadius: '20px',
        fontSize: '10px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        marginBottom: '12px',
        fontFamily: 'sans-serif',
        fontWeight: '600'
      }}>
        {destino.regiao}
      </span>

      <h3 style={{
        fontSize: '22px',
        color: '#ecfdf5',
        margin: '0 0 6px',
        fontWeight: '500'
      }}>
        {destino.nome}
      </h3>

      <p style={{
        fontSize: '13px',
        color: '#6ee7b7',
        margin: '0 0 14px',
        fontStyle: 'italic'
      }}>
        📍 {destino.estado}
      </p>

      <p style={{
        fontSize: '13px',
        color: '#a7f3d0',
        lineHeight: '1.6',
        margin: 0,
        fontFamily: 'sans-serif'
      }}>
        {destino.descricao}
      </p>
    </div>
  )
}

export default CardDestino