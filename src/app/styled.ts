import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MainContent = styled.div`
  width: 90%;
  height: 90%;
  max-width: 1600px;
  background-color: #00000094;
  border-radius: 40px;
  backdrop-filter: blur(6px);
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  overflow: hidden;

  .cityInfo {
    display: flex;
    align-items: stretch;
    gap: 12px;
  }
`
