import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import {ThemeContext} from './App'

export default function Button(props){
    console.log('button', props)
    const {theme} = useContext(ThemeContext)

    return <button onClick={props.onClick} style = {{ 
        color: theme === 'dark' ? '#000':'#fff',
        background: theme === 'dark' ? '#fff':'#000',
     }}>
        {props.children}
        
        </button>
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
}