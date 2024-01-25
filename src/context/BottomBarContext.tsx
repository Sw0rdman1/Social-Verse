import React, { createContext, useState, useContext, ReactNode } from 'react';

interface BottomTabContextProps {
    isBottomTabVisible: boolean;
    setBottomTabVisible: (value: boolean) => void;
}

const BottomTabContext = createContext<BottomTabContextProps | undefined>(undefined);

interface BottomTabProviderProps {
    children: ReactNode;
}

export const BottomTabProvider: React.FC<BottomTabProviderProps> = ({ children }) => {
    const [isBottomTabVisible, setIsBottomTabVisible] = useState(true);

    const setBottomTabVisible = (value: boolean) => {
        setIsBottomTabVisible(value);
    };

    return (
        <BottomTabContext.Provider value={{ isBottomTabVisible, setBottomTabVisible }}>
            {children}
        </BottomTabContext.Provider>
    );
};

export const useBottomTab = (): BottomTabContextProps => {
    const context = useContext(BottomTabContext);
    if (!context) {
        throw new Error('useBottomTab must be used within a BottomTabProvider');
    }
    return context;
};
