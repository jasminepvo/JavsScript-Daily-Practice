/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

ARRAYSFUNDAMENTALS
*/

function countSheeps(arrayOfSheep) {
	let totalSheep = 0;
	arrayOfSheep.forEach((sheep) => {
		if (sheep) {
			totalSheep += 1;
		}
	});
	return totalSheep;
}

//Solve time: 10min39sec

//Other ways to solve would be, totalSheep++ or filter() or reduce()
