/* Write a Program to convert an array of objects to an object
	based on a given key */


const convert = (obj, key) => {
	var newObj = {};
	if (typeof obj != "object") {
		return null
	} 
	else {
	    obj.forEach(element => {
			newObj[element[key]] = element;
		});
		
		return newObj;		
	}

}

var newObj = convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id');

console.log(newObj);






/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;
