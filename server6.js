const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/server-6-static-files'));
app.use(express.urlencoded({ extended: true }));

app.get('/formulario', (req, res) => {
	res.status(200).send(`
        <html>
        <head>
        <link rel="stylesheet" href="/estilos.css">
        </head>
        <body>
        <form class="form" method="POST" action="/formulario">
        <label for="name" class="label-name">Name</label>
        <input type="text" id="name" name="name" maxlength="40" class="field field-name" />
  
        <label for="email" class="label-email">Email Address</label>
        <input type="email" id="email" name="email" maxlength="40" class="field field-email" />
  
        <label for="message" class="label-message">Message</label>
        <textarea id="message" name="message" cols="30" rows="5" maxlength="400" class="field field-message"></textarea>
  
        <input type="submit" value="Send Message" class="button" />
      </form>
      </body>
        </html>
    `);
});

app.post("/formulario", (req, res) => {
	const { name, email, message } = req.body;
	const data = `Name: ${name}, Email: ${email}, Message: ${message}\n`;
	fs.appendFile(path.join(__dirname, 'inscritos.csv'), data, (err) => {
		if (err) {
			console.error('Error writing to file', err);
			res.status(500).send('Error writing to file');
		} else {
			res.send("Usuario inscrito correctamente");
		}
	});
});

app.use((req, res) => {
	res.status(404).send('Recurso no encontrado...');
});

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
