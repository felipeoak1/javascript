import React from 'react'
import PropTypes from 'prop-types'

import PostHeader from './PostHeader'

import {Container, Rate, Subtitle} from './styles.js'

export default function Post(props){
    if (props.post.read) {
        return <h2>{props.post.title} já foi lido.</h2>
    }

    // props.title = 'Jornal' <-- Não é possível sobrescrever props, todas as alterações são feitas no componente pai.

    return  <Container removed={props.post.removed}>
            <PostHeader
                onRemove={props.onRemove}
                post = {{
                    id: props.post.id,
                    title: props.post.title,
                    read: props.post.read,
                }}
            />
            
            <Subtitle>{props.post.subtitle}</Subtitle>
            <Rate>Média:{props.post.likes / 2}</Rate>
        </Container>    

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
        removed: PropTypes.bool.isRequired,
    }).isRequired,
}