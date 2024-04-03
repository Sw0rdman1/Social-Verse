import React, { createContext, useContext, useState } from 'react';
import GlobalController from '../api/GlobalController';



interface AppContextProps {
    api: GlobalController;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
    children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const api = GlobalController.getInstance();

    return (
        <AppContext.Provider value={{ api }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApi = (): AppContextProps => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApi must be used within a AppProvider');
    }
    return context;
};