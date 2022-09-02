import React from 'react'
import {createRoot} from 'react-dom/client'

import 'bootstrap'
import './style/app.scss'

const app = document.getElementById('app')
const root = createRoot(app) 

root.render(<h1>Boa Noite!</h1>) 