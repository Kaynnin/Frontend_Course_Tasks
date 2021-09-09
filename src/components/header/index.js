import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'

// ICONS //
import logo from '../../assets/Logo-Icon.png'
import bell from '../../assets/Bell-Icon.png'

// API
import api from '../../services/api'

// FUNCTION

import isConnected from '../../util/isConnected'

// HEADER

function Header({ clickNotification }) {
  const [lateCount, setLateCount] = useState()

  async function lateVerify() {
    await api.get(`/task/filter/late/${isConnected}`).then(response => {
      setLateCount(response.data.length)
    })
  }

  useEffect(() => {
    lateVerify()
  }, [])

  async function Logout() {
    localStorage.removeItem('@4inov/macaddress')
    window.location.reload()
  }

  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo" />
      </S.LeftSide>

      <S.RightSide>
        <Link to="/">INICÍO</Link>
        <span className="divider" />
        <Link to="/task">NOVA TAREFA </Link>
        <span className="divider" />

        {!isConnected ? (
          <Link to="/qrcode">SINCRONIZAR CELULAR</Link>
        ) : (
          <button type="button" onClick={Logout}>
            SAIR
          </button>
        )}

        {lateCount && (
          <>
            <span className="divider" />
            <button onClick={clickNotification}>
              <img src={bell} alt="Notificação" />
              <span>{lateCount}</span>
            </button>
          </>
        )}
      </S.RightSide>
    </S.Container>
  )
}

export default Header
