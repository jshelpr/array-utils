/**
 * 
 * @param {Array} arr 
 */
function removeDuplicates(arr) {
    return arr.filter((val, index) => {
        return arr.indexOf(val) !== index;
    });
}

var myArr = [0, 1, 1, 0];
console.log(removeDuplicates(myArr));