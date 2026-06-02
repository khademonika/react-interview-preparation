import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Navbar = () => {
  const { theme,setTheme } = useContext(ThemeContext);

  return(
    <div>
         <h1>{theme}</h1>
  <button
        onClick={() =>
          setTheme(
            theme === "light"
              ? "dark"
              : "light"
          )
        }
      >
        Toggle
      </button>
    </div>
  )
};

export default Navbar