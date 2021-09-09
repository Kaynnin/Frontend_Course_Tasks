import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: Center;
`

export const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: Center;
  margin-bottom: 70px;

  h1 {
    margin-bottom: 10px;
  }

  p {
    color: #707070;
    font-weight: bold;
    margin-top: 0px;
  }
`

export const QRCode = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const ValidationCode = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  span {
    text-transform: uppercase;
    font-weight: bold;
  }

  input {
    font-size: 18px;
    padding: 10px;
    text-align: center;
  }

  button {
    font-weight: bold;
    background: #a033ff;
    color: #ffffff;
    font-size: 18px;
    padding: 10px;
    border-radius: 35px;
    border: none;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
      background: #000000;
    }
  }
`
