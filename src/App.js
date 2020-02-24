import React, { Component } from "react";
import axios from 'axios';
import {connect} from 'react-redux';
import Post from "./components/Post";


class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentWillMount() {
    const { setPosts } = this.props;
    axios.get('http://5e535d0731b9970014cf77b7.mockapi.io/posts')
    .then(({ data }) => {
      setPosts(data);
    })
  }

  render(){
    const { posts } = this.props;
    const { items } = posts;
    return (
      <div>
        <ul>
          <li>
              <button onClick={() => this.props.changeRegion('BY')} >BY</button>
          </li>
          <li>
              <button onClick={() => this.props.changeRegion('RU')}>RU</button>
          </li>
        </ul>
        {
          !items.length ? (
          <span> No news </span>
          ) : (
            items.map((post, key) => {
            return (
              <Post
                key = {key}
                title = {post.title}
                text = {post.description}
                img = {post.image}
              />
            )
          })
          )
        }
      </div>
    );
  }
}

const state = (props) => {
  return props;
}

const actions = dispatch => {
  return {
    setPosts: data =>
      dispatch({
        type: 'SET_POSTS',
        payload: data
      }),
    changeRegion: name =>
      dispatch({
        type: 'CHANGE_REGION',
        payload: name
      }),
  }
}

export default connect(state, actions)(App);
