import React from 'react';
import PropTypes from 'prop-types'

import { Container } from './styles';
import Post from './Post';

import posts from './posts';

export default class PostsList extends React.Component {
  render(){
    return (
      <Container>
        {posts.map(element => (
          <Post
            key={element.id}
            title={element.title}
            description={element.description}
          />
        ))}
      </Container>
    );
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