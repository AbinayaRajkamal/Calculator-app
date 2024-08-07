import { sqrt } from "mathjs";

const squareRoot = (number) => {
    try{
        return sqrt(number)
    }
    catch(err) {
        return 'Error'
    }
}

export default squareRoot;