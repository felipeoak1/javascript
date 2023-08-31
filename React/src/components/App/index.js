import React, {useState} from 'react'

import Post from '../Post/index.js'
import Header from '../Header/index.js'

import {ThemeProvider} from '../../context/ThemeContext.js'

import {Title} from './styles.js'

// Props 
function App(){
    // React trabalha com imutabilidade, para que ele identifique alterações ou implementação de valor é necessário utilizarmos o useState.

    const [posts, setPosts] = useState([
        {id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 20, read: false, removed: true},
        {id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 10, read: false, removed: false},
        {id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 15, read: false, removed: false},
        {id: Math.random(), title: 'Title#04', subtitle: 'Sub#04', likes: 50, read: true, removed: false},
    ])

    function handleRefresh(){
        setPosts((prevState) => [
            ...prevState,
            {
                id: Math.random(), 
                title: `Title#0${prevState.length + 1}`, 
                subtitle: `Sub#0${prevState.length + 1}`, 
                likes: 50,
                read: false,
                removed: false,
            },
        ])
    }

    function handleRemovePost(postTitle){
        setPosts((prevStats) => prevStats.map((post) => {
            return post.title == postTitle ? {...post, removed: true} : post
        }))
    }

    return <ThemeProvider>
        <Header title = 'Blog Semanal'>
            <Title as="h2">
                Posts da semana <button onClick={handleRefresh}>Atualizar</button>
            </Title> 
        </Header>

        <hr />

        {
            posts.map(element =>
                 <Post
                 key = {element.id} // Correção 'Warning Each child in a list should have a unique "key" prop'
                 onRemove = {handleRemovePost}
                 post = {element}
                />
            )
        }

    </ThemeProvider>
}

export default App 