import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()
    return (
        <button onClick={toggleTheme} className="p-2 border  rounded ">
            {theme === "light" ? <FaMoon /> : <FaSun />}

        </button>
    )
}
export default ThemeToggle;