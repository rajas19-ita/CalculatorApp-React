import { createContext, useReducer } from "react";
import { calc } from "../utils/calc";

const CalcContext = createContext();

const calcReducer = (state, action) => {
    switch (action.type) {
        case "SET_NUM":
            return { ...state, num: state.num + action.payload };
        case "SET_OPERATION":
            const { prevResult, num, operation } = state;
            if (prevResult === "") {
                return {
                    ...state,
                    prevResult: num ? num : "0",
                    num: "",
                    operation: action.payload,
                };
            }

            if (num === "") {
                return {
                    ...state,
                    operation: action.payload,
                };
            }

            let val = calc(+prevResult, +num, operation);
            val = Number.isInteger(val)
                ? val
                : Math.round((val + Number.EPSILON) * 1e8) / 1e8;

            return {
                ...state,
                prevResult: `${val}`,
                num: "",
                operation: action.payload,
            };
        case "EVAL":
            if (state.prevResult === "") return state;

            let val2 = calc(+state.prevResult, +state.num, state.operation);
            val2 = Number.isInteger(val2)
                ? val2
                : Math.round((val2 + Number.EPSILON) * 1e8) / 1e8;

            return {
                ...state,
                prevResult: "",
                num: `${val2}`,
                operation: "",
            };
        case "DEL":
            return {
                ...state,
                num: state.num.slice(0, -1),
            };
        case "RESET":
            return {
                prevResult: "",
                num: "",
                operation: "",
            };
    }
};

export const CalcProvider = ({ children }) => {
    const [state, dispatch] = useReducer(calcReducer, {
        prevResult: "",
        num: "",
        operation: "",
    });

    return (
        <CalcContext.Provider value={{ ...state, dispatch }}>
            {children}
        </CalcContext.Provider>
    );
};

export default CalcContext;
