import styled from 'styled-components'

export const StyledForm = styled.form`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.span`
  margin: 10px;
  font-size: 1em;
`

export const BinaryTextInput = styled.input`
  font-size: 1em;
  margin-bottom: 10px;
  border: none;
  padding: 10px;
  border-radius: 8px;
  outline: none;
  border-color: transparent;
  width:50%;

  &:focus {
    border: 1px solid gray;
  }
`

export const DecimalTextInput = styled.input`
  font-size: 1em;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
  background: #e0f0e0;
  outline: none;
  width: 50%;
`

export const Button = styled.button`
  margin-bottom: 10px;
  margin-left: 10px;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    opacity:0.9;
  }
`
