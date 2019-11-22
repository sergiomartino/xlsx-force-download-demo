const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/download', (req, res) => {
	res.set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
	setTimeout(() => {
		res.download('public/file.xlsx');
	}, 5000);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));