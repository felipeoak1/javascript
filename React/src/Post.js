import React from 'react'
import PropTypes from 'prop-types'

export default function Post(props){
    // props.title = 'Jornal' <-- Não é possível sobrescrever props, todas as alterações são feitas no componente pai.
    return <>
        <article>
            <strong>{props.post.title}</strong><br/>
            <small>{props.post.subtitle}</small><br/>
            <small>Média:{props.likes / 2}</small>
        </article>    
        <br/>
    </>

}

// Tipagem das propriedades.
Post.propTypes = {
    likes: PropTypes.number.isRequired,
    // O método shape serve para indicar que o objeto esperado é um object, caso nenhum valor seja passado ele só se importará em receber um object, ignorando o tipo das propriedades deste objeto.
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
    }).isRequired,
}




