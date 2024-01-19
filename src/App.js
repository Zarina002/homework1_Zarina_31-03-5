import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from "./components/Layout";
import PostList from './components/PostList';
import CreatePostForm from './components/CreatePostForm';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<PostList/>}/>
                <Route path="/create" element={<CreatePostForm/>}/>
            </Route>
        </Routes>
    </Router>
);

export default App;