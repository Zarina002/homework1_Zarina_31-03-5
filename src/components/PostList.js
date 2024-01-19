import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    axios.get('https://dummyjson.com/posts')
      .then(response => {
          setPosts(response.data.posts)
          console.log(response.data.posts)
      })
      .catch(error => console.error('Ошибка при получении постов:', error));
  }, []);

  return (
    <div>
      <h2>Список Постов</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;