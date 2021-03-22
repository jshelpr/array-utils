/**
 * 
 * @param {Array} arr 
 * @returns an Array containing the type of every data in the array according to their corresponding index
 */
function returnType(arr) {
    var newArr = [];

    arr.forEach(val => {
        return newArr.push(typeof val);
    });

    return newArr;
}

export { returnType };