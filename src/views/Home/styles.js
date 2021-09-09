import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const FilterArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 30px;

  button {
    background: none;
    border: none;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 70px;

  a {
    text-decoration: none;
    color: #000000;
  }
`
export const Title = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  height: 50px;
  margin-bottom: 13px;

  h3 {
    color: #a033ff;
    position: relative;
    top: 20px;
    background: #ffffff;
    padding: 0 20px;
  }
`
