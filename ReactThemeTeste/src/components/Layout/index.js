import React from 'react';
import PropTypes from 'prop-types'

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default class Layout extends React.Component {

  render() {
    let {tema} = this.props
    let {changeColor} = this.props

    return (
    <>
      <Header  
        changeColor = {changeColor} 
        tema = {tema}
      />
      
      <PostsList /> 
      
      <Footer 
        changeColor = {changeColor} 
        tema = {tema} 
      />
    </>
    )
  }
}
