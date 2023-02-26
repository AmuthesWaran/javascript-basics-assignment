/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (input) => {
	var output = ""
     //printing new line
     for (let i = 1; i <= input; i++) {
          // printing spaces
          for (let j = 0; j <= input - i; j++) {
            output = output + " "
          }
          // printing stars
          for (let k = 0; k < i; k++) {
               output = output + "* "
          }
          output = output + " " + "\n"
        }
        return output
     //    console.log(output);

};

buildPyramid(6)
/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
