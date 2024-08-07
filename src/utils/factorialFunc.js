import { factorial } from "mathjs";

const factorialFunc = (number) => {
    try {
        return factorial(number);
    } catch (err) {
        return 'Error';
    }
}

export default factorialFunc;