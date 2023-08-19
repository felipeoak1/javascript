import React from 'react'
import PropTypes from 'prop-types'

function Header(props){
    return (
    <>
        <h1>{props.title}</h1>    
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

