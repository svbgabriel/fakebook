import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostHeader from '../PostHeader';
import './styles.scss';

export default class Post extends Component {
  state = {
    posts: [],
  };

  static propTypes = {
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        content: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  componentDidMount() {
    const { posts } = this.props;

    this.setState({ posts });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="postbox">
        {posts
          && posts.map(post => (
            <div key={post.id} className="post">
              <PostHeader post={post} />
              <p className="content">{post.content}</p>
            </div>
          ))}
      </div>
    );
  }
}
