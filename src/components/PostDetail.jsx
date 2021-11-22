import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PostDetail = () => {
  const { id } = useParams();
  const [postDetail, setPostDetail] = useState(null);

  useEffect(() => {
    // https://jsonplaceholder.typicode.com/posts/5
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPostDetail(res.data);
      });
  }, [id]);

  if (!postDetail) {
    return (
      <div>
        <span>LOADING</span>
      </div>
    );
  }

  return (
    <div>
      <h2>{postDetail.title}</h2>
      <p>{postDetail.body}</p>
    </div>
  );
};

export default PostDetail;
