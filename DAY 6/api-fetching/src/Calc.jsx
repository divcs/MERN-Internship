import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';


function Calc() {
    const [num1, setNum1] = useState()
    const [num2, setNum2] = useState()
    const [result, setResult] = useState(undefined);

    return (
        <div className='d-flex align-items-center justify-content-center flex-column '>
            <b>Hello Calc</b>  <br />
            <input type='number' onChange={(e) => { setNum1(e.target.value) }} placeholder='Enter your first number'/> <br />
            <input type='number' onChange={(e) => { setNum2(e.target.value) }} placeholder='Enter your second number' /><br />
            <div className='d-flex gap-2'>
            <Button variant="primary" onClick={() => setResult(parseFloat(num1) + parseFloat(num2))}>Add</Button> {' '} 
            <Button variant="primary" onClick={() => setResult(parseFloat(num1) - parseFloat(num2))}>Sub</Button> {' '} 
            <Button variant="primary" onClick={() => setResult(parseFloat(num1) * parseFloat(num2))}>Mul</Button> {' '} 
            <Button variant="primary" onClick={() => setResult(parseFloat(num1) / parseFloat(num2))}>Div</Button> {' '} <br /> <br />
            {result && result}
            </div>
            
        </div>

    )
}

export default Calc


