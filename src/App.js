import React, { useState } from 'react';

const App = () => {

    const [pacientes, setPacientes] = useState([]);
    const [nome, setNome] = useState('');

    const handleNome = e => {
        setNome(e.target.value);
    }

    const handleAdd = () => {
        if (nome.trim().length < 2) {
            alert('Por favor, informe o nome do paciente');
            return;
        }
        // spread operator
        setPacientes([...pacientes, nome]);
        setNome('');
    }

    return (
        <div className="container">
            <div className="row mt-2">
                <div className="col-sm-4">
                    <img src="dentista.jpg"
                         alt="Dentista"  
                         className="img-fluid" />
                </div>
                <div className="col-sm-8">
                    <h3>Centro Odontológico Avenida</h3>
                    <hr />
                    <div className="form-group">
                        <label htmlFor="nome">Nome do Paciente:</label>
                        <input type="text"
                               className="form-control"
                               id="nome"
                               value={nome}
                               onChange={handleNome} 
                               />
                    </div>
                    <button className="btn btn-primary" onClick={handleAdd}>Adicionar</button>
                    <button className="btn btn-danger ml-3">Atender</button>
                    <h4 className="mt-3">Paciente em Atendimento: </h4>
                    <h4>Lista de Pacientes em Espera:</h4>
                    <ol className="text-primary font-weight-bold">
                    {
                        pacientes.map(paciente => {
                           return <li key={paciente}>{paciente}</li>
                        })
                    }    
                    </ol>
                </div>
            </div>
        </div>    
    );
}

export default App;