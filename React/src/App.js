import React from 'react'
import Post from './Post.js'
import Header from './Header.js'

const titulo01 = 'Título da notícia 01' 

// Props 
function App(){
    return <>
        <Header title = 'Blog'>
            <h2>Posts da semana</h2> 
        </Header>

        <hr />
        <Post // Melhorar a visibilidade do nosso código.
            title = {titulo01}
            subtitle = 'Subtítulo da notícia 01'
        />
        <Post title = 'Título da notícia 02' subtitle = 'Subtítulo da notícia 02'/>
        <Post title = 'Título da notícia 03' subtitle = 'Subtítulo da notícia 03'/>
        <Post title = 'Título da notícia 04' subtitle = 'Subtítulo da notícia 04'/>
    </>
}

export default App 