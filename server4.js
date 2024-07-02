const express = require('express');
const { palindrome, esPar } = require('./utils/palindrome');


const app = express();
/* const isPalindrome = palindrome(); */

app.get("/", (req, res) => {

	res.send(`<h1>El servidor funciona correctamente</h1>
<p>Aquí iría el contenido del mensaje</p>`);
});

app.get("/check/:word", (req, res) => {
	const word = req.params.word;
	if (palindrome(word)) {
		res.send("Es un palíndromo")
	}
	else {
		res.send("No es un palindromo")
	};

});

app.use((req, res) => {
	res.status(404).send("404. Resource not found");
});


app.listen(3000, () => console.log('Example app is listening on port 3000.'));