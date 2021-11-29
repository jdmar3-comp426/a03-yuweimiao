import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    var output = 0;
    for(let i =0; i<array.length;i++) {
        output+=array[i];
    }
    return output;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    var median= 0;
    array.sort();
    var len = array.length;
    if(len%2 == 0) {
        median = (array[len/2]+array[(len/2)-1])/2;
    } else {
        median = array[(len-1)/2];
    }
    return median;
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    array.sort();
    var len = array.length;
    var sum = getSum(array);
    var mean = sum/len;
    var median = getMedian(array);
    var min = array[0];
    var max = array[len-1];
    var variance = 0;
    for(let i = 0; i < len; i++) {
        variance += (array[i]-mean)**2;
    }
    variance = variance/len;
    var std = variance**(1/2);
    return "{{min: "+min+", median:"+median+", max:"+max+", variance:"+variance+", mean:"+mean+", length:"+len+", sum:"+sum+", standard_deviation:"+std+"}}";
}


