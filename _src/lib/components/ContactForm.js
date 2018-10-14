import React, { Component } from 'react';
import ReactDom from 'react-dom';
const createReactClass = require('create-react-class');
// App
// Smart. Does data stuff.
module.exports=createReactClass({
  
  getInitialState: function() {
    return { 
      comments: {}
    }
  },
  
  addComment: function(commentData) {
    
    (foo, bar, ...args) => {
      
    }
    
    const h =  {
      getTime: function() {
        const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const d = new Date();
        const mon = month[d.getMonth()];
        const day = d.getDate();
        const year = d.getFullYear();
        const dateAll = mon + " " + day + ", " + year;
    
        return dateAll;
      }
    }

    const timeStamp = (new Date()).getTime();
    
    this.state.comments['comment-id' + timeStamp] = commentData;
    this.setState({
      comments: this.state.comments
    });
  },
  
  renderComment: function(key) {
    return (
      <li className="list">
        <NewComment key={key} index={key} details={this.state.comments[key]} />
      </li>
    )
  },
  
  render : function() {
    return (
	    <div className="entry-comments">
        
	      <ol className="js-comments">
            {
              Object
                .keys(this.state.comments)
                 // Creating a NEW array
                .map(this.renderComment)
            }
	      </ol>
        
	      <AddCommentForm addComment={this.addComment}/>
        
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        
	    </div>
    )
  }
});

/*
  Add comment Form
  <AddCommentForm />
*/
// Semi-Dumb
const AddCommentForm = createReactClass({
  
  processComment: function(event) {
    event.preventDefault();
    
    // 1. Take data from from form
    const commentData = {
      commentName: this.refs.name.value,
      commentBody: this.refs.desc.value
    }
    
    // 2. Pass data back to App
    this.props.addComment(commentData);
    
    // 3. Reset the form
    this.refs.commentForm.reset();
    
  },
  
  render : function() {
    return (
      <div className="callout secondary">
        <h4 className="leave-comment">Add a Comment</h4>
        <form className="comment-form post-edit" ref="commentForm" onSubmit={this.processComment}>
          <input type="text" ref="name" placeholder="Your Name" required/>
          <textarea ref="desc" placeholder="Add your comment here" required/>
          <button id="submit" type="submit" className="btn btn--primary">Add Comment</button>
        </form>
      </div>
    )
  }
});


/*
  Newcomment
  <NewComment />
*/
const NewComment = createReactClass({
  render : function() {
    return (
      <div className="comment module">
        <div className="form-group">
          <div className="comment-avatar">
            <a>
              <img avatar="commentName" className="comment-avatar-img" alt="commentName" />
            </a>
          </div>
          <div className="form-group">
            <a href="#0" data-username="commentName" className="comment-author">
                <span className="comment-author-name">
                  {this.props.details.commentName}
                </span>
            </a>
            <span className="on"> on </span>
            <a href="#0">
              <time className="comment-timestanp">
                {h.getTime()}
              </time>
            </a>
          </div>
        </div>

        <div className="comment-content">
          <p>{this.props.details.commentBody}</p>
        </div>
      </div>
      
    )
  }
});

ReactDOM.render(<commentForm/>,app);
