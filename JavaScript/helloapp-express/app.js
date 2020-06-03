const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/webapp', (request, response) => {
	response.send('Welcome to Webapp Home Page');
});

app.listen(PORT, () => console.log(`application started listening on port ${PORT}`));
