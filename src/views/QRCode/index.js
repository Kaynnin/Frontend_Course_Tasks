import React, { useState } from 'react'
import { Redirect } from 'react-router'
import * as S from './styles'
import QR from 'qrcode.react'

// COMPONENTS
import Header from '../../components/header'
import Footer from '../../components/footer'

function QRCode() {
  const [mac, setMac] = useState()
  const [redirect, setRedirect] = useState(false)

  async function SaveMac() {
    if (!mac) {
      alert('Digite o codigo que apareceu na tela do seu celular !')
    } else {
      await localStorage.setItem('@4inov/macaddress', mac)
      setRedirect(true)
      window.location.reload()
    }
  }

  return (
    <S.Container>
      {redirect && <Redirect to="/" />}
      <Header />

      <S.Content>
        <h1>CAPTURE O QRCODE PELO APP</h1>
        <p>suas atividades serão sincronizadas com a do seu celular</p>
        <S.QRCode>
          <QR value="getmacaddress" size={350} />
        </S.QRCode>

        <S.ValidationCode>
          <span>Digite a numeração que apareceu no seu celular</span>
          <input
            type="text"
            onChange={e => setMac(e.target.value)}
            value={mac}
          ></input>
          <button type="button" onClick={SaveMac}>
            SINCRONIZAR
          </button>
        </S.ValidationCode>
      </S.Content>

      <Footer />
    </S.Container>
  )
}

export default QRCode
