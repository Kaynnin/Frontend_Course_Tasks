import styled from 'styled-components'

export const Container = styled.div`
  width: 250px;
  height: 60px;
  padding: 10px;
  background: ${props => (props.actived ? '#000000' : '#a033ff')};
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  img {
    width: 25px;
    height: 25px;
  }

  span {
    color: #ffffff;
    font-size: 18px;
    align-self: flex-end;
  }

  &:hover {
    background: #000000;
  }
`
