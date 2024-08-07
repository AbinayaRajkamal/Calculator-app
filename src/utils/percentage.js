const percentage = (number) => {
    try {
        return number/100;
    } catch (err) {
        return 'Error'
    }
}

export default percentage;