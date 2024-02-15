import React from "react";

function ThemeSelector({ theme, onChange }) {
    const handleChange = (theme) => {
        localStorage.setItem("theme", JSON.stringify(theme));
        onChange(theme);
    };

    return (
        <div className="flex items-center gap-4">
            <span className=" text-xs font-bold tracking-wide self-end mb-1">
                THEME
            </span>
            <div className="flex flex-col ">
                <div className="flex gap-2 justify-around text-xs px-2 font-bold">
                    <label htmlFor="theme1">1</label>
                    <label htmlFor="theme2">2</label>
                    <label htmlFor="theme3">3</label>
                </div>
                <div className="flex gap-2 bg-skin-keypad px-2 py-1.5 rounded-full">
                    <input
                        type="radio"
                        name="theme"
                        id="theme1"
                        className=" cursor-pointer"
                        checked={theme === "theme-dark"}
                        onChange={() => handleChange("theme-dark")}
                    />
                    <input
                        type="radio"
                        name="theme"
                        id="theme2"
                        className="cursor-pointer"
                        checked={theme === "theme-light"}
                        onChange={() => handleChange("theme-light")}
                    />
                    <input
                        type="radio"
                        name="theme"
                        id="theme3"
                        className="cursor-pointer"
                        checked={theme === "theme-magic"}
                        onChange={() => handleChange("theme-magic")}
                    />
                </div>
            </div>
        </div>
    );
}

export default ThemeSelector;
