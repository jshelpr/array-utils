/**
 * 
 * @param {Array} arr 
 * @param {VoidFunction} callback 
 * @returns filters out the array according to the callback function provided
 */
function filterArr(arr, callback) {
    return arr.filter(callback);
}

export { filterArr };