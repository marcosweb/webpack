import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap'
import './estilo.scss'
import { bomDia } from './nayra.js'
import Formulario from './formulario'

const mensagem = bomDia('Bolsonaro')

ReactDOM.render(
    <div className="react">
        <h2>Isto aqui é REACT</h2>
        <p>{mensagem}</p>
        <Formulario />
    </div>,
    document.querySelector('#app')
)
