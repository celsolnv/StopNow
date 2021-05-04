import { createContext, ReactNode } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import light from '../styles/theme/light';
import dark from '../styles/theme/dark';
import { useState } from 'react';
import usePersisteState from "../utils/usePersistState";

interface StyleContextData{
    theme:DefaultTheme;
    toggleTheme:()=>void;
}
interface StyleContextProps{
    children:ReactNode;
}
export const StyleContext = createContext({} as StyleContextData);

export function StyleContextProvider({children}:StyleContextProps ){
    const [theme, setTheme] = usePersisteState('theme',light);
    const toggleTheme = ()=>{
        setTheme( theme.title === 'light' ? dark : light );
    }
    
    return(
        <ThemeProvider theme={theme}  >
            <StyleContext.Provider
                value={{
                    theme,
                    toggleTheme
                }}
            >
                {children}
            </StyleContext.Provider>

        </ThemeProvider>
    )
}