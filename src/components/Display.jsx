import React from "react";
import { useContext } from "react";
import CalcContext from "../context/CalcContext";

function Display() {
    const { num, prevResult, operation } = useContext(CalcContext);
    return (
        <div
            className=" h-[6.5rem] w-full rounded-lg bg-skin-display
          px-4 py-2 flex flex-col gap-2 font-bold tracking-wide overflow-x-auto"
        >
            <div
                className=" h-1/3  
             text-lg w-full text-right"
            >
                {prevResult} {operation}
            </div>
            <div
                className=" h-[60%]  text-5xl  
             w-full text-right"
            >
                {num}
            </div>
        </div>
    );
}

export default Display;
