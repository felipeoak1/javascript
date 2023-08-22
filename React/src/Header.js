import React, {useContext} from 'react'
import PropTypes from 'prop-types'

import Button from './Button'
import { ThemeContext } from './ThemeContext'
import styles from './Header.scss'

function Header(props){
    const { onToggleTheme } = useContext(ThemeContext)

    return (
    <>
            <h1 className={styles.title}>{props.title}</h1>
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

