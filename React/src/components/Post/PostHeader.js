import React from "react"
import PropTypes from 'prop-types'

import Button from '../Button'

export default function PostHeader(props){

    return <>
        <strong>{props.post.read ? <s>{props.post.title}</s> : props.post.title}</strong><br/>
        <Button onClick = {()=>props.onRemove(props.post.title)}>
            Remover
        </Button>
    </>
}

// Tipagem das propriedades.
PostHeader.propTypes = {
    onRemove: PropTypes.func.isRequired,
    // O método shape serve para indicar que o objeto esperado é um object, caso nenhum valor seja passado ele só se importará em receber um object, ignorando o tipo das propriedades deste objeto.
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        read: PropTypes.bool.isRequired,
    }).isRequired,
}