
const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');

const { processInvoice } = require('./invoice');
// Middleware to parse request body
app.use(express.urlencoded({ extended: true }));

// Set up static files serving
app.use(express.static('public'));

// Define routes
// ...
app.post('/submit', (req, res) => {
    const product = req.body.product;
    const quantity = req.body.quantity;
    console.log(product,quantity);
    // Perform logic with the submitted data
    const invoiceData = processInvoice(product, quantity);
    const total_price=invoiceData.reduce(
        (accumulator, currentValue) => accumulator + currentValue.final_price,
        0
      );
    const total_savings=invoiceData.reduce(
        (accumulator, currentValue) => accumulator + currentValue.savings,
        0
      );

      const prices={total_price,total_savings};

    res.render('invoice', { invoiceData,prices });
});

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/public' });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
