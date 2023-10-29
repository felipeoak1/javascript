import React from 'react';
import PropTypes from 'prop-types'

import { Container } from './styles';
import Post from './Post';

import posts from './posts';

export default class PostsList extends React.Component {
  render(){
    
    return (
      <Container>
        {posts.map(e=>(<Post
            id={e.id}
            title = {e.title}
            description= {e.description}
          />
        ))}

      </Container>
    )
  }
}

// export defa {
//   return (
//     <Container>
//       {posts.map((post) => (
//         <Post
//           key={post.id}
//           title={post.title}
//           description={post.description}
//         />
//       ))}
//     </Container>
//   );
// }