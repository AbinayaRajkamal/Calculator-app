import { evaluate } from "mathjs";

const calculatedResult = (expression) => {
    try {
        const result =  evaluate(expression)
        return result 
    } catch(err) {
        throw err;
    }
}

export default calculatedResult;