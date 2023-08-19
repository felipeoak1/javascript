import React from 'react'
import Post from './Post.js'
import Header from './Header.js'

const titulo01 = 'Título da notícia 01' 

const posts = [
    {title: 'Title#01', subtitle: 'Sub#01', likes: 20},
    {title: 'Title#02', subtitle: 'Sub#02', likes: 10},
    {title: 'Title#03', subtitle: 'Sub#03', likes: 50},
]

// Props 
function App(){
    return <>
        <Header title = 'Blog'>
            <h2>Posts da semana</h2> 
        </Header>

        <hr />

        {
            posts.map((element, index) =>
                 <Post
                    key = {index} // Correção 'Warning Each child in a list should have a unique "key" prop'
                    likes = {element.likes}
                    post= {{
                            title: element.title,
                            subtitle: element.subtitle
                        }}
                />
            )
        }

        {/* <Post
            likes = {3}
            post = {{
                    title: titulo01,
                    subtitle: 'Subtítulo da notícia 01'
                }}
        />

        <Post
            likes = {10}
            post = {{
                    title: titulo01,
                    subtitle: 'Subtítulo da notícia 02'
                }}
        />

        <Post
            likes={50}
            post = {{
                    title: titulo01,
                    subtitle: 'Subtítulo da notícia 03'
                }}
        /> */}

        {/* <Post title = 'Título da notícia 04' subtitle = 'Subtítulo da notícia 04'/> */}
    </>
}

export default App 