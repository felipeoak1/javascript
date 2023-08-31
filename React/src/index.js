import React from "react"
import ReactDOM from "react-dom"

import App from './components/App/index.js'

import GlobalStyles from './styles/global.js'

ReactDOM.render(
    <>  
        <GlobalStyles />
        <App />
    </>, 
    document.getElementById('root'),
)