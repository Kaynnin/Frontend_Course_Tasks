import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #a033ff;
  border-bottom: 8px solid #000000;

  display: flex;
`

export const LeftSide = styled.div`
  width: 50%;
  height: 80px;
  display: flex;
  align-items: center;
  padding-left: 45px;

  img {
    width: 150px;
    hight: 50px;
  }
`

export const RightSide = styled.div`
  width: 50%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    font-size: 17px;
    &:hover {
      color: #000000;
    }
  }

  a,
  button {
    color: #ffffff;
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;

    img {
      width: 25px;
      height: 30px;
    }

    span {
      background-color: #000000;
      color: #ffffff;
      padding: 2px 6px;
      border-radius: 50%;
      position: relative;
      top: -20px;
      right: 9px;
    }
  }

  button {
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }

  .divider::after {
    content: '|';
    margin: 0 10px;
    color: #ffffff;
    font-size: 24px;
  }

  button {
    font-size: 17px;
  }
`
