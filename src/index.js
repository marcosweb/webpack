import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap'
import './estilo.scss'
import { bomDia } from './nayra.js'

const mensagem = bomDia('Bolsonaro')

ReactDOM.render(
    <div className="react">
        <h2>Isto aqui é REACT</h2>
        <p>{mensagem}</p>
    </div>,
    document.querySelector('#app')
)
