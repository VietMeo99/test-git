import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <LazyLoad
          once={true}
          placeholder={<img src={`https://picsum.photos/id/${this.props.id}/5/5`} alt="..." />}
        >
          <div className="post-img">
            <img src={`https://picsum.photos/id/${this.props.id}/1000/1000`} alt="..." />
          </div>
        </LazyLoad>
        <div className="post-body">
          <h4>{this.props.title}</h4>
          <p>{this.props.body}</p>
        </div>
      </div>
    )
  }
}
