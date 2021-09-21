import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import "animate.css";

import alertify from 'alertifyjs';

import './index.css';

import {
  StyledForm,
  BinaryTextInput,
  Label,
  Button,
  DecimalTextInput,
  Field
} from './styles'

function App() {
  const [binaryText, setBinaryText] = useState('')
  const [decimalText, setDecimalText] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const copyToClipboard = e => {
    e.preventDefault();
    navigator.clipboard.writeText(decimalText);

    alertify.message(`Resultado ${decimalText} copiado com sucesso`);
  }

  // Perform the conversion on form submit
  const onFormSubmit = e => {
    e.preventDefault() // prevents refresh of the browser

    // Make sure we accept only either 0 or 1
    if (binaryText.match(/^[0-1]+$/g) === null) {
      setErrorMessage('Insira 0 ou 1')
      return
    }

    setErrorMessage('') // Reset the error message

    // Formulae:
    // input = 1 => output = 1 * (2^0) = 1
    // input = 10 => output = (0 * (2^0)) + (1 * (2^1)) = 2
    // So we reverse and iterate from the back
    const reversedBinaryText = binaryText
      .split('')
      .map(Number) // Convert to a number from string
      .reverse()

    // Calculate the result by accumulating previous vaue
    const result = reversedBinaryText.reduce(
      (accumulator, currentValue, idx) =>
        accumulator + currentValue * Math.pow(2, idx)
    )
    setDecimalText(result)
  }

  return (
    <>
    <h1 className="animate__bounceIn"> Conversão Binário para Decimal </h1>
    <h2>Converta números binários, com até 8 digitos, para números decimais.</h2>
    <div className="animate__bounceIn container">

    <StyledForm onSubmit={onFormSubmit}>
      <br />
      <Field>
        <Label>Insira o número binário</Label>
        <div>
          <BinaryTextInput
            autoComplete="off"
            type="text"
            name="binary"
            placeholder="Ex: 010001"
            value={binaryText}
            onChange={e => setBinaryText(e.target.value)}
            // type="number"
            maxLength={8}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
          <Button type="submit" className="button">Converter</Button>
        </div>
      </Field>
      <Field>
        <Label>Resultado número decimal</Label>

        <DecimalTextInput
          id="result-decimal"
          type="text"
          name="decimal"
          value={decimalText}
          className="btn-result"
          disabled
        />
        <button className="btn-copy-to-clipboard" onClick={copyToClipboard}>
            Copiar
          </button>
      {errorMessage && <span style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</span>}

      </Field>
    </StyledForm>
    </div>

    <div className="footer">
      <span>Copyright - 2021</span>
    </div>
    </>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
