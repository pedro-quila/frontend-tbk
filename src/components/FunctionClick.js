import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log('Button clicked');
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
            {/*se llama al metodo sin usar parentesis, no es un 'function called'*/}
        </div>
    )
}

export default FunctionClick
