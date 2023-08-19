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

Post.propTypes = {
    likes: PropTypes.number.isRequired,  
    // Caso nenhum argumento seja passado para o método shape, ele só indicará que ele requer um objeto, mas sem se importar com os valores que estão dentro do objeto.
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
    }).isRequired,
}




