import React from 'react'
import 'AccountCard.css' from ''

export default function AccountCard(props) {
  return (
    <>
      <div className="card_main">
        <div className="card_body">
              <p className="card_title">Conta Corrente</p>
              <p className="card_valor">R$ 3.000,00</p> 
        </div>
      </div>
    </>
  )
}
