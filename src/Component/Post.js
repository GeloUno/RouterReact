import React, { Component } from "react";
import axio from "axios";
import './Post.css'

class Post extends Component {
  state = {
    post: []
  };
  componentDidMount() {
    let id = this.props.match.params.post_id;
    // https://jsonplaceholder.typicode.com/posts/1
    axio.get("https://jsonplaceholder.typicode.com/posts/"+id).then(postD => {
      this.setState(({post: postD.data}));
      console.log(postD.data);
      
    });
      console.log(id);
  }
  render() {
      const post = this.state.post.id ? (
        <div className="container">
        <div className="card center cards" key= {this.state.post.id}>
<div className="card-title">{this.state.post.id}. {this.state.post.title}</div>
<div className="postBody">{this.state.post.body}</div>
</div></div>
        ):(            
            <div className="center">
          <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          </div>
          )
    return (
      <div >        
       <div >{post}</div>
      </div>
    );
  }
}
export default Post;
