/**
 * 
 * @param {Array} arr 
 * @return {any[]} an array of removed double duplicates
 * @example var arr = [0, 0, 1];
 * // returns 1 because it is the only one which does not repeat
 */
function ignoreDuplicates(arr) {
    var newArr = [];

    return arr.filter((val, index) => {
        if (arr[index] === arr.indexOf(val) && arr[index] === arr.lastIndexOf(val)) {
            return newArr.push(val);
        }
    });
}

export { ignoreDuplicates };