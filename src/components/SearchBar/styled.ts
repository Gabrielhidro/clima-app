import styled from 'styled-components'

export const StyledSearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #0070f3;
    color: #fff;
    cursor: pointer;
  }
`
