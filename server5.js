const express = require('express');
var isPalindrome = require('is-palindrome');


const app = express();


app.get("/", (req, res) => {

	res.send(`<h1>El servidor funciona correctamente</h1>
<p>Aquí iría el contenido del mensaje</p>`);
});

app.get("/check", (req, res) => {
	const palabra = req.query.palabra;
	if (isPalindrome(palabra)) {
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