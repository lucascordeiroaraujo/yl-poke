import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  ReactNode,
} from 'react';

type availablesThemes = 'light' | 'dark';

interface IAppThemeContextData {
  appTheme: availablesThemes;
  handleSetAppTheme(theme: availablesThemes): void;
}

const AppThemeContext = createContext<IAppThemeContextData>(
  {} as IAppThemeContextData,
);

interface IAppThemeProviderProps {
  children: ReactNode;
}

export const AppThemeProvider = ({ children }: IAppThemeProviderProps) => {
  const [appTheme, setAppTheme] = useState<availablesThemes>(() => {
    const theme = localStorage.getItem('@ylPoke:theme') as availablesThemes;

    return theme || 'dark';
  });

  const handleSetAppTheme = useCallback(theme => {
    setAppTheme(theme);
  }, []);

  return (
    <AppThemeContext.Provider
      value={{
        appTheme,
        handleSetAppTheme,
      }}
    >
      {children}
    </AppThemeContext.Provider>
  );
};

export function useAppTheme(): IAppThemeContextData {
  const context = useContext(AppThemeContext);

  if (!context) {
    throw new Error('useAppTheme must be used within an AppThemeProvider');
  }

  return context;
}
