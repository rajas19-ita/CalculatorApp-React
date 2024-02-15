import React from "react";
import className from "classnames";

function Button({ children, num, del, calc, ...rest }) {
    const classes = className(
        rest.className,
        "flex items-center justify-center rounded-md h-12 text-3xl font-bold active:translate-y-0.5 active:bg-opacity-80",
        {
            "text-skin-num bg-skin-button-num shadow-b-num": num,
            "text-skin-calc bg-skin-button-calc shadow-b-calc": calc,
            "text-skin-del bg-skin-button-del text-xl tracking-wide shadow-b-del":
                del,
        }
    );
    return (
        <button {...rest} className={classes}>
            {children}
        </button>
    );
}

Button.propTypes = {
    checkVariationValue: ({ num, del, calc }) => {
        const count = Number(!!num) + Number(!!del) + Number(!!calc);

        if (count > 1) {
            return new Error("Only one of num, del, calc can be true");
        }
    },
};

export default Button;
