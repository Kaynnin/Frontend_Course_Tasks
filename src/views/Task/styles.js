import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const Form = styled.div`
  width: 50%;
  margin-bottom: 70px;
`
export const TypeIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .inative {
    opacity: 0.5;
  }

  img {
    width: 50px;
    height: 50px;
    margin: 10px;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }

  button {
    background: none;
    border: none;
  }
`

export const Input = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 5px 0;

  span {
    color: #707070;
  }

  input {
    font-size: 15px;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #a033ff;
  }

  /* input[type='time']::-webkit-calendar-picker-indicator {
      background: none;
    }
    input[type='date']::-webkit-calendar-picker-indicator {
      background: none;
    } 

  img {
    width: 20px;
    height: 20px;
    position: relative;
    left: 90%;
    bottom: 32px;
  }
  */
`
export const TextArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  span {
    color: #707070;
  }

  textarea {
    font-size: 16px;
    padding: 10px;
    border: 1px solid #a033ff;
    border-radius: 5px;
    margin-top: 5px;
  }
`

export const Options = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 2%;

  button {
    cursor: pointer;
    font-size: 18px;
    color: #000000;
    font-weight: bold;
    border: none;
    background: none;

    &:hover {
      opacity: 0.7;
    }
  }

  div {
    display: flex;
    align-items: center;
    color: #a033ff;
    font-size: 18px;
    font-weight: bold;
  }
`

export const Save = styled.div`
  width: 100%;
  margin-top: 20px;

  button {
    cursor: pointer;
    border-radius: 35px;
    width: 100%;
    background: #a033ff;
    border: none;
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    padding: 15px;

    &:hover {
      opacity: 0.7;
    }
  }
`
