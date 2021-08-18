export type funcional = {
    a: number,
    b: number,
}

function Tarea06Funcional(props:funcional){
    function handleOnClickSumar(){
        alert(`la suma de lo parametros es: ${props.a} + ${props.b} = ${props.a + props.b}`)
    }

    function handleOnClickRestar(){
        alert(`la resta de lo parametros es: ${props.a} - ${props.b} = ${props.a - props.b}`)
    }

    return(
        <div>
            <h1>funcion</h1>
            <button onClick={handleOnClickSumar}>Suma Funcional</button>
            <button onClick={handleOnClickRestar}>Restar Funcional</button>
        </div>
    )
}

export default Tarea06Funcional;