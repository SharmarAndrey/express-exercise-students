const express = require('express');

const app = express();

app.get("/mensaje", (req, res) => {

	res.send(`<h1>El servidor funciona correctamente</h1>
<p>Aquí iría el contenido del mensaje</p>`);
});
app.use((req, res) => {
	res.status(404).send("No he encontrado lo que buscabas...");
})
app.listen(3000, () => console.log('Example app is listening on port 3000.'));