/**
 * 
 * @param {*} array 
 * @param {*} size 
 */
function chunk(array, size) {
    size = Math.max(size, 0);
    let length = array == null ? 0 : array.length;
    if (!length || size < 0) {
        return [];
    }

    length = Math.ceil(length / size);

    let index = 0;
    let resIndex = 0;
    const result = new Array(length);
    while(resIndex < length) {
        result[resIndex++] = array.slice(index, index + size);
        index += size;
    }
    return result;
}

export default chunk;