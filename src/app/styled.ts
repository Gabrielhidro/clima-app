import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MainContent = styled.div`
  width: 80%;
  height: 80%;
  background-color: #00000094;
  border-radius: 40px;
  backdrop-filter: blur(6px);

  h1 {
    text-align: center;
    padding: 20px;
    font-size: 42px;
    font-weight: bold;
  }

  p {
    padding: 20px;
    font-size: 24px;
    font-weight: bold;
  }
`
