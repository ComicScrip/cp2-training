import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PostList = () => {
  const [postList, setPostList] = useState([]);
  const [postFilter, setPostFilter] = useState('');
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      setPostList(res.data);
    });
  }, []);

  return (
    <div>
      <input
        placeholder='post filter'
        value={postFilter}
        onChange={(e) => setPostFilter(e.target.value)}
      />

      <ul>
        {postList
          .filter((post) => post.title.includes(postFilter))
          .map(({ title, id }) => (
            <li key={id}>
              <Link to={`/${id}`}>{title} </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PostList;
