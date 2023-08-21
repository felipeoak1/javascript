import React, {useContext} from 'react'
import PropTypes from 'prop-types'

import Button from './Button'
import { ThemeContext } from './App'

function Header(props){
    const { onToggleTheme } = useContext(ThemeContext)

    return (
    <>
        <h1>{props.title}</h1>  
        <Button 
        onClick={onToggleTheme}>
            Mudar Tema    
        </Button>  
        {props.children}
    </>
        )
}

// Tipagem das props.
Header.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}

// Setando valor padrão para nossa props.
Header.defaultProps = {
    title: 'Blog'
}

export default Header

