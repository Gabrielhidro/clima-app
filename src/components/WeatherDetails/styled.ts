import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  background-color: #ffffff45;
  border-radius: 24px;
  position: relative;
  flex: 1;

  .mainInfo {
    display: flex;
    flex-direction: column;
    background-color: #ffffff45;
    padding: 20px;
    border-radius: 24px;
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

  .favorite {
    color: #fff;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
  }
`
