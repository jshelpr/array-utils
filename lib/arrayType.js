/**
 * @param {Array} arr 
 * @param  {Array} types 
 */

function arrayType(arr, types) {
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < types.length; ++j) {
            return typeof arr[i] === types[j] ? arr : new Error('sss');
        }
    }
};

export { arrayType };
// under developement 👨🏻‍💻