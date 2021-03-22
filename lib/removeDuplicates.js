/**
 * 
 * @param {Array} arr 
 * @return {any[]} an array of removed double duplicates
 * @example removeDuplicates([0, 1, 0, 0, 1, 1, 1])
 * the result would be [0, 1]
 */
function removeDuplicates(arr) {
    var newArr = [];

    return arr.filter((val, index) => {
        if (arr.indexOf(val) !== index && arr.lastIndexOf(val) === index) {
            return newArr.push(val);
        }
    });
}

export { removeDuplicates };