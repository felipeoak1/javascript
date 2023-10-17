import React from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default function Layout(props) {

  return (
    <>
      <Header  
        changeColor = {props.changeColor} 
        tema = {props.tema}
      />
      <PostsList />
      <Footer 
        changeColor = {props.changeColor} 
        tema = {props.tema} 
      />
    </>
  );
}
