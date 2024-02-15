import React from "react";
import { useContext } from "react";
import CalcContext from "../context/CalcContext";
import Button from "./Button";

function Keypad() {
    const { dispatch } = useContext(CalcContext);

    return (
        <div className="p-5 rounded-lg bg-skin-keypad grid grid-cols-4 gap-5">
            <Button
                num
                onClick={() => dispatch({ type: "SET_NUM", payload: 7 })}
            >
                7
            </Button>
            <Button
                num
                onClick={() => dispatch({ type: "SET_NUM", payload: 8 })}
            >
                8
            </Button>
            <Button
                num
                onClick={() => dispatch({ type: "SET_NUM", payload: 9 })}
            >
                9
            </Button>
            <Button del onClick={() => dispatch({ type: "DEL" })}>
                DEL
            </Button>
            <Button
                num
                onClick={() => dispatch({ type: "SET_NUM", payload: 4 })}
            >
                4
            </Button>
            <Button
                num
                onClick={() => dispatch({ type: "SET_NUM", payload: 5 })}
            >
                5
            </Button>
            <Button
                num
                onClick={() => dispatch({ type: "SET_NUM", payload: 6 })}
            >
                6
            </Button>
            <Button
                num
                onClick={() =>
                    dispatch({ type: "SET_OPERATION", payload: "+" })
                }
            >
                +
            </Button>
            <Button
                num
                onClick={() => dispatch({ type: "SET_NUM", payload: 1 })}
            >
                1
            </Button>
            <Button
                num
                onClick={() => dispatch({ type: "SET_NUM", payload: 2 })}
            >
                2
            </Button>
            <Button
                num
                onClick={() => dispatch({ type: "SET_NUM", payload: 3 })}
            >
                3
            </Button>
            <Button
                num
                onClick={() =>
                    dispatch({ type: "SET_OPERATION", payload: "-" })
                }
            >
                -
            </Button>
            <Button
                num
                onClick={() => dispatch({ type: "SET_NUM", payload: "." })}
            >
                .
            </Button>
            <Button
                num
                onClick={() => dispatch({ type: "SET_NUM", payload: 0 })}
            >
                0
            </Button>
            <Button
                num
                onClick={() =>
                    dispatch({ type: "SET_OPERATION", payload: "/" })
                }
            >
                /
            </Button>

            <Button
                num
                onClick={() =>
                    dispatch({ type: "SET_OPERATION", payload: "x" })
                }
            >
                x
            </Button>
            <Button
                del
                onClick={() => dispatch({ type: "RESET" })}
                className=" col-span-2"
            >
                RESET
            </Button>

            <Button
                calc
                onClick={() => dispatch({ type: "EVAL" })}
                className=" col-span-2"
            >
                =
            </Button>
        </div>
    );
}

export default Keypad;
