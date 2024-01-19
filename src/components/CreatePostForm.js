import React, {useState} from 'react';
import axios from 'axios';

const CreatePostForm = () => {
    const [postTitle, setPostTitle] = useState('');
    const [posts, setPosts] = useState([])

    const handleSubmit = () => {
        axios.post("https://dummyjson.com/posts/", {title: postTitle}, {headers: {"Content-Type": "application/json"}}).then(response => {
            console.log(response.status)
            console.log("Пост добавлен")
        })
    }

    const handleAddTitle = () => {
        if (postTitle === "") {
            return
        }
        handleSubmit()
        let array = [...posts, {title: postTitle}]
        setPosts(array)
        setPostTitle("")
    }

    return (
        <div>
            <h2>Создать Пост</h2>
            <input value={postTitle} type="text" onChange={(event)=> setPostTitle(event.target.value)}/>
            <button onClick={handleAddTitle}>Опубликовать</button>
        </div>
    );
};

export default CreatePostForm;