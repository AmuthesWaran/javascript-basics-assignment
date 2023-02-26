/* Write a Program to Flatten a given n-dimensional array */

const flatten = (myArray) => {
		if (Array.isArray(myArray) != true) {
		return null
	} 
		else {
		var result = []
		result = myArray.flat(Infinity)
		return result
		// console.log(result);		
	}

};

flatten(([1, [2, 3], [[4], [5]]]))


/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
