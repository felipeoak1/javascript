import React, {useContext} from 'react'
import PropTypes from 'prop-types'

import Title from '../title.js'

import Button from '../Button'

import { ThemeContext } from '../../context/ThemeContext'


function Header(props){
    const { onToggleTheme } = useContext(ThemeContext)

    return (
    <>
            <Title>{props.title}</Title>
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

