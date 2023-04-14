const express = require('express');
const app = express();
const loanRouter = require('./routes');

app.use('/', loanRouter);
app.use('/loans', loanRouter);

app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});