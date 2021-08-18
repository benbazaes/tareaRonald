import React from 'react';
export type Tarea06ClaseProps = {
    a:number,
    b:number,
}

class Tarea06Clase extends React.Component<Tarea06ClaseProps> {
    render(){
        return(
            <div>
                <h1>
                    Clase
                </h1>
                <button onClick={this.handleOnClickSumar}>Suma Clase</button>
                <button onClick={this.handleOnClickRestar}>Restar Clase</button>
            </div>
        );
    }

    handleOnClickSumar = () => {
        alert(`la suma es de lo parametros es: ${this.props.a} + ${this.props.b} = ${this.props.a + this.props.b}`)
    };

    handleOnClickRestar = () => {
        alert(`la resta de lo parametros es: ${this.props.a} - ${this.props.b} = ${this.props.a - this.props.b}`)
    };
}

export default Tarea06Clase;