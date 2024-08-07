const square = (input) => {
    try {
        return input**2;
    } catch(err) {
        return 'Error'
    }
}

export default square