export const calc = (n1, n2, op) => {
    switch (op) {
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "/":
            return n1 / n2;
        case "x":
            return n1 * n2;
        default:
            return 0;
    }
};
