import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #ffffff45;
  border-radius: 24px;
  overflow: overlay;
  height: -webkit-fill-available;

  .forecastItems {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 20px;

    .item {
      display: flex;
      flex-direction: column;
      gap: 20px;
      background-color: #ffffff45;
      padding: 20px;
      border-radius: 24px;

      .listPerDay {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .subInfo {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        align-items: self-end;
      }
    }
  }
`
