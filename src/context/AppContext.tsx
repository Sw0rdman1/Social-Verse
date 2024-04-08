import React, { createContext, useContext, useEffect, useState } from 'react';
import GlobalController from '../api/GlobalController';
import { User } from '../models/User';
import { useAuth } from '../hooks/useAuth';
import { Post } from '../models/Post';



interface AppContextProps {
    api: GlobalController;
    currentUser: User | null;
    initialPosts: Post[];
    loading: boolean;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
    children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const api = GlobalController.getInstance();
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [initialPosts, setInitialPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const { user, initialized } = useAuth();


    useEffect(() => {
        const fetchData = async () => {
            console.log('AppProvider', user, initialized);

            if (!initialized) {
                return;
            }

            if (!user) {
                setLoading(false);
                return;
            }
            const currentUser = await api.users.getCurrentUserInformations(user.id);
            setCurrentUser(currentUser);
            const posts = await api.posts.getPosts(user.id);
            setInitialPosts(posts);
            setLoading(false);
        };

        fetchData();


    }, [user, initialized]);

    return (
        <AppContext.Provider value={{ api, currentUser, initialPosts, loading }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): AppContextProps => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within a AppProvider');
    }
    return context;
};