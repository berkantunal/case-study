/**
 * Currency Converter
 */
function Converter () {
    
    /**
     * Calculate
     */
    this.calculate = function () {
        return 0
    }

    /**
     * Convert string
     * 
     * @param {string} str
     */
    this.convert = function (str = '') {
        var price = calculate()

        return str.replace('?', price);
    }

    return this;
}

module.exports = Converter