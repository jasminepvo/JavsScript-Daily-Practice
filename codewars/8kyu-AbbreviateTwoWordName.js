/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

STRINGSARRAYSFUNDAMENTALS
*/

function abbrevName(name) {
	//break into two strings where there is a space
	name = name.split(" ");

	first = name[0];
	second = name[1];

	let initials = first[0] + "." + second[0];

	return initials.toUpperCase();
}

console.log(abbrevName("Sam Harris"), "S.H");

//Solve time: 17min49sec

/*
Best practice solution
function abbrevName(name){

  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

solution 2
function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}
*/
