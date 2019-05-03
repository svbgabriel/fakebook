import React from 'react';
import { distanceInWords } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

import './styles.scss';

const PostHeader = ({ post }) => (
  <div className="postheader">
    <img src={post.avatar} alt="" />
    <div className="user">
      <strong>{post.author}</strong>
      <p>{distanceInWords(post.date, new Date(), { locale: pt })}</p>
    </div>
  </div>
);

PostHeader.propTypes = {
  post: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostHeader;
