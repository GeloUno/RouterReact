import React, { Component } from "react";
//import './Post.css'
import axio from "axios";
import {Link} from 'react-router-dom'

class Posts extends Component {
  pages; 
  // TODO: now it is posts length it will be used for pagination
  state = {
    posts: []
  };
  componentDidMount() {
    axio.get("https://jsonplaceholder.typicode.com/posts").then(post => {
      
      this.pages = post.data.length;     
      this.setState({
        posts: post.data.slice(0, 10)
      });     
    });
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="card center cards" key={post.id}>
            <Link to={'post/'+ post.id}>
            <div className="card-title">{post.id}. {post.title}</div>
            <div className="postBody">{post.body.slice(0,100)}
            <span className="grey-text text-darken-1">  ...more</span>
            </div>
            </Link>
          </div>
        );
      })
    ) : (
     <div className="padding1">
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
     </div>
      );
    return (
      <div>
        <div className="container">
          <div className="center">{postList}</div>
        </div>
      </div>
    );
  }
}
export default Posts;
