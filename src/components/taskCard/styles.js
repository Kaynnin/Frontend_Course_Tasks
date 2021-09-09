import styled from 'styled-components'

export const Container = styled.div`
  width: 240px;
  height: 160px;
  border-radius: 5px;
  box-shadow: 0 0 9px #707070;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: ${props => (props.done ? '0.5' : 1)};

  &:hover {
    opacity: 0.5;
  }
`

export const TopCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 70px;
    height: 70px;
    margin-top: 10px;
  }
`

export const BottomCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  strong {
    color: #a033ff;
    font-weight: bold;
  }

  span {
    color: #707070;
  }
`
