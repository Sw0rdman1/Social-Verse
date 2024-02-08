
import { useState, useEffect } from 'react';
import { Post, getUserFakePosts } from '../models/Post';
import { User } from '../models/User';

const usePosts = (user: User) => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // const response = await fetch('/api/posts');
                // const data = await response.json();
                const data = getUserFakePosts(user);
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return posts;
};

export default usePosts;
