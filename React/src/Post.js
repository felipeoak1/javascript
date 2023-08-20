import React from 'react'
import PropTypes from 'prop-types'

export default function Post(props){
    // props.title = 'Jornal' <-- Não é possível sobrescrever props, todas as alterações são feitas no componente pai.
    return <>
        <article>
            <strong>{props.post.title}</strong><br/>
            <button onClick={()=>props.onRemove(props.post.title)}>Remover</button>
            <small>{props.post.subtitle}</small><br/>
            <small>Média:{props.post.likes / 2}</small>
        </article>    
        <br/>
    </>

}

// Tipagem das propriedades.
Post.propTypes = {
    onRemove: PropTypes.func.isRequired,
    // O método shape serve para indicar que o objeto esperado é um object, caso nenhum valor seja passado ele só se importará em receber um object, ignorando o tipo das propriedades deste objeto.
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        read: PropTypes.bool.isRequired,
    }).isRequired,
}




