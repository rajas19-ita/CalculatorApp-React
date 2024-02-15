import { useEffect, useState } from "react";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import ThemeSelector from "./components/ThemeSelector";

function App() {
    const [theme, setTheme] = useState("theme-dark");

    useEffect(() => {
        const val = JSON.parse(localStorage.getItem("theme"));
        setTheme(val);
    }, []);

    return (
        <div
            className={`h-screen  mx-auto bg-skin-screen overflow-y-auto font-league-spartan ${theme}`}
        >
            <div className="flex flex-col h-full justify-center max-w-md mx-auto px-8 text-skin-base">
                <div className="mb-4 flex justify-between items-center ">
                    <h1 className=" text-4xl font-bold">calc</h1>
                    <ThemeSelector
                        theme={theme}
                        onChange={(theme) => setTheme(theme)}
                    />
                </div>
                <div className="mb-4 w-full">
                    <Display />
                </div>
                <Keypad />
            </div>
        </div>
    );
}

export default App;
