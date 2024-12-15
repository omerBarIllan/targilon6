import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

function calc(x, y, operation) {
    switch (operation) {
        case '0':
            return x + y;
        case '1':
            return x - y;
        case '2':
            return x * y;
        case '3':
            return x / y;
        default:
            return 'incalculable';
    }
}

app.post('/calc', function (req, res) {
    const x = parseInt(req.body.x);
    const y = parseInt(req.body.y);
    const operation = req.body.operation;
    const result = calc(x, y, operation);
    res.end(`<html>
<body>
The answer is ${result}.
<a href="/index.html">reset</a>
</body>
</html>`);
});

app.listen(880, () => {
    console.log('Server is running on port 880');
});
