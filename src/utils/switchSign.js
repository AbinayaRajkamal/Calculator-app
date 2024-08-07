const switchSign = (number) => {
    try {
        if(number > 0) {
            return -number
        } else if ( number < 0) {
            return Math.abs(number)
        }
        else {
            return 0;
        }
    } catch(err) {
        return 'Error'
    }
}

export default switchSign