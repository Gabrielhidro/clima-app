import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  background-color: #ffffff45;
  border-radius: 24px;

  .mainInfo {
    display: flex;
    flex-direction: column;
  }

  .icon {
    display: flex;
    align-items: center;

    h1 {
      font-size: 63px;
    }
  }

  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  img {
    width: 100px;
    height: 100px;
  }

  .aditionalInfo {
    display: flex;
    flex-direction: column;
    gap: 10px;

    span {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 18px;
    }
  }
`
