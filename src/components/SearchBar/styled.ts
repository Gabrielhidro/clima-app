import styled from 'styled-components'

export const StyledSearchBar = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 40px;
    width: 100%;
    max-width: 532px;
    background-color: transparent;
    color: #fff;
  }

  button {
    border: none;
    background-color: transparent;
    color: #fff;
    cursor: pointer;

    svg {
      font-size: 24px;
    }
  }
`
