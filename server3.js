const express = require('express');
const { dirname } = require('path');

const app = express();


app.get("/", (req, res) => {

	res.send(`<h1>El servidor funciona correctamente</h1>
<p>Aquí iría el contenido del mensaje</p>`);
});

app.get("/team", (req, res) => {
	res.sendFile(__dirname + '/server3-files/team.html');
});

app.get("/about", (req, res) => {
	res.sendFile(__dirname + "/server3-files/about.html");
})


app.use((req, res) => {
	res.status(404).send("404. Resource not found");
});


app.listen(3000, () => console.log('Example app is listening on port 3000.'));