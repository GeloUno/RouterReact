import React, { Component } from "react";
import axio from "axios";
import './Post.css'

class Post extends Component {
  state = {
    post: []
  };
  componentDidMount() {
    let id = this.props.match.params["post_id"];
    // https://jsonplaceholder.typicode.com/posts/1
    axio.get("https://jsonplaceholder.typicode.com/posts/"+id).then(postD => {
      this.setState(({post: postD.data}));
      console.log(postD.data);
      
    });
      console.log(id);
  }
  render() {
      const post = this.state.post ? (
          <div className="card center cards" key= {this.state.post.id}>
<div className="card-title">{this.state.post.title}</div>
<div className="postBody">{this.state.post.body}</div>
</div>
        ):(
          <dir className="canter"><h1>Loading ... </h1></dir>
          )
    return (
      <div className="container">
        
       <div>{post}</div>
      </div>
    );
  }
}
export default Post;
