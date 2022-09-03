import React from 'react'
import {createRoot} from 'react-dom/client'

import 'bootstrap'
import './style/app.scss'
import App from './components/App'

const app = document.getElementById('app')
const root = createRoot(app) 

root.render(<App />) 