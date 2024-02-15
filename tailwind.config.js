/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
    return ({ opacityValue }) => {
        if (opacityValue !== undefined) {
            return `rgba(var(${variableName}), ${opacityValue})`;
        }
        return `rgb(var(${variableName}))`;
    };
}

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            textColor: {
                skin: {
                    base: withOpacity("--color-text-base"),
                    num: withOpacity("--color-text-num"),
                    del: withOpacity("--color-text-del"),
                    calc: withOpacity("--color-text-calc"),
                },
            },
            backgroundColor: {
                skin: {
                    screen: withOpacity("--color-screen"),
                    keypad: withOpacity("--color-keypad"),
                    display: withOpacity("--color-display"),
                    radio: withOpacity("--color-radio)"),
                    "button-num": withOpacity("--color-button-num"),
                    "button-calc": withOpacity("--color-button-calc"),
                    "button-del": withOpacity("--color-button-del"),
                },
            },
            boxShadow: {
                "b-num": "0 5px rgb(var(--color-shadow-num))",
                "b-del": "0 5px rgb(var(--color-shadow-del))",
                "b-calc": "0 5px rgb(var(--color-shadow-calc))",
            },
            fontFamily: {
                "league-spartan": ["League Spartan", "sans-serif"],
            },
        },
    },
    plugins: [],
};
