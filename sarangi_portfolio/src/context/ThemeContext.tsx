import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type ThemeConextType = {
    theme: Theme,
    toggleTheme: () => void;
}
export const ThemeConext = createContext<ThemeConextType | undefined>(undefined);
interface Props {
    children: React.ReactNode;
}
export const ThemeProvider = ({ children }: Props) => {
    const getinitialTheme = (): Theme => {
        const savedTheme = localStorage.getItem("theme") as Theme | null;
        if (savedTheme) {
            return savedTheme;
        }
        return window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light";
    }
    const [theme, settheme] = useState<Theme>(getinitialTheme());
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme)
    }, [theme])
    const toggleTheme = () => {
        settheme((prev) => (prev === "light" ? "dark" : "light"))
    }
    return (
        <ThemeConext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeConext.Provider>
    )


}
export const useTheme = () => {
    const context = useContext(ThemeConext);
    if (!context) {
        throw new Error("useTheme must be used inside ThemeProvider");
    }
    return context;
}
