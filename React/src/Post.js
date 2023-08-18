import React from 'react'

export default function Post(props){
    // props.title = 'Jornal' <-- Não é possível sobrescrever props, todas as alterações são feitas no componente pai.
    return <>
        <article>
            <strong>{props.title}</strong><br/>
            <small>{props.subtitle}</small>
        </article>    
        <br/>
    </>

}




