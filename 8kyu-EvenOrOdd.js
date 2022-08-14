//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
	if (number % 2 === 0) {
		return "Even";
	} else {
		return "Odd";
	}
}

//Test
even_or_odd(0); // Even
even_or_odd(1); // Odd
even_or_odd(2); // Even
even_or_odd(3); // Odd
even_or_odd(4); // Even
even_or_odd(5); // Odd
